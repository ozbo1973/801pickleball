import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import { ShopContext } from "contexts/ShopContext";

export const useRemoveCheckout = (route, query) => {
  const router = useRouter();
  const { thirdParty = null } = router.query;
  const { clearCheckout } = useContext(ShopContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const remove = async () => {
      await clearCheckout();
      router.replace({
        pathname: route || router.pathname,
        query: { ...query } || { ...router.query },
      });
    };

    if (route) {
      thirdParty && remove();
    } else {
      setLoading(false);
    }
  }, [thirdParty]);

  console.log(loading, "loading");
  return { thirdParty, loading };
};
