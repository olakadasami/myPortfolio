import { queryOptions } from "@tanstack/react-query";
import { fetchScreenShot } from "../shared/services/fetchScreenshot";

export function screenshotOptions(url: string) {
  return queryOptions({
    queryKey: ["screenshot", url],
    queryFn: () => fetchScreenShot(url),
    retry: false,
  });
}
