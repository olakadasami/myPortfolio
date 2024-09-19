import { useEffect, useState } from "react";

export function useScreenShot(url) {
  const [screenshot, setScreenshot] = useState(null);

  const apiUrl = `https://api.apiflash.com/v1/urltoimage?access_key=${process.env.REACT_APP_SCREENSHOT_API_KEY}&wait_until=network_idle&url=${url}`;

  async function getScreenShot(url) {
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
