import { Box, styled, useMediaQuery, useTheme } from '@mui/material';
import MatxSidenav from 'app/components/MatxSidenav/MatxSidenav';
import MatxSidenavContainer from 'app/components/MatxSidenav/MatxSidenavContainer';
import MatxSidenavContent from 'app/components/MatxSidenav/MatxSidenavContent';
import { useEffect, useState } from 'react';
import InboxMessageList from './InboxMessagList';
import { getAllMessage } from './InboxService';
import InboxSidenav from './InboxSidenav';
import InboxTopBar from './InboxTopbar';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  display: 'flex',
  [theme.breakpoints.down('sm')]: { margin: '16px' }
}));

const AppInbox = () => {
  const [isAlive, setIsAlive] = useState(true);
  const [open, setOpen] = useState(false);
  const [masterCheckbox, setMasterCheckbox] = useState(false);
  const [messageList, setMessageList] = useState([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleSidenav = () => setOpen(!open);

  const handleMasterCheckbox = (event) => {
    let temp = messageList;
    let isChecked = event.target.checked;
    if (isChecked) {
      temp.map((message) => {
        message.selected = true;
        return message;
      });
    } else {
      temp.map((message) => {
        message.selected = false;
        return message;
      });
    }
    setMessageList(temp);
    setMasterCheckbox(isChecked);
  };

  const handleCheckboxSelection = (event, index) => {
    event.persist();
    let temp = messageList;
    temp[index].selected = event.target.checked;
    setMessageList([...temp]);
  };

  useEffect(() => {
    if (isMobile) setOpen(false);
  }, [isMobile]);

  useEffect(() => {
    getAllMessage().then(({ data }) => {
      if (isAlive) setMessageList(data);
    });
  }, [isAlive]);

  useEffect(() => {
    return () => setIsAlive(false);
  }, []);

  return (
    <Container>
      <Box width="100%">
        <MatxSidenavContainer>
          <MatxSidenav width="220px" toggleSidenav={toggleSidenav} open={open}>
            <InboxSidenav />
          </MatxSidenav>

          <MatxSidenavContent>
            <InboxTopBar
              toggleSidenav={toggleSidenav}
              masterCheckbox={masterCheckbox}
              handleMasterCheckbox={handleMasterCheckbox}
            />

            <InboxMessageList
              messageList={messageList}
              handleCheckboxSelection={handleCheckboxSelection}
            />
          </MatxSidenavContent>
        </MatxSidenavContainer>
      </Box>
    </Container>
  );
};

export default AppInbox;
