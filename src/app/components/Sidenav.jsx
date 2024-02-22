// import { Fragment } from 'react';
// import Scrollbar from 'react-perfect-scrollbar';
// import { styled } from '@mui/material';
// import { MatxVerticalNav } from '../components';
// import useSettings from '../hooks/useSettings';
// import useAuth from '../hooks/useAuth';
// import { navigations } from '../navigations';
// import { stringToJson } from '../utils/utils';
// import { json } from 'react-router-dom';

// const StyledScrollBar = styled(Scrollbar)(() => ({
//   paddingLeft: '1rem',
//   paddingRight: '1rem',
//   position: 'relative'
// }));

// const SideNavMobile = styled('div')(({ theme }) => ({
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   bottom: 0,
//   right: 0,
//   width: '100vw',
//   background: 'rgba(0, 0, 0, 0.54)',
//   zIndex: -1,
//   [theme.breakpoints.up('lg')]: { display: 'none' }
// }));

// const filterNavigations = (navigations, userRoles) => {
//   console.log('userRoles', userRoles);
//   return navigations.reduce((filtered, item) => {
//     const allowedRoles = item.auth || [];
//     const hasIntersection = allowedRoles.some((role) => userRoles.includes(role));
//     if (!item.auth || hasIntersection) {
//       if (item.children) {
//         const children = filterNavigations(item.children, userRoles);
//         if (children.length > 0) {
//           filtered.push({ ...item, children });
//         }
//       } else {
//         filtered.push(item);
//       }
//     }
//     return filtered;
//   }, []);
// };

// const Sidenav = ({ children }) => {
//   const { settings, updateSettings } = useSettings();
//   const { user, isAuthenticated } = useAuth();
//   // const userRole = ['ADMIN'];

//   let userData = stringToJson(sessionStorage.getItem('userData'));
//   // console.log('userData', userData);
//   const userRole = userData?.roles || [];

//   const filteredNavigations = filterNavigations(navigations, userRole);
//   console.log('navigations', navigations, 'filteredNavigations', filteredNavigations);
//   const updateSidebarMode = (sidebarSettings) => {
//     let activeLayoutSettingsName = settings.activeLayout + 'Settings';
//     let activeLayoutSettings = settings[activeLayoutSettingsName];

//     updateSettings({
//       ...settings,
//       [activeLayoutSettingsName]: {
//         ...activeLayoutSettings,
//         leftSidebar: {
//           ...activeLayoutSettings.leftSidebar,
//           ...sidebarSettings
//         }
//       }
//     });
//   };

//   return (
//     <Fragment>
//       <StyledScrollBar options={{ suppressScrollX: true }}>
//         {children}
//         <MatxVerticalNav items={filteredNavigations} />
//       </StyledScrollBar>

//       <SideNavMobile onClick={() => updateSidebarMode({ mode: 'close' })} />
//     </Fragment>
//   );
// };

// export default Sidenav;

import { Fragment, useEffect, useState } from "react";
import Scrollbar from "react-perfect-scrollbar";
import { styled } from "@mui/material";
import { MatxVerticalNav } from "../components";
import useSettings from "../hooks/useSettings";
import useAuth from "../hooks/useAuth";
import { navigations } from "../navigations";
import { stringToJson } from "../utils/utils";

const StyledScrollBar = styled(Scrollbar)(() => ({
  paddingLeft: "1rem",
  paddingRight: "1rem",
  position: "relative"
}));

const SideNavMobile = styled("div")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: "100vw",
  background: "rgba(0, 0, 0, 0.54)",
  zIndex: -1,
  [theme.breakpoints.up("lg")]: { display: "none" }
}));

const filterNavigations = (navigations, userRoles) => {
  return navigations.reduce((filtered, item) => {
    const allowedRoles = item.auth || [];
    const hasIntersection = allowedRoles.some((role) => userRoles.includes(role));
    if (!item.auth || hasIntersection) {
      if (item.children) {
        const children = filterNavigations(item.children, userRoles);
        if (children.length > 0) {
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
  const [filteredNavigations, setFilteredNavigations] = useState([]);
  const userData = stringToJson(sessionStorage.getItem("userData"));
  const userRoles = userData?.roles || [];

  useEffect(() => {
    const newFilteredNavigations = filterNavigations(navigations, userRoles);
    setFilteredNavigations(newFilteredNavigations);
  }, [user]);

  const updateSidebarMode = (sidebarSettings) => {
    let activeLayoutSettingsName = settings.activeLayout + "Settings";
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

      <SideNavMobile onClick={() => updateSidebarMode({ mode: "close" })} />
    </Fragment>
  );
};

export default Sidenav;
