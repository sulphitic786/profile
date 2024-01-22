import { Box, Checkbox, FormControlLabel, Hidden, Icon, IconButton, styled } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
  background: theme.palette.primary.main,
}));

const StyledIcon = styled(Icon)({ color: "#fff" });

const InboxTopBar = (props) => {
  const { toggleSidenav, handleMasterCheckbox, masterCheckbox } = props;

  return (
    <Container py="4px" mx="4px">
      <Hidden smUp>
        <IconButton onClick={toggleSidenav}>
          <StyledIcon>short_text</StyledIcon>
        </IconButton>
      </Hidden>

      <FormControlLabel
        label="All"
        sx={{ color: "#fff", marginLeft: 2 }}
        control={
          <Checkbox checked={masterCheckbox} onChange={handleMasterCheckbox} color="secondary" />
        }
      />

      <IconButton size="large">
        <StyledIcon>delete</StyledIcon>
      </IconButton>

      <IconButton size="large">
        <StyledIcon>folder_special</StyledIcon>
      </IconButton>

      <IconButton size="large">
        <StyledIcon>archive</StyledIcon>
      </IconButton>

      <IconButton size="large">
        <StyledIcon>error</StyledIcon>
      </IconButton>
    </Container>
  );
};

export default InboxTopBar;
