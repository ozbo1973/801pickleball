import ls from "local-storage";

export default (req, res) => {
  console.log(ls.get("checkout_id"));
  ls.remove("checkout_id");
  res.redirect("/products");
};
