import {
  Box,
  Button,
  Grid,
  Icon,
  Step,
  StepLabel,
  Stepper,
  styled,
  TextField,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useState } from "react";

const InputField = styled(TextField)({ width: "100%" });

const getSteps = () => {
  return ["First Name", "Last Name", "Address"];
};

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <InputField label="First Name" />
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <InputField label="Middle Name" />
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <InputField label="Last Name" />
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <InputField label="Age" />
            </Grid>
          </Grid>
        </form>
      );
    case 1:
      return <TextField label="Company Name"></TextField>;
    case 2:
      return <TextField label="Address"></TextField>;
    default:
      return "";
  }
}

export default function HorizontalStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = getSteps();
  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  const handleReset = () => setActiveStep(0);

  return (
    <div>
      <Stepper sx={{ p: 3 }} activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>
        {activeStep === steps.length ? (
          <div>
            <Box mb={2} display="flex" alignItems="center">
              <Icon>done</Icon> <Span sx={{ ml: 1 }}>Done</Span>
            </Box>
            <Button variant="contained" color="secondary" onClick={handleReset}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <Box pt={3}>
              <Button
                variant="contained"
                color="secondary"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button sx={{ ml: 2 }} variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </div>
        )}
      </div>
    </div>
  );
}
