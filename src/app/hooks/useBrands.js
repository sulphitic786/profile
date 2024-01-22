// import { getBrands } from "app/redux/slices/brandSlice";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const useBrands = () => {
//   const dispatch = useDispatch();
//   const { error, brands, loading } = useSelector((state) => state.brands);

//   useEffect(() => {
//     dispatch(getBrands());
//   }, [dispatch]);

//   return {
//     brands,
//     isError: error,
//     isLoading: loading,
//   };
// };

// export default useBrands;



import { useState, useEffect } from "react";

const useBrands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch("https://api.example.com/brands");
        if (!response.ok) {
          throw new Error("Failed to fetch brands");
        }
        const data = await response.json();
        setBrands(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error("Error fetching brands:", error);
        setBrands([]);
        setLoading(false);
        setError("Failed to fetch brands");
      }
    };

    fetchBrands();
  }, []);

  return {
    brands,
    isLoading: loading,
    isError: error,
  };
};

export default useBrands;
