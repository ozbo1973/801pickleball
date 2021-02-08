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
