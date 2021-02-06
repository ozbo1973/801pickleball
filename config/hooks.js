import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { clearCheckout, removeCartQueryChar } from "config/helpers";
import { ShopContext } from "contexts/ShopContext";

export const useRemoveCheckout = () => {
  const router = useRouter();
  const { removeCheckout = null } = router.query;
  const { createCheckout } = useContext(ShopContext);

  useEffect(() => {
    const remove = () => {
      if (removeCheckout) {
        clearCheckout();
        createCheckout();
        delete router.query.removeCheckout;

        router.replace({
          pathname: router.pathname,
          query: { ...router.query },
        });
      }
    };
    return remove();
  }, [removeCheckout]);
  return;
};
