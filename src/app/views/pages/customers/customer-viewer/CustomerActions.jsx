import { GetApp } from "@mui/icons-material";
import { Button, Card, Divider, Icon, styled } from "@mui/material";
import { FlexBox } from "app/components/FlexBox";
import { H5, Small } from "app/components/Typography";

const ContentBox = styled(FlexBox)({
  marginBottom: "16px",
  flexDirection: "column",
  alignItems: "flex-start",
});

const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: "13px",
  marginBottom: "16px",
  color: theme.palette.text.primary,
  "& span, svg": { fontSize: "1.25rem", marginRight: "16px" },
}));

const CustomerActions = () => {
  return (
    <Card elevation={3}>
      <H5 sx={{ p: 2 }}>Other Actions</H5>
      <Divider sx={{ mb: 2 }} />

      <ContentBox px={2}>
        <StyledButton>
          <Icon fontSize="small">not_interested</Icon>
          Close Account
        </StyledButton>

        <StyledButton>
          <GetApp />
          Export Data
        </StyledButton>

        <FlexBox alignItems="center" mb={2}>
          <Icon sx={{ mr: 1, fontSize: "1.25rem" }} color="secondary">
            info
          </Icon>

          <Small sx={{ color: "text.secondary" }}>
            Once you delete account, data will be lost forever.
          </Small>
        </FlexBox>

        <StyledButton variant="contained" sx={{ background: "error.main", color: "#fff" }}>
          <Icon>delete</Icon> Delete Account
        </StyledButton>
      </ContentBox>
    </Card>
  );
};

export default CustomerActions;
