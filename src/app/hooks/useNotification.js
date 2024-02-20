import { collection, getDocs, addDoc, query, where, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { fireStore } from 'config';
import { useState, useEffect } from "react";
import { getIsoDate } from 'app/utils/utils';
import useAuth from './useAuth';

const useNotification = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const { logout, user, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      fetchNotifications();
    }
  }, [user]);

  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireStore, 'notifications'), where('deleted_at', '==', ""));
      const response = await getDocs(q);
      const dataFromFirebase = response?.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setLoading(false);
      setNotifications(dataFromFirebase);
      // console.log('dataFromFirebase:', dataFromFirebase);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching data:', error);
    }
  };


  const clearNotifications = async (data) => {
    // console.log("data", data)
    setLoading(true);
    try {
      const response = await getDocs(collection(fireStore, 'notifications'));
      const dataFromFirebase = response?.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setLoading(false);
      setNotifications(dataFromFirebase);
      console.error('dataFromFirebase:', dataFromFirebase);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching data:', error);
    }
  };

  const deleteNotification = async (id) => {
    setLoading(true);
    try {
      const notificationRef = doc(fireStore, 'notifications', id);
      await updateDoc(notificationRef, {
        deleted_at: getIsoDate() // Set deleted_at to the current date
      });
      // Remove the deleted notification from the notifications state
      setNotifications((prevNotifications) =>
        prevNotifications.filter((notification) => notification.id !== id)
      );
      setLoading(false);
      console.log('Notification deleted successfully.');
    } catch (error) {
      setLoading(false);
      console.error('Error deleting notification:', error);
    }
  };

  return { notifications, loading, clearNotifications, deleteNotification };
};

export default useNotification;
