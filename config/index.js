const prod = process.env.NODE_ENV === "production";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const SHOPIFY_API = prod
  ? process.env.NEXT_PUBLIC_SHOPIFY_API
  : process.env.NEXT_PUBLIC_SHOPIFY_API_DEV;

export const SHOPIFY_DOMAIN = prod
  ? process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN
  : process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN_DEV;

export const UNDER_CONSTRUCTION = process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION;

export const OPTION_LABELS = { size: "Title", quantity: "Quantity" };

/* 2021-2-28 version 2.0 make static pages for better SEO.


2021-2-15: version 1.2 
    set under constructions : homepage adjust so doesnt overlap. 
    Testing Home page.
    still needs fixed.
    Testing vercel - success
    fix the support pics.
 */
