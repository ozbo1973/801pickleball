import { useContext, useEffect } from "react";

import { ShopContext } from "contexts/ShopContext";

import BaseLayout from "components/layout/BaseLayout";
import Hero from "components/Hero";
import RichText from "components/RichText";
import TextWithImage from "components/TextWithImage";
import CollectionCard from "components/products/CollectionCard";
import Loading from "components/ui/Loading";
import { opaText, shedText, safeHarborText } from "config/supportText";

import { Grid, Box } from "@chakra-ui/react";

const Home = () => {
  const {
    fecthAllCollectionNoProducts,
    fetchCollectionById,
    collections,
  } = useContext(ShopContext);

  useEffect(() => {
    fecthAllCollectionNoProducts();
  }, [fetchCollectionById]);

  const displayProducts = () => {
    return collections.length === 0 ? (
      <Loading />
    ) : (
      collections.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))
    );
  };

  return (
    <BaseLayout>
      <Box>
        <Hero />

        <RichText
          heading="801 Pickleball's Product Collections"
          text="Hoodies, T-Shirts, Stickers and more..."
          mb="1rem"
        />

        <Grid p="1rem" templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}>
          {displayProducts()}
        </Grid>

        <RichText
          mb="2rem"
          heading="801 pickleball support"
          bgDark="brand.dark.600"
        />

        <TextWithImage
          reverse
          heading="Ogden Pickleball Association"
          image="https://ogdenpickleball.org/wp-content/uploads/2020/12/Main-Logo-180x179.png"
          text={opaText()}
          btnText="Join"
          btnAction={() => window.open("https://ogdenpickleball.org/join-now/")}
        />

        <TextWithImage
          heading="The Shed"
          image="https://static.wixstatic.com/media/b12b21_a8d7286bd62143b0b985da7c304ba16c~mv2_d_2398_1201_s_2.png/v1/fill/w_1554,h_439,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/b12b21_a8d7286bd62143b0b985da7c304ba16c~mv2_d_2398_1201_s_2.webp"
          text={shedText()}
          btnText="Schedule"
          btnAction={() => {
            window.open("https://www.theshedpb.com/");
          }}
        />

        <TextWithImage
          reverse
          heading="Safe Harbor"
          image="https://safeharborhope.org/wp-content/uploads/2019/04/2019_SafeHarbor_LogoHorizontal_340x103px.jpg"
          text={safeHarborText()}
          btnText="Donate"
          btnAction={() => {
            window.open("https://safeharborhope.org/");
          }}
        />
      </Box>
    </BaseLayout>
  );
};

export default Home;
