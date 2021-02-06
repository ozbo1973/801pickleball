import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { ShopContext } from "contexts/ShopContext";

export const useRemoveCheckout = () => {
  const router = useRouter();
  const { completedOrder = null } = router.query;
  const { clearCheckout } = useContext(ShopContext);

  useEffect(() => {
    const remove = async () => {
      if (completedOrder) {
        await clearCheckout();
        delete router.query.completedOrder;

        router.replace({
          pathname: router.pathname,
          query: { ...router.query },
        });
      }
    };
    return remove();
  }, [completedOrder]);
  return;
};
