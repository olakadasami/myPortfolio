import { env } from "../../../config/env";

export async function fetchScreenShot(url: string): Promise<string> {
  const apiUrl = `${env.PUBLIC_SCREENSHOT_URL}/screenshot`;

  const res = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({
      url,
      width: 1080,
      height: 650,
      deviceScaleFactor: 1,
    }),
  });

  if (!res.ok) {
    throw new Error(`Error generating screenshot: ${res.statusText}`);
  }

  const mimeType = res.headers.get("Content-Type") || "image/jpeg";
  const stream = res.body;

  if (!stream) {
    throw new Error("No stream available in response");
  }

  return await setImageFromStream(stream, mimeType);
}

async function setImageFromStream(
  stream: ReadableStream<Uint8Array>,
  mimeType: string = "image/jpeg"
): Promise<string> {
  const chunks: Uint8Array[] = [];
  const reader = stream.getReader();

  while (true) {
    const { done, value }: { done: boolean; value?: Uint8Array } =
      await reader.read();
    if (done) break;
    if (value) chunks.push(value);
  }

  const blob = new Blob(chunks, { type: mimeType });
  const imageUrl = URL.createObjectURL(blob);

  return imageUrl;
}
