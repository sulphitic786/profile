import {
  Box,
  Button,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

// styled component
const StepperRoot = styled("div")(({ theme }) => ({
  width: "90%",
  "& .button": { marginTop: theme.spacing(1), marginRight: theme.spacing(1) },
  "& .actionsContainer": { marginBottom: theme.spacing(2) },
  "& .resetContainer": { padding: theme.spacing(3) },
}));

const getSteps = () => {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
};

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <TextField label="First Name"></TextField>;
    case 1:
      return <TextField label="Last Name"></TextField>;
    case 2:
      return <TextField label="Address"></TextField>;
    default:
      return "";
  }
};

export default function VerticalStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <StepperRoot>
      <Stepper sx={{ p: 3 }} activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Box>{getStepContent(index)}</Box>
              <div className="actionsContainer">
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack} className="button">
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className="button"
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className="resetContainer">
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button variant="outlined" color="secondary" onClick={handleReset} className="button">
            Reset
          </Button>
        </Paper>
      )}
    </StepperRoot>
  );
}
