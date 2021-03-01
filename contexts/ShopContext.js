import { Component, createContext } from "react";
// import Client from "shopify-buy";
import Client from "shopify-buy/index.unoptimized.umd";
import { SHOPIFY_API, SHOPIFY_DOMAIN } from "config";

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: SHOPIFY_DOMAIN,
  storefrontAccessToken: SHOPIFY_API,
});

const ShopContext = createContext();

const handleLocalStorage = (key, val, remove) => {
  if (!window !== "undefined") {
    if (remove) {
      return localStorage.removeItem(key);
    }
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
    thirdPartyCheckout: null,
  };

  componentDidMount() {
    const checkoutId = handleLocalStorage("checkout_id");
    this.setThirdPartyCheckout(handleLocalStorage("thirdPartyCheckout"));

    if (checkoutId) {
      this.fetchCheckout(checkoutId);
    } else {
      this.createCheckout();
    }
  }

  getVariants = (handle) => {
    const qtyQuery = client.graphQLClient.query((root) => {
      root.add(
        "productByHandle",
        { args: { handle: `${handle}` } },
        (product) => {
          product.add("title");
          product.add("handle");
          product.add("id");
          product.addConnection(
            "variants",
            { args: { first: 99 } },
            (variant) => {
              variant.add("id");
              variant.add("title");
              variant.add("availableForSale");
              variant.add("quantityAvailable");
              variant.add("currentlyNotInStock");
              variant.add("price");
              variant.add("selectedOptions", (opts) => {
                opts.add("name");
                opts.add("value");
              });
            }
          );
        }
      );
    });

    return client.graphQLClient
      .send(qtyQuery)
      .then((res) => {
        return JSON.parse(JSON.stringify(res.model.productByHandle));
      })
      .catch(() => null);
  };

  getSelectedVariant = async (product, options) =>
    await client.product.helpers.variantForOptions(product, options);

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    handleLocalStorage("checkout_id", checkout.id);
    this.setThirdPartyCheckout();
    this.setState({ ...this.state, checkout });
  };

  clearCheckout = () => {
    const checkout = {};
    handleLocalStorage("checkout_id", checkout, "remove");
    this.createCheckout();
  };

  fetchCheckout = async (checkoutId) => {
    const checkout = await client.checkout.fetch(checkoutId);
    this.setState({ ...this.state, checkout: checkout || {} });
  };

  addItemToCheckout = async (variantId, quantity, showCart) => {
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
    showCart && this.openCart();
  };

  removeLineItem = async (lineItemId) => {
    const checkout = await client.checkout.removeLineItems(
      this.state.checkout.id,
      lineItemId
    );
    this.setState({ ...this.state, checkout });
  };

  updateStateProducts = async (products) => {
    // const products = await client.product.fetchAll();
    this.setState({ ...this.state, products });
  };

  fetchProductByHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    this.setState({ ...this.state, product });
  };

  updateStateCollections = async (collections) => {
    // const collections = await client.collection.fetchAll();
    this.setState({ ...this.state, collections });
  };

  // fetchCollectionById = async (id, show) => {
  //   const collection = await client.collection.fetchWithProducts(id, {
  //     firstProducts: show,
  //   });
  //   this.setState({ ...this.state, products: collection.products });
  // };

  closeCart = async () => {
    this.state.thirdPartyCheckout && (await this.clearCheckout());
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

  setThirdPartyCheckout = (party = null) => {
    if (!party) {
      //   remove thirdPartyCheckout
      handleLocalStorage("thirdPartyCheckout", "", "remove");
    } else {
      //   add thirdParty checkout
      handleLocalStorage("thirdPartyCheckout", party);
    }
    //   update state
    this.setState({
      ...this.state,
      thirdPartyCheckout: party,
      isCartOpen: !!party,
    });
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          updateStateProducts: this.updateStateProducts,
          fetchProductByHandle: this.fetchProductByHandle,
          updateStateCollections: this.updateStateCollections,
          // fetchCollectionById: this.fetchCollectionById,
          addItemToCheckout: this.addItemToCheckout,
          removeLineItem: this.removeLineItem,
          openCart: this.openCart,
          closeCart: this.closeCart,
          openMenu: this.openMenu,
          closeMenu: this.closeMenu,
          createCheckout: this.createCheckout,
          clearCheckout: this.clearCheckout,
          setThirdPartyCheckout: this.setThirdPartyCheckout,
          getVariants: this.getVariants,
          getSelectedVariant: this.getSelectedVariant,
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
