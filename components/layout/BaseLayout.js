import Head from "next/head";
import { useRouter } from "next/router";
import { UNDER_CONSTRUCTION, BASE_URL } from "config";
import Navbar from "components/nav/Navbar";
import NavMenu from "components/nav/NavMenu";
import Cart from "components/products/Cart";
import Footer from "components/Footer";
import UnderConstruction from "components/layout/UnderConstruction";

const BaseLayout = ({ seo = {}, children }) => {
  const router = useRouter();
  const {
    title = "Shop 801 Pickleball",
    description = "Play pickleball in style and represent Utah with the collection of 801 pickleball clothing and soft prodducts.  ",
    ogImage = '"https://cdn.shopify.com/s/files/1/0528/7798/3897/files/logo-801.webp?v=1611838470"',
    ogURL = `${BASE_URL}${router.asPath}`,
    canonicalPath = router.asPath,
  } = seo;

  return (
    <>
      <Head>
        <title>{title}</title>
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
        <meta
          property="og:site_name"
          key="og:site_name"
          content="801 Pickleball"
        />
        <meta property="og:url" key="og:url" content={ogURL} />
        <meta property="og:image" key="og:image" content={ogImage} />

        <link rel="canonical" href={`${BASE_URL}${canonicalPath}`} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      {UNDER_CONSTRUCTION ? (
        <UnderConstruction />
      ) : (
        <>
          <Navbar />
          <NavMenu />
          <Cart />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default BaseLayout;
