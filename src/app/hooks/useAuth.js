// import AuthContext from "app/contexts/JWTAuthContext";
import AuthContext from "app/contexts/FirebaseAuthContext";
// import AuthContext from "app/contexts/Auth0Context";
import { useContext } from "react";

const useAuth = () => useContext(AuthContext);

export default useAuth;
