import Head from "next/head";
import { UNDER_CONSTRUCTION } from "config";
import Navbar from "components/nav/Navbar";
import NavMenu from "components/nav/NavMenu";
import Cart from "components/products/Cart";
import Footer from "components/Footer";
import UnderConstruction from "components/layout/UnderConstruction";

const BaseLayout = ({ seo = {}, children }) => {
  const {
    title = "Shop 801 Pickleball",
    description = "Play pickleball in style and represent Utah with the collection of 801 pickleball clothing and soft prodducts.  ",
  } = seo;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
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
