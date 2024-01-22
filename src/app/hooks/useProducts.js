// import { getProducts } from "app/redux/slices/productSlice";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const useProducts = () => {
//   const dispatch = useDispatch();
//   const { error, products, loading } = useSelector((state) => state.products);

//   useEffect(() => {
//     dispatch(getProducts());
//   }, [dispatch]);

//   return {
//     products,
//     isError: error,
//     isLoading: loading,
//   };
// };

// export default useProducts;



import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api.example.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
        setLoading(false);
        setError("Failed to fetch products");
      }
    };

    fetchProducts();
  }, []);

  return {
    products,
    isLoading: loading,
    isError: error,
  };
};

export default useProducts;
