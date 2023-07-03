import { useState, useEffect } from "react";
import getProducts from "../services/getProducts";

export const Product = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productDetails = await getProducts();
      setProductData(productDetails);
    };

    fetchData();
  }, []);

  // setProductData(getProducts());

  return (
    <div>
      Product Data
      {productData.map((item) => {
        return <div>{item.title}</div>;
      })}
    </div>
  );
};
