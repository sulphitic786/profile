// import { getUsers } from "app/redux/slices/userSlice";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const useUsers = () => {
//   const dispatch = useDispatch();
//   const { error, users, loading } = useSelector((state) => state.users);

//   useEffect(() => {
//     dispatch(getUsers());
//   }, [dispatch]);

//   return {
//     users,
//     isError: error,
//     isLoading: loading,
//   };
// };

// export default useUsers;



import { useState, useEffect } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://api.example.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]);
        setLoading(false);
        setError("Failed to fetch users");
      }
    };

    fetchUsers();
  }, []);

  return {
    users,
    isLoading: loading,
    isError: error,
  };
};

export default useUsers;
