// export const currentCollection = (collectionId, collections) => {
//   let collection = {};
//   let newCollection = [];

//   if (!collectionId) {
//     collection.title = "All Products";
//     collection.description = "Shop all products related to 801 Pickleball.";
//   } else {
//     newCollection =
//       collections.length > 0 &&
//       collections.filter((c) => c.id === collectionId)[0];

//     collection = { ...newCollection };
//   }

//   return collection;
// };

const imageBaseURL = "https://cdn.shopify.com/shopifycloud/web/assets/v1/";
export const creditCardImages = {
  visa: `${imageBaseURL}52d3db0594f3166f0aa9898a71d01a22.svg`,
  master: `${imageBaseURL}b07d7f70cd57ff74e7e2827f124bd756.svg`,
  amex: `${imageBaseURL}fa3c344b2f8c260afd44d7cd6b897936.svg`,
  discover: `${imageBaseURL}68781462cd17a0400081e4fcb97461a7.svg`,
  jcb: `${imageBaseURL}d37fc6cf4a3be5aa8f8c836148204e52.svg`,
  diners: `${imageBaseURL}9b08d4385696d2e1763079a1ee81c0fe.svg`,
  elo: `${imageBaseURL}1c16c733307a470dce0c30cf8fd11d4f.svg`,
  shop: `${imageBaseURL}25540e5c8ee1c9c066d1263a9e55115a.svg`,
  apple: `${imageBaseURL}f7c64529290cd70d6004d093b13ebea6.svg`,
  google: `${imageBaseURL}586c4df2d676cff792d2381cd5e01ad1.svg`,
};
