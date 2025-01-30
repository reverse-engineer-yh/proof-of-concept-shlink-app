import { ShlinkApiClient } from "@shlinkio/shlink-js-sdk";
import { FetchHttpClient } from "@shlinkio/shlink-js-sdk/browser";

const serverInfo = {
  baseUrl: "https://go.yuanhau.com",
  apiKey: process.env.shlink_api,
};

export const apiClient = new ShlinkApiClient(new FetchHttpClient(), serverInfo);
export default defineEventHandler((event) => {
  return "demo";
});
