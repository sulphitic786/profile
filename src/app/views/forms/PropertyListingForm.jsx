import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  styled,
  TextField
} from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Paragraph } from "../../components/Typography";
import { useState } from "react";
import { countries } from "../ecommerce/Country";

// styled components
const StyledCard = styled(Card)(({ theme }) => ({
  margin: "30px",
  padding: "24px",
  [theme.breakpoints.down("sm")]: { margin: "16px" }
}));

const InputField = styled(TextField)({ marginBottom: "16px" });

const PropertyListingForm = () => {
  const [date, setDate] = useState(new Date());

  return (
    <StyledCard>
      <Box mx="auto" maxWidth={600}>
        <h4>Property Listing Inquiry</h4>
        <p>Please fill the form below to know more about the property</p>
        <Divider sx={{ mb: 4 }} />

        <InputField label="Your Name" variant="outlined" size="small" fullWidth />
        <InputField label="Address 1" variant="outlined" size="small" fullWidth />
        <InputField label="Address 2" variant="outlined" size="small" fullWidth />

        <Box mb={2} display="flex">
          <TextField sx={{ mr: 1 }} label="City" variant="outlined" size="small" fullWidth />

          <TextField
            fullWidth
            size="small"
            variant="outlined"
            label="State/Province"
            sx={{ ml: 1 }}
          />
        </Box>

        <Box mb={2} display="flex">
          <TextField sx={{ mr: 1 }} label="Zip" variant="outlined" size="small" fullWidth />

          <TextField
            select
            fullWidth
            size="small"
            sx={{ ml: 1 }}
            defaultValue=""
            label="Country"
            variant="outlined"
          >
            {countries.map((country) => (
              <MenuItem key={country.name} value={country.name}>
                {country.name}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <InputField label="Phone Number" variant="outlined" size="small" fullWidth />
        <InputField
          fullWidth
          size="small"
          label="Email"
          variant="outlined"
          placeholder="ui-lib@example.com"
        />

        <InputField
          rows={6}
          fullWidth
          multiline
          size="small"
          variant="outlined"
          label="Include any listing numbers or properties of interest here"
        />

        <Paragraph mb={0.5}>Have you visited the State previously</Paragraph>

        <FormControl component="fieldset" sx={{ mb: 2 }}>
          <RadioGroup name="status">
            <FormControlLabel
              value="yes"
              label="Yes"
              sx={{ height: 32 }}
              control={<Radio color="secondary" />}
            />

            <FormControlLabel
              value="no"
              label="No"
              sx={{ height: 32 }}
              control={<Radio color="secondary" />}
            />
          </RadioGroup>
        </FormControl>

        {/* <DatePicker
          value={date}
          onChange={(date) => setDate(date)}
          renderInput={(props) => (
            <InputField
              {...props}
              fullWidth
              size="small"
              variant="outlined"
              id="mui-pickers-date"
              label="When are you planing on visiting?"
            />
          )}
        /> */}

        <InputField
          select
          fullWidth
          size="small"
          defaultValue=""
          variant="outlined"
          label="How long are you planing to stay?"
        >
          {stayDurationList.map((duration) => (
            <MenuItem key={duration} value={duration}>
              {duration}
            </MenuItem>
          ))}
        </InputField>

        <Paragraph mb={0.5}>Can we help you make travel arrangements?</Paragraph>

        <FormControl component="fieldset" sx={{ mb: 2 }}>
          <RadioGroup name="status">
            <FormControlLabel
              value="yes"
              label="Yes"
              sx={{ height: 32 }}
              control={<Radio color="secondary" />}
            />
            <FormControlLabel
              value="no"
              label="No"
              sx={{ height: 32 }}
              control={<Radio color="secondary" />}
            />
          </RadioGroup>
        </FormControl>

        <Paragraph mb={0.5}>What kind of property are you interested in?</Paragraph>

        <Box sx={{ mb: 2 }}>
          {propertyTypeList.map((item, ind) => (
            <FormControlLabel
              key={ind}
              label={item}
              control={<Checkbox />}
              sx={{ height: 32, display: "block" }}
            />
          ))}
        </Box>

        <InputField
          select
          fullWidth
          size="small"
          defaultValue=""
          variant="outlined"
          label="What kind of location are you interested in?"
        >
          {locationTypeList.map((location) => (
            <MenuItem key={location} value={location}>
              {location}
            </MenuItem>
          ))}
        </InputField>

        <InputField
          select
          fullWidth
          size="small"
          defaultValue=""
          variant="outlined"
          label="What is your budget?"
        >
          {budgetList.map((budget) => (
            <MenuItem key={budget} value={budget}>
              {budget}
            </MenuItem>
          ))}
        </InputField>

        <InputField
          rows={6}
          fullWidth
          multiline
          size="small"
          variant="outlined"
          label="Questions/Comments"
        />

        <Box display="flex" justifyContent="center">
          <Button sx={{ px: "28px" }} variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </StyledCard>
  );
};

const stayDurationList = ["Less than a week", "One week", "One month", "I'm not sure"];

const propertyTypeList = [
  "Row Land",
  "Lot in a Development",
  "Condos",
  "Single Family Home",
  "Other"
];

const locationTypeList = [
  "Ocean View",
  "Beach Front",
  "Near Surf",
  "In Town",
  "Farm",
  "Other",
  "Doesn't Matter"
];

const budgetList = [
  "$0 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $500,000",
  "$500,000 - $1,000,000",
  "$1,000,000 Plus"
];
export default PropertyListingForm;
