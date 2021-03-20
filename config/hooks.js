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
  const { getVariants, getSelectedVariant } = useContext(ShopContext);
  const [selectedVariant, setSelectedVariant] = useState();
  const [optionsSelected, setOptionsSelected] = useState({});
  const [loadingProduct, setLoadingProduct] = useState(true);

  let mounted;

  const handleOptionChange = async (option) => {
    const { variants } = await getVariants(product.handle);
    const fullOptions = { ...optionsSelected, ...option };

    // get selected variants
    const selectedProduct = await getSelectedVariant(product, fullOptions);
    // determine if in stock
    if (selectedProduct) {
      const inventoryCheck = variants.filter(
        (variant) => variant.id === selectedProduct.id
      )[0];

      selectedProduct.availableToSell = inventoryCheck.availableForSale;
      selectedProduct.outOfStock = inventoryCheck.currentlyNotInStock;
      selectedProduct.limitedInventory =
        inventoryCheck.quantityAvailable < 6 &&
        inventoryCheck.quantityAvailable > 0
          ? inventoryCheck.quantityAvailable
          : null;

      setSelectedVariant(selectedProduct);
      setOptionsSelected(fullOptions);
    } else {
      setSelectedVariant(null);
    }
  };

  useEffect(() => {
    mounted = true;
    const productKeys = Object.keys(product).length;
    productKeys > 0 && setLoadingProduct(false);

    /* run handle option to enable add to cart on items that dont require size choice. */
    if (productKeys > 0 && product.variants.length === 1) {
      const { name, value } = product.variants[0].selectedOptions[0];
      handleOptionChange({ [name]: value });
    }

    return () => (mounted = false);
  }, []);

  return {
    selectedVariant,
    handleOptionChange,
    loadingProduct,
  };
};

export const useScroll = () => {
  const [scroll, setScroll] = useState(false);

  const listener = () => {
    const offset = window.scrollY;
    offset > 250 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    if (window !== "undefined") {
      window.addEventListener("scroll", listener);
    }
    return () => {
      if (window !== "undefined") {
        window.removeEventListener("scroll", listener);
      }
    };
  });
  return [scroll];
};

export const useUpdateState = ({ products, collections, product }) => {
  const {
    updateStateCollections,
    updateStateProducts,
    updateStateProduct,
  } = useContext(ShopContext);
  const [stateLoading, setLoading] = useState(true);

  useEffect(() => {
    products && updateStateProducts(products);
    collections && updateStateCollections(collections);
    product && updateStateProduct(product);
    setLoading(false);
  }, []);
  return { stateLoading };
};
