const prod = process.env.NODE_ENV === "production";

export const SHOPIFY_API = prod
  ? process.env.NEXT_PUBLIC_SHOPIFY_API
  : process.env.NEXT_PUBLIC_SHOPIFY_API_DEV;
export const SHOPIFY_DOMAIN = prod
  ? process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN
  : process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN_DEV;
export const UNDER_CONSTRUCTION = false;
export const UNDER_CONSTRUCTION_TEXT = "Shop is coming soon.";
