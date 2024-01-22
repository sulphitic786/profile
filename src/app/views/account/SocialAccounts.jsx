import { Avatar, Box, Button, Card, Divider } from "@mui/material";
import { FlexBetween, FlexBox } from "app/components/FlexBox";
import { H5, H6, Paragraph } from "app/components/Typography";

const SocialAccounts = () => {
  return (
    <Card sx={{ pb: 2 }}>
      <H5 padding={3}>Social Account</H5>
      <Divider />

      {accountList.map((item) => (
        <FlexBetween
          key={item.id}
          sx={{
            borderBottom: 1,
            padding: "1rem 1.5rem",
            borderColor: "grey.100",
            "&:last-of-type": { borderBottom: 0 },
          }}
        >
          <FlexBox alignItems="center" gap={1}>
            <Avatar src={item.image} sx={{ width: 30, height: 30 }} />

            <Box>
              <H6>{item.title}</H6>
              <Paragraph>{item.body}</Paragraph>
            </Box>
          </FlexBox>

          <Button variant={item.connect ? "contained" : "outlined"}>Connect</Button>
        </FlexBetween>
      ))}
    </Card>
  );
};

const accountList = [
  {
    id: 1,
    title: "Facebook",
    body: "www.facebook.com/ui-lib",
    image: "/assets/images/social-media/facebook.svg",
    connect: false,
  },
  {
    id: 2,
    title: "Twitter",
    body: "www.twitter.com/ui-lib",
    image: "/assets/images/social-media/twitter.svg",
    connect: false,
  },
  {
    id: 3,
    title: "Linkedin",
    body: "www.linkedin.com/ui-lib",
    image: "/assets/images/social-media/linkedin.svg",
    connect: false,
  },
  {
    id: 4,
    title: "Skype",
    body: "www.skype.com/ui-lib",
    image: "/assets/images/social-media/skype.svg",
    connect: true,
  },
];

export default SocialAccounts;
