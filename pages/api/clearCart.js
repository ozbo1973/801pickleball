import { clearCart } from "config/helpers";

export default (req, res) => {
  clearCart();
  res.redirect("/products");
};
