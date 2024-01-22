import { styled } from "@mui/material";
import SimplePricing1 from "./SimplePricing1";
import SimplePricing2 from "./SimplePricing2";
import SimplePricing3 from "./SimplePricing3";
import SimplePricing4 from "./SimplePricing4";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  position: "relative",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const Pricing3 = () => {
  return (
    <Container>
      <SimplePricing1 />
      <SimplePricing2 />
      <SimplePricing3 />
      <SimplePricing4 />
    </Container>
  );
};

export default Pricing3;
