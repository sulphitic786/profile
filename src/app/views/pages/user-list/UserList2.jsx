import { Avatar, Box, Card, Grid } from "@mui/material";
import { Breadcrumb } from "app/components";
import { FlexBetween, FlexBox } from "app/components/FlexBox";
import { H5 } from "app/components/Typography";
import useUsers from "app/hooks/useUsers";
import { Container, StyledButton, StyledP } from "./styles";

const UserList2 = () => {
  const { users } = useUsers();

  return (
    <Container>
      <div className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Pages", path: "/pages" }, { name: "User List 2" }]} />
      </div>

      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid key={user.id} item sm={6} xs={12}>
            <Card>
              <FlexBetween p="24px" m={-1} flexWrap="wrap">
                <FlexBox alignItems="center" m={1}>
                  <Avatar src={user.imgUrl} sx={{ width: 48, height: 48 }} />

                  <Box ml={2}>
                    <H5>{user.name}</H5>
                    <StyledP sx={{ mt: 1, fontWeight: "normal", textTransform: "capitalize" }}>
                      {user.company?.toLowerCase()}
                    </StyledP>
                  </Box>
                </FlexBox>

                <Box m={1} display="flex">
                  <StyledButton size="small" sx={{ mr: "4px" }}>
                    CHAT
                  </StyledButton>
                  <StyledButton size="small">PROFILE</StyledButton>
                </Box>
              </FlexBetween>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UserList2;
