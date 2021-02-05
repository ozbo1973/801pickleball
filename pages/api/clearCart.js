import { clearCheckout } from "config/helpers";

export default (req, res) => {
  clearCheckout();
  res.redirect("/products");
};
