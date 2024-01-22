// import { getNotification } from "app/redux/slices/notificationSlice";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const useNotification = () => {
//   const dispatch = useDispatch();
//   const { notifications } = useSelector((state) => state.notifications);

//   useEffect(() => {
//     dispatch(getNotification());
//   }, [dispatch]);

//   return { notifications };
// };

// export default useNotification;


import { useState, useEffect } from "react";

const useNotification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        // Replace the following URL with your actual notification endpoint
        const response = await fetch("https://api.example.com/notifications");
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []); // The empty dependency array ensures the effect runs only once on mount

  return { notifications };
};

export default useNotification;
