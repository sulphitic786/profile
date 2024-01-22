import { Button, Divider, Icon, ListItem, ListItemIcon, ListItemText, styled } from "@mui/material";
import { useState } from "react";
import InboxComposeDialog from "./InboxComposeDialog";

const Container = styled("div")(({ theme }) => ({
  marginRight: "16px",
  background: theme.palette.background.default,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: "100%",
  color: "#fff",
  paddingTop: "8px",
  paddingBottom: "8px",
  background: theme.palette.error.main,
}));

const InboxSidenav = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const list = [
    { icon: "inbox", title: "Inbox" },
    { icon: "folder_special", title: "Starred" },
    { icon: "error", title: "Spam" },
    { icon: "send", title: "Sent" },
  ];

  const social = [
    { icon: "people", title: "Social" },
    { icon: "local_offer", title: "Promotions" },
    { icon: "forums", title: "Forums" },
  ];

  return (
    <Container>
      <StyledButton variant="contained" onClick={() => setOpen(true)}>
        Compose
      </StyledButton>

      {list.map((item, index) => (
        <ListItem button key={index}>
          <ListItemIcon>
            <Icon>{item.icon}</Icon>
          </ListItemIcon>

          <ListItemText primary={item.title} />
        </ListItem>
      ))}

      <Divider />

      {social.map((item, index) => (
        <ListItem button key={index}>
          <ListItemIcon>
            <Icon color="primary">{item.icon}</Icon>
          </ListItemIcon>

          <ListItemText primary={item.title} />
        </ListItem>
      ))}

      <InboxComposeDialog open={open} handleClose={handleClose} />
    </Container>
  );
};

export default InboxSidenav;
