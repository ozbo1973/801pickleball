export const currentCollection = (collectionId, collections) => {
  let collection = {};

  if (!collectionId) {
    collection.title = "All Products";
    collection.description = "Shop all products related to 801 Pickleball.";
  } else {
    const newCollection =
      collections.length > 0 &&
      collections.filter((c) => c.id === collectionId)[0];

    collection = { ...newCollection };
  }

  return collection;
};
