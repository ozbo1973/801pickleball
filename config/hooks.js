import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import { ShopContext } from "contexts/ShopContext";

export const useRemoveCheckout = (isThirdParty) => {
  const router = useRouter();
  const { thirdParty = null } = router.query;
  const { setThirdPartyCheckout } = useContext(ShopContext);
  const [loading, setLoading] = useState(true);

  const redirectThirdParty = (route, query) => {
    router.push({
      pathname: route || "/",
      query: { ...query } || {},
    });
  };

  useEffect(() => {
    !isThirdParty && setLoading(false);

    if (thirdParty) {
      setThirdPartyCheckout(isThirdParty);
      setLoading(false);
    }
  }, [thirdParty]);

  return { thirdParty, loading, redirectThirdParty };
};

export const useSelectedVariant = (product) => {
  const [selectedVariant, setSelectedVariant] = useState();
  const [size, setSize] = useState("xs");
  const [loadingProduct, setLoadingProduct] = useState(true);

  const handleOptionChange = () => {
    const { variants } = product;
    const selectedProduct = variants.filter((variant) => {
      const sizes = variant.selectedOptions.filter(
        (o) => o.name === "Title" && o.value === size
      );
      return sizes.length > 0;
    });

    setSelectedVariant(selectedProduct[0] || product.variants[0]);
    setLoadingProduct(false);
  };

  useEffect(() => {
    product && handleOptionChange();
  }, [product, handleOptionChange]);

  return { selectedVariant, setSize, loadingProduct };
};
