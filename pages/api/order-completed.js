export default (req, res) => {
  res.redirect("/products?completedOrder=true");
};
