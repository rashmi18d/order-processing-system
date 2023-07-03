import axios from "axios";

const getProducts = async () => {
  const productData = await axios.get("https://fakestoreapi.com/products");
  console.log(productData, "productData");
  return productData.data
};

export default getProducts;
