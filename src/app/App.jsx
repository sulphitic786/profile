import { CssBaseline } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import { MatxTheme } from './components';
// import { AuthProvider } from './contexts/JWTAuthContext';
import { AuthProvider } from './contexts/FirebaseAuthContext';
import { SettingsProvider } from './contexts/SettingsContext';
import routes from './routes';
import '../fake-db';
import '../app/utils/style.css';

const App = () => {
  const content = useRoutes(routes);
  console.log('content', content);
  return (
    <SettingsProvider>
      <AuthProvider>
        <MatxTheme>
          <CssBaseline />
          {content}
        </MatxTheme>
      </AuthProvider>
    </SettingsProvider>
  );
};

export default App;
