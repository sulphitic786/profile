import { Box, Divider, styled, useTheme } from "@mui/material";
import ChatAvatar from "app/components/ChatAvatar";
import { Paragraph } from "app/components/Typography";
import { format } from "date-fns";
import Scrollbar from "react-perfect-scrollbar";

const ChatSideNavRoot = styled("div")(({ theme }) => ({
  height: 450,
  borderRight: "1px solid rgba(0, 0, 0, 0.08)",
  background: theme.palette.background.default,
}));

const StyledScrollBar = styled(Scrollbar)(() => ({
  height: "100%",
  position: "relative",
}));

const LeftContent = styled("div")(({ theme }) => ({
  height: 56,
  display: "flex",
  paddingLeft: "16px",
  paddingRight: "16px",
  alignItems: "center",
  background: theme.palette.primary.main,
}));

const UserName = styled("h5")(() => ({
  color: "#fff",
  marginBottom: 0,
  fontSize: "18px",
  fontWeight: "500",
  whiteSpace: "pre",
  marginLeft: "16px",
}));

const ContactList = styled("div")(() => ({
  padding: "16px",
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  transition: "background 250ms ease",
  "&:hover": { background: "rgba(0, 0, 0, 0.054)" },
}));

const ChatSidenav = ({
  currentUser,
  contactList = [],
  handleContactClick,
  recentContactList = [],
}) => {
  const theme = useTheme();
  const secondary = theme.palette.text.secondary;

  return (
    <ChatSideNavRoot>
      <LeftContent>
        <ChatAvatar src={currentUser.avatar} status={currentUser.status} />
        <UserName>{currentUser.name}</UserName>
      </LeftContent>

      <StyledScrollBar>
        {recentContactList.map((contact, index) => (
          <ContactList key={index} onClick={() => handleContactClick(contact.id)}>
            <ChatAvatar src={contact.avatar} status={contact.status} />

            <Box pl={2}>
              <Paragraph sx={{ m: "0" }}>{contact.name}</Paragraph>
              <Paragraph sx={{ m: 0, color: secondary }}>
                {format(new Date(contact.lastChatTime).getTime(), "MMMM dd, yyyy")}
              </Paragraph>
            </Box>
          </ContactList>
        ))}

        <Divider />

        {contactList.map((contact, index) => (
          <ContactList
            key={index}
            sx={{ padding: "4px 16px" }}
            onClick={() => handleContactClick(contact.id)}
          >
            <ChatAvatar src={contact.avatar} status={contact.status} />

            <Box pl={2}>
              <p>{contact.name}</p>
            </Box>
          </ContactList>
        ))}
      </StyledScrollBar>
    </ChatSideNavRoot>
  );
};

export default ChatSidenav;
