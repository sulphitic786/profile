import { Twitter } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  styled,
} from "@mui/material";
import { Breadcrumb, FacebookIcon, GoogleIcon } from "app/components";
import { FlexBetween, FlexBox } from "app/components/FlexBox";
import { H5 } from "app/components/Typography";
import useUsers from "app/hooks/useUsers";
import { Container, StyledButton, StyledP } from "./styles";

// styled components
const StyledIonButton = styled(IconButton)({
  padding: "8px",
  "&:hover": { color: "#ffffff" },
  "& svg": { fontSize: "14px" },
});

const GoogleButton = styled(StyledIonButton)({
  padding: "8px",
  color: "#ec412c",
  borderColor: "#ec412c",
  backgroundColor: "rgba(236,65,44,.1)",
  "&:hover": { background: `#ec412c`, color: "#ffffff" },
});

const FacebookButton = styled(StyledIonButton)({
  padding: "8px",
  color: "#3765c9",
  borderColor: "#3765c9",
  backgroundColor: "rgba(55,101,201,.1)",
  "&:hover": { background: `#3765c9`, color: "#ffffff" },
});

const TwitterButton = styled(StyledIonButton)({
  padding: "8px",
  color: "#039ff5",
  borderColor: "#039ff5",
  backgroundColor: "rgba(3,159,245,.1)",
  "&:hover": { background: `#039ff5`, color: "#ffffff" },
});

const ContentBox = styled(FlexBetween)({
  padding: "20px",
  margin: "-8px",
  flexWrap: "wrap",
});

const UserList1 = () => {
  const { users } = useUsers();

  return (
    <Container>
      <div className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Pages", path: "/pages" }, { name: "User List 1" }]} />
      </div>

      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid key={user.id} item sm={6} xs={12}>
            <Card>
              <FlexBetween p="20px" m={-1} flexWrap="wrap">
                <FlexBox alignItems="center" m={1}>
                  <Avatar src={user.imgUrl} sx={{ width: 48, height: 48 }} />

                  <Box ml={2}>
                    <H5>{user.name}</H5>
                    <StyledP sx={{ mt: 1, fontWeight: "normal", textTransform: "capitalize" }}>
                      {user.company?.toLowerCase()}
                    </StyledP>
                  </Box>
                </FlexBox>

                <FlexBox m={1}>
                  <GoogleButton>
                    <GoogleIcon />
                  </GoogleButton>

                  <FacebookButton sx={{ mx: "4px" }}>
                    <FacebookIcon />
                  </FacebookButton>

                  <TwitterButton>
                    <Twitter />
                  </TwitterButton>
                </FlexBox>
              </FlexBetween>

              <Divider />

              <ContentBox>
                <Box m={1} mr={3} maxWidth={220} flexGrow={1}>
                  <FlexBetween mb={1}>
                    <StyledP sx={{ fontWeight: "500" }}>Progressbar</StyledP>
                    <StyledP>40%</StyledP>
                  </FlexBetween>

                  <LinearProgress color="primary" value={35} variant="determinate" />
                </Box>

                <Box m={1} display="flex">
                  <StyledButton size="small" sx={{ mr: "4px" }}>
                    CHAT
                  </StyledButton>

                  <StyledButton size="small">PROFILE</StyledButton>
                </Box>
              </ContentBox>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UserList1;
