import { useEffect, useState } from "react";

export function useScreenShot(url: string) {
  const [screenshot, setScreenshot] = useState("");

  const SECRET_KEY =
    import.meta.env.MODE === "development"
      ? import.meta.env.PUBLIC_SCREENSHOT_API_KEY
      : import.meta.env.SCREENSHOT_API_KEY;
  const apiUrl = `https://api.apiflash.com/v1/urltoimage?access_key=${SECRET_KEY}&wait_until=network_idle&url=${url}`;

  async function getScreenShot(url: string) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        // Since the response is a redirect URL, we'll extract the final URL from the response
        setScreenshot(res.url);
      } else {
        console.error("Error generating screenshot:", res.statusText);
      }
    } catch (error) {
      console.error("Error fetching the screenshot:", error);
    }
  }
  useEffect(() => {
    getScreenShot(apiUrl);
  }, [apiUrl]);

  return screenshot;
}
