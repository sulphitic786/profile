import { Avatar, Box, Card, Divider, Switch, useTheme } from "@mui/material";
import { FlexBetween, FlexBox } from "app/components/FlexBox";
import { H5, Paragraph } from "app/components/Typography";
import { NavLink } from "react-router-dom";

const accountList = [
  {
    id: 1,
    title: "Facebook",
    body: "Plan properly your workflow",
    image: "/assets/images/social-media/facebook.svg",
  },
  {
    id: 2,
    title: "Twitter",
    body: "Keep eye on on your Repositories",
    image: "/assets/images/social-media/twitter.svg",
  },
  {
    id: 3,
    title: "Instagram",
    body: "Keep up with the stories",
    image: "/assets/images/social-media/instagram.svg",
  },
  {
    id: 4,
    title: "Sound Cloud",
    body: "Playlist to get you by",
    image: "/assets/images/social-media/soundcloud.svg",
  },
];

const ConnectedAccounts = () => {
  const { palette } = useTheme();
  return (
    <Card sx={{ pb: 2 }}>
      <Box padding={3}>
        <H5>Connected accounts</H5>
        <Paragraph>
          Two-factor authentication adds an extra layer of security to your account. To log in, in
          you'll need to provide a 4 digit amazing code.{" "}
          <NavLink to="#" style={{ color: palette.primary.main }}>
            Learn More
          </NavLink>
        </Paragraph>
      </Box>

      <Divider />

      {accountList.map(({ id, title, body, image }) => (
        <SingleItem key={id} title={title} body={body} logo={image} />
      ))}
    </Card>
  );
};

function SingleItem({ title, body, logo }) {
  return (
    <FlexBetween
      sx={{
        borderBottom: 1,
        padding: "1rem 1.5rem",
        borderColor: "grey.100",
        "&:last-of-type": { borderBottom: 0 },
      }}
    >
      <FlexBox alignItems="center" gap={1}>
        <Avatar src={logo} sx={{ width: 30, height: 30 }} />

        <Box>
          <H5>{title}</H5>
          <Paragraph>{body}</Paragraph>
        </Box>
      </FlexBox>

      <Switch defaultChecked />
    </FlexBetween>
  );
}

export default ConnectedAccounts;
