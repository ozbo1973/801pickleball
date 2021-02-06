import { Component, createContext } from "react";
import Client from "shopify-buy";
import { SHOPIFY_API, SHOPIFY_DOMAIN } from "config";

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: SHOPIFY_DOMAIN,
  storefrontAccessToken: SHOPIFY_API,
});

const ShopContext = createContext();

const handleLocalStorage = (key, val) => {
  if (!window !== "undefined") {
    if (!val) {
      return localStorage[key];
    } else {
      localStorage.setItem(key, val);
    }
  }
};

export class ShopProvider extends Component {
  state = {
    product: {},
    products: [],
    checkout: {},
    collections: [],
    isCartOpen: false,
    isMenuOpen: false,
  };

  componentDidMount() {
    const checkoutId = handleLocalStorage("checkout_id");
    if (checkoutId) {
      this.fetchCheckout(checkoutId);
    } else {
      this.createCheckout();
    }
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    handleLocalStorage("checkout_id", checkout.id);
    this.setState({ ...this.state, checkout });
  };

  fetchCheckout = async (checkoutId) => {
    const checkout = await client.checkout.fetch(checkoutId);
    this.setState({ ...this.state, checkout: checkout || {} });
  };

  addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    const checkout = await client.checkout.addLineItems(
      handleLocalStorage("checkout_id"),
      lineItemsToAdd
    );

    this.setState({ ...this.state, checkout });
    this.openCart();
  };

  removeLineItem = async (lineItemId) => {
    const checkout = await client.checkout.removeLineItems(
      this.state.checkout.id,
      lineItemId
    );
    this.setState({ ...this.state, checkout });
  };

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ ...this.state, products });
  };

  fetchProductByHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    this.setState({ ...this.state, product });
  };

  fecthAllCollectionNoProducts = async () => {
    const collections = await client.collection.fetchAll();
    this.setState({ ...this.state, collections });
  };

  fetchCollectionById = async (id, show) => {
    const collection = await client.collection.fetchWithProducts(id, {
      firstProducts: show,
    });
    this.setState({ ...this.state, products: collection.products });
  };

  closeCart = () => {
    this.setState({ ...this.state, isCartOpen: false });
  };
  openCart = () => {
    this.setState({ ...this.state, isCartOpen: true });
  };
  closeMenu = () => {
    this.setState({ ...this.state, isMenuOpen: false });
  };
  openMenu = () => {
    this.setState({ ...this.state, isMenuOpen: true });
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductByHandle: this.fetchProductByHandle,
          fecthAllCollectionNoProducts: this.fecthAllCollectionNoProducts,
          fetchCollectionById: this.fetchCollectionById,
          addItemToCheckout: this.addItemToCheckout,
          removeLineItem: this.removeLineItem,
          openCart: this.openCart,
          closeCart: this.closeCart,
          openMenu: this.openMenu,
          closeMenu: this.closeMenu,
          createCheckout: this.createCheckout,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;
export { ShopConsumer, ShopContext };
export default ShopProvider;
