// import { getCategories } from "app/redux/slices/categorySlice";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const useCategory = () => {
//   const dispatch = useDispatch();
//   const { error, categories, loading } = useSelector((state) => state.categories);

//   useEffect(() => {
//     dispatch(getCategories());
//   }, [dispatch]);

//   return {
//     categories,
//     isError: error,
//     isLoading: loading,
//   };
// };

// export default useCategory;




import { useState, useEffect } from "react";

const useCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://api.example.com/categories");
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories([]);
        setLoading(false);
        setError("Failed to fetch categories");
      }
    };

    fetchCategories();
  }, []);

  return {
    categories,
    isLoading: loading,
    isError: error,
  };
};

export default useCategory;
