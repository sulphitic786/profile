import {
  Box,
  Button,
  Card,
  Drawer,
  Grid,
  IconButton,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { FlexBox } from 'app/components/FlexBox';
import Apps from 'app/components/icons/Apps';
import DeleteOutlined from 'app/components/icons/DeleteOutlined';
import DevicesApple from 'app/components/icons/DevicesApple';
import DollarOutlined from 'app/components/icons/DollarOutlined';
import FileOutlined from 'app/components/icons/FileOutlined';
import Fingerprint from 'app/components/icons/Fingerprint';
import Instagram from 'app/components/icons/Instagram';
import Key from 'app/components/icons/Key';
import Link from 'app/components/icons/Link';
import LockOutlined from 'app/components/icons/LockOutlined';
import NotificationOutlined from 'app/components/icons/NotificationOutlined';
import PremiumOutlined from 'app/components/icons/PremiumOutlined';
import SettingsOutlined from 'app/components/icons/SettingsOutlined';
import UserOutlined from 'app/components/icons/UserOutlined';
import { H5 } from 'app/components/Typography';
import { Fragment, useState } from 'react';
import ApiKeys from './ApiKeys';
import BasicInformation from './BasicInformation';
import Billing from './Billing';
import ConnectedAccounts from './ConnectedAccounts';
import DeleteAccount from './DeleteAccount';
import Notifications from './Notifications';
import Password from './Password';
import Preferences from './Preferences';
import RecentDevices from './RecentDevices';
import Referrals from './Referrals';
import SocialAccounts from './SocialAccounts';
import Statements from './Statements';
import TwoStepVerification from './TwoStepVerification';

// styled component
const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  overflow: 'hidden',
  position: 'relative',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  padding: '0.6rem 1.5rem',
  justifyContent: 'flex-start',
  color: theme.palette.text.primary,
}));

const Account = () => {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [active, setActive] = useState('Basic Information');
  const downMd = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const style = {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.grey[100],
    '&::before': {
      left: 0,
      width: 4,
      content: '""',
      height: '100%',
      position: 'absolute',
      transition: 'all 0.3s',
      backgroundColor: theme.palette.primary.main,
    },
  };

  function TabListContent() {
    return (
      <FlexBox flexDirection="column">
        {tabList.map(({ id, name, Icon }) => (
          <StyledButton
            key={id}
            startIcon={<Icon sx={{ color: 'text.disabled' }} />}
            sx={active === name ? style : { '&:hover': style }}
            onClick={() => {
              setActive(name);
              setOpenDrawer(false);
            }}
          >
            {name}
          </StyledButton>
        ))}
      </FlexBox>
    );
  }

  return (
    <Box p={4}>
      <Grid container spacing={3}>
        <Grid item md={3} xs={12}>
          {downMd ? (
            <Fragment>
              <FlexBox alignItems="center" gap={1}>
                <IconButton sx={{ padding: 0 }} onClick={() => setOpenDrawer(true)}>
                  <Apps sx={{ color: 'primary.main' }} />
                </IconButton>

                <H5>Show More</H5>
              </FlexBox>

              <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <Box padding={1}>
                  <TabListContent />
                </Box>
              </Drawer>
            </Fragment>
          ) : (
            <Card sx={{ padding: '1rem 0' }}>
              <TabListContent />
            </Card>
          )}
        </Grid>

        <Grid item md={9} xs={12}>
          {active === tabList[0].name && <BasicInformation />}
          {active === tabList[1].name && <Password />}
          {active === tabList[2].name && <Preferences />}
          {active === tabList[3].name && <RecentDevices />}
          {active === tabList[4].name && <Notifications />}
          {active === tabList[5].name && <TwoStepVerification />}
          {active === tabList[6].name && <ConnectedAccounts />}
          {active === tabList[7].name && <SocialAccounts />}
          {active === tabList[8].name && <Billing />}
          {active === tabList[9].name && <Statements />}
          {active === tabList[10].name && <Referrals />}
          {active === tabList[11].name && <ApiKeys />}
          {active === tabList[12].name && <DeleteAccount />}
        </Grid>
      </Grid>
    </Box>
  );
};

const tabList = [
  { id: 1, name: 'Basic Information', Icon: UserOutlined },
  { id: 2, name: 'Password', Icon: LockOutlined },
  { id: 3, name: 'Preferences', Icon: SettingsOutlined },
  { id: 4, name: 'Recent Devices', Icon: DevicesApple },
  { id: 5, name: 'Notifications', Icon: NotificationOutlined },
  { id: 6, name: 'Two-step verification', Icon: Fingerprint },
  { id: 7, name: 'Connected accounts', Icon: Link },
  { id: 8, name: 'Social Account', Icon: Instagram },
  { id: 9, name: 'Billing', Icon: DollarOutlined },
  { id: 10, name: 'Statements', Icon: FileOutlined },
  { id: 11, name: 'Referrals', Icon: PremiumOutlined },
  { id: 12, name: 'API Keys', Icon: Key },
  { id: 13, name: 'Delete account', Icon: DeleteOutlined },
];

export default Account;
