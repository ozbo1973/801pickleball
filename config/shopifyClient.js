// import Client from "shopify-buy";
import Client from "shopify-buy/index.unoptimized.umd";
import { SHOPIFY_API, SHOPIFY_DOMAIN } from "config";

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: SHOPIFY_DOMAIN,
  storefrontAccessToken: SHOPIFY_API,
});

export default client;
