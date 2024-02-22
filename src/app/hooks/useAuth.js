// import AuthContext from "../contexts/JWTAuthContext";
import AuthContext from "../contexts/FirebaseAuthContext";
// import AuthContext from "../contexts/Auth0Context";
import { useContext } from "react";

const useAuth = () => useContext(AuthContext);

export default useAuth;
