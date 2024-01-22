import { Box, styled } from "@mui/material";
import { SimpleCard } from "app/components";
import HorizontalStepper from "./HorizontalStepper";
import VerticalStepper from "./VerticalStepper";

// styled component
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const WizardForm = () => {
  return (
    <Container>
      <SimpleCard title="Horizontal Stepper">
        <HorizontalStepper />
      </SimpleCard>

      <Box py="12px" />

      <SimpleCard title="Vertical Stepper">
        <VerticalStepper></VerticalStepper>
      </SimpleCard>
    </Container>
  );
};

export default WizardForm;
