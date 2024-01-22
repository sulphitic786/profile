import { Icon, styled } from "@mui/material";
import { FlexAlignCenter } from "app/components/FlexBox";
import { themeShadows } from "../../components/MatxTheme/themeColors";

const Container = styled(FlexAlignCenter)(({ theme }) => ({
  width: 220,
  height: 220,
  overflow: "hidden",
  borderRadius: "300px",
  boxShadow: themeShadows[6],
  background: theme.palette.background.default,
  "& span": { fontSize: "4rem" },
}));

const EmptyMessage = () => {
  return (
    <Container>
      <Icon color="primary">chat</Icon>
    </Container>
  );
};

export default EmptyMessage;
