// import { getRatings } from "app/redux/slices/ratingSlice";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const useRatings = () => {
//   const dispatch = useDispatch();
//   const { error, ratings, loading } = useSelector((state) => state.ratings);

//   useEffect(() => {
//     dispatch(getRatings());
//   }, [dispatch]);

//   return {
//     ratings,
//     isError: error,
//     isLoading: loading,
//   };
// };

// export default useRatings;



import { useState, useEffect } from "react";

const useRatings = () => {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await fetch("https://api.example.com/ratings");
        if (!response.ok) {
          throw new Error("Failed to fetch ratings");
        }
        const data = await response.json();
        setRatings(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error("Error fetching ratings:", error);
        setRatings([]);
        setLoading(false);
        setError("Failed to fetch ratings");
      }
    };

    fetchRatings();
  }, []);

  return {
    ratings,
    isLoading: loading,
    isError: error,
  };
};

export default useRatings;
