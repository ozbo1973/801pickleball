import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { clearCheckout } from "config/helpers";
import { ShopContext } from "contexts/ShopContext";

export const useRemoveCheckout = () => {
  const router = useRouter();
  const { removeCheckout = null } = router.query;
  const { createCheckout } = useContext(ShopContext);

  useEffect(() => {
    const remove = async () => {
      if (removeCheckout) {
        clearCheckout();
        await createCheckout();
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
