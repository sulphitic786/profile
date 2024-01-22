import { Navigate, useLocation } from 'react-router-dom';

const Redirect = () => {
  let location = useLocation();

  // Get redirect location or provide fallback
  const from = location.state?.from || '/dashboard/default';
  console.log('location.state?.from', location.state?.from);
  console.log(from);

  // in auth callback logic, once authenticated navigate (redirect) back
  // to the route originally being accessed.
  return <Navigate to={from} />;
};

export default Redirect;
