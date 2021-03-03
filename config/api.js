import axios from "axios";
import client from "config/shopifyClient";
import { BASE_URL } from "config";

export const apiData = axios.create({
  baseURL: `${BASE_URL}/api`,
});

export const getCollections = async () => {
  try {
    const res = await client.collection.fetchAll();
    const collections = JSON.parse(JSON.stringify(res));
    return { collections };
  } catch (error) {
    return { collectionErr: error.message };
  }
};

export const fetchAllProducts = async () => {
  try {
    const res = await client.product.fetchAll();
    const products = JSON.parse(JSON.stringify(res));
    return { products };
  } catch (error) {
    return { productsErr: error.message };
  }
};

export const getCollectionById = async (id, show) => {
  try {
    const res = await client.collection.fetchWithProducts(id, {
      firstProducts: show,
    });
    const collection = JSON.parse(JSON.stringify(res));
    return { collection };
  } catch (error) {
    return { collectionIdErr: error.message };
  }
};

export const getProductByHandle = async (handle) => {
  try {
    const res = await client.product.fetchByHandle(handle);
    const product = JSON.parse(JSON.stringify(res));
    return { product };
  } catch (error) {
    return { productHandleErr: error.message };
  }
};
