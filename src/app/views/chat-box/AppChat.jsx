import { Box, Card, styled, useMediaQuery, useTheme } from "@mui/material";
import Breadcrumb from "app/components/Breadcrumb";
import MatxSidenav from "app/components/MatxSidenav/MatxSidenav";
import MatxSidenavContainer from "app/components/MatxSidenav/MatxSidenavContainer";
import MatxSidenavContent from "app/components/MatxSidenav/MatxSidenavContent";
import { useCallback, useEffect, useRef, useState } from "react";
import ChatContainer from "./ChatContainer";
import {
  getAllContact,
  getChatRoomByContactId,
  getContactById,
  getRecentContact,
  sendNewMessage,
} from "./ChatService";
import ChatSidenav from "./ChatSidenav";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    margin: "30px",
    [theme.breakpoints.down("sm")]: { margin: "16px" },
  },
}));

const AppChat = () => {
  const chatBottomRef = document.querySelector("#chat-message-list");
  const [open, setOpen] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    id: "7863a6802ez0e277a0f98534",
  });
  const [opponentUser, setOpponentUser] = useState(null);
  const [currentChatRoom, setCurrentChatRoom] = useState("");
  const [contactList, setContactList] = useState([]);
  const [recentContactList, setRecentContactList] = useState([]);
  const [messageList, setMessageList] = useState([]);
  const userRef = useRef(currentUser);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const updateRecentContactList = useCallback(() => {
    let { id } = userRef.current;
    getRecentContact(id).then((data) => {
      setRecentContactList(data.data);
    });
  }, []);

  useEffect(() => {
    let { id } = userRef.current;

    getContactById(id).then((data) => {
      setOpen(isMobile);
      setCurrentUser({ ...data.data });
    });

    getAllContact(currentUser.id).then((data) => setContactList(data.data));
    updateRecentContactList();
  }, [isMobile, currentUser.id, updateRecentContactList]);

  const handleMessageSend = (message) => {
    let { id } = currentUser;

    if (currentChatRoom === "") return;
    sendNewMessage({
      chatId: currentChatRoom,
      text: message,
      contactId: id,
      time: new Date(),
    }).then((data) => {
      setMessageList([...data.data]);
      scrollToBottom();
    });

    // bot message
    setTimeout(() => {
      sendNewMessage({
        chatId: currentChatRoom,
        text: `Hi, I'm ${opponentUser.name}. Your imaginary friend.`,
        contactId: opponentUser.id,
        time: new Date(),
      }).then((data) => {
        setMessageList([...data.data]);
        scrollToBottom();
      });
    }, 750);
    // bot message ends here
  };

  const handleContactClick = (contactId) => {
    if (isMobile) toggleSidenav();

    getContactById(contactId).then(({ data }) => {
      setOpponentUser({ ...data });
    });
    getChatRoomByContactId(currentUser.id, contactId).then(({ data }) => {
      let { chatId, messageList, recentListUpdated } = data;
      setCurrentChatRoom(chatId);
      setMessageList(messageList);
      scrollToBottom();

      if (recentListUpdated) {
        updateRecentContactList();
      }
    });
  };

  const scrollToBottom = () => {
    if (chatBottomRef) {
      chatBottomRef.scrollTo({ top: chatBottomRef.scrollHeight, behavior: "smooth" });
    }
  };

  const toggleSidenav = () => setOpen(!open);

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Chat" }]} />
      </Box>

      <Card elevation={6}>
        <MatxSidenavContainer>
          <MatxSidenav width="230px" open={open} toggleSidenav={toggleSidenav}>
            <ChatSidenav
              currentUser={currentUser}
              contactList={contactList}
              recentContactList={recentContactList}
              handleContactClick={handleContactClick}
            />
          </MatxSidenav>

          <MatxSidenavContent>
            <ChatContainer
              id={currentUser?.id}
              opponentUser={opponentUser}
              messageList={messageList}
              currentChatRoom={currentChatRoom}
              handleMessageSend={handleMessageSend}
              toggleSidenav={toggleSidenav}
            />
          </MatxSidenavContent>
        </MatxSidenavContainer>
      </Card>
    </Container>
  );
};

export default AppChat;
