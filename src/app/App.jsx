import { CssBaseline } from "@mui/material";
import { useRoutes } from "react-router-dom";
import { MatxTheme } from "./components";
import { AuthProvider } from "./contexts/FirebaseAuthContext";
import { SettingsProvider } from "./contexts/SettingsContext";
import routes from "./routes";
import "../fake-db";
import "../app/utils/style.css";
import { AlertProvider } from "./contexts/AlertContext";

const App = () => {
  const content = useRoutes(routes);
  // netlify deploy --dir=./build
  return (
    <SettingsProvider>
      <AuthProvider>
        <AlertProvider>
          <MatxTheme>
            <CssBaseline />
            {content}
          </MatxTheme>
        </AlertProvider>
      </AuthProvider>
    </SettingsProvider>
  );
};

export default App;
