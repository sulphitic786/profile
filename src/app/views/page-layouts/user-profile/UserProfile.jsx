import { Box, Hidden, Icon, IconButton, styled, useMediaQuery, useTheme } from '@mui/material';
import MatxSidenav from 'app/components/MatxSidenav/MatxSidenav';
import MatxSidenavContainer from 'app/components/MatxSidenav/MatxSidenavContainer';
import MatxSidenavContent from 'app/components/MatxSidenav/MatxSidenavContent';
import { useEffect, useState } from 'react';
import UserProfileContent from './UserProfileContent';
import UserProfileSidenav from './UserProfileSidenav';

const ProfileRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  '& .headerBG': {
    height: 345,
    background: theme.palette.primary.main,
    '@media only screen and (max-width: 959px)': {
      height: 400
    }
  }
}));

const UserProfile = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleSidenav = () => {
    setOpen(!open);
  };
  useEffect(() => {
    if (isMobile) setOpen(false);
    else setOpen(true);
  }, [isMobile]);

  return (
    <ProfileRoot>
      <MatxSidenavContainer>
        <MatxSidenav width="300px" open={open} toggleSidenav={toggleSidenav}>
          <Box textAlign="right" className="headerBG">
            <Hidden smUp>
              <IconButton onClick={toggleSidenav}>
                <Icon sx={{ color: '#fff' }}>clear</Icon>
              </IconButton>
            </Hidden>
          </Box>

          <UserProfileSidenav />
        </MatxSidenav>

        <MatxSidenavContent open={open}>
          <Box className="headerBG" />

          <UserProfileContent toggleSidenav={toggleSidenav} />
        </MatxSidenavContent>
      </MatxSidenavContainer>
    </ProfileRoot>
  );
};

export default UserProfile;
