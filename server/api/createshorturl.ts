import * as shlink from "@shlinkio/shlink-js-sdk";
import { NodeHttpClient } from "@shlinkio/shlink-js-sdk/node";
const serverInfo = {
  baseUrl: "https://go.yuanhau.com",
  apiKey: process.env.shlink_api,
};
export const apiClient = new shlink.ShlinkApiClient(
  new NodeHttpClient(),
  serverInfo,
);
export default defineEventHandler(async (event) => {
  try {
    setResponseHeader(event, "Content-Type", "application/json");
    const body = await readBody(event);
    console.log(body.url);
    if (event.node.req.method === "POST") {
      const req = await apiClient.createShortUrl({
        longUrl: `${body.url}`,
      });
      return {
        status: "ok",
        code: req.shortCode,
      };
    } else {
      return {
        status: "not ok",
      };
    }
  } catch (e) {
    console.log(e);
    return {
      status: "not ok",
    };
  }
});
