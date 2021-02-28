import Head from "next/head";
import { useRouter } from "next/router";
import { BASE_URL } from "config";

const Meta = ({ seo }) => {
  const router = useRouter();
  const {
    title = "801 Pickleball - Shop",
    description = "Play pickleball in style and represent Utah with the collection of 801 pickleball gear including shirts,hoodies,masks,hats,visors etc...  ",
    ogImage = '"https://cdn.shopify.com/s/files/1/0528/7798/3897/files/logo-801.webp?v=1611838470"',
    ogURL = `${BASE_URL}${router.asPath}`,
    canonicalPath = router.asPath,
    keywords = "",
  } = seo;

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta
        name="keywords"
        content={`801pickleball,801 pickleball,pickleball,pickleball clothing,pickleball attire,utah pickleball,utah pickleball clothing ${
          keywords && keywords
        }`}
      />

      <meta key="description" name="description" content={description} />
      <meta key="title" name="title" content={title} />

      <meta property="og:title" key="og:title" content={title} />
      <meta
        property="og:description"
        key="og:description"
        content={description}
      />
      <meta property="og:locale" key="og:locale" content="en_US" />
      <meta property="og:type" key="og:type" content="website" />
      <meta property="og:site_name" key="og:site_name" content={ogURL} />
      <meta property="og:url" key="og:url" content={ogURL} />
      <meta property="og:image" key="og:image" content={ogImage} />

      <link rel="canonical" href={`${BASE_URL}${canonicalPath}`} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
