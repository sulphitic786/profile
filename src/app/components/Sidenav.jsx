import { Fragment } from 'react';
import Scrollbar from 'react-perfect-scrollbar';
import { styled } from '@mui/material';
import { MatxVerticalNav } from 'app/components';
import useSettings from 'app/hooks/useSettings';
import useAuth from 'app/hooks/useAuth';
import { navigations } from 'app/navigations';

const StyledScrollBar = styled(Scrollbar)(() => ({
  paddingLeft: '1rem',
  paddingRight: '1rem',
  position: 'relative'
}));

const SideNavMobile = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: '100vw',
  background: 'rgba(0, 0, 0, 0.54)',
  zIndex: -1,
  [theme.breakpoints.up('lg')]: { display: 'none' }
}));

const filterNavigations = (navigations, userRole) => {
  return navigations.reduce((filtered, item) => {
    if (!item?.auth || item?.auth?.some((role) => userRole?.includes(role))) {
      if (item?.children) {
        const children = filterNavigations(item?.children, userRole);
        if (children?.length > 0) {
          filtered.push({ ...item, children });
        }
      } else {
        filtered.push(item);
      }
    }
    return filtered;
  }, []);
};

const Sidenav = ({ children }) => {
  const { settings, updateSettings } = useSettings();
  const { user } = useAuth();
  // const userRole = user?.roles || [];
  const userRole = ['ADMIN'];

  const filteredNavigations = filterNavigations(navigations, userRole);

  const updateSidebarMode = (sidebarSettings) => {
    let activeLayoutSettingsName = settings.activeLayout + 'Settings';
    let activeLayoutSettings = settings[activeLayoutSettingsName];

    updateSettings({
      ...settings,
      [activeLayoutSettingsName]: {
        ...activeLayoutSettings,
        leftSidebar: {
          ...activeLayoutSettings.leftSidebar,
          ...sidebarSettings
        }
      }
    });
  };

  return (
    <Fragment>
      <StyledScrollBar options={{ suppressScrollX: true }}>
        {children}
        <MatxVerticalNav items={filteredNavigations} />
      </StyledScrollBar>

      <SideNavMobile onClick={() => updateSidebarMode({ mode: 'close' })} />
    </Fragment>
  );
};

export default Sidenav;
