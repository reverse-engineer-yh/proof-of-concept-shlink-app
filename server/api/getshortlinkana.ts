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
    const string = String(body.slug);
    console.log(string);
    if (event.node.req.method === "POST") {
              // make it a string(?
      const createapi = await apiClient.getShortUrlVisits(string);
      console.log(createapi);
      return {
        status: "ok",
        createapistatus: createapi,
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
      error: e,
    };
  }
});
