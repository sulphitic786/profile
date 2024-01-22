import { Delete } from "@mui/icons-material";
import { Box, Button, Dialog, Grid, Icon, IconButton, styled } from "@mui/material";
import MuiTextField from "@mui/material/TextField";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { FlexBetween } from "app/components/FlexBox";
import { H4 } from "app/components/Typography";
import { Formik } from "formik";
import shortId from "shortid";
import * as Yup from "yup";
import { addNewEvent, deleteEvent, updateEvent } from "./CalendarService";

const TextField = styled(MuiTextField)({ marginBottom: 16 });

const DialogHeader = styled(FlexBetween)(({ theme }) => ({
  padding: "10px 15px",
  background: theme.palette.primary.main,
}));

const validationSchema = Yup.object().shape({
  title: Yup.string().min(3, "Minimum 3 characters required!").required("Title is required!"),
  note: Yup.string().required("Note is required!"),
  location: Yup.string().required("Location is required!"),
  endingDate: Yup.date().required("Ending Date is required!"),
  startingDate: Yup.date().required("Staring Date is required!"),
});

const EventEditorDialog = ({ event = {}, open, handleClose }) => {
  const initialValues = {
    note: event?.note || "",
    title: event?.title || "",
    location: event?.location || "",
    endingDate: event?.endingDate || new Date(),
    startingDate: event?.startingDate || new Date(),
  };

  const handleFormSubmit = (values) => {
    console.log(values);
    let { id } = values;
    if (id) {
      updateEvent(values).then(() => handleClose());
    } else {
      addNewEvent({ id: shortId.generate(), ...values }).then(() => handleClose());
    }
  };

  const handleDeleteEvent = () => {
    if (event?.id) {
      deleteEvent(event).then(() => handleClose());
    }
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="xs" fullWidth={true}>
      <DialogHeader>
        <H4 sx={{ m: 0, color: "#fff" }}>Add Events</H4>

        <IconButton onClick={handleClose}>
          <Icon sx={{ color: "#fff" }}>clear</Icon>
        </IconButton>
      </DialogHeader>

      <Box p={2}>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange, handleSubmit, handleBlur, setFieldValue }) => {
            return (
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  type="text"
                  name="title"
                  label="Title"
                  onBlur={handleBlur}
                  value={values.title}
                  onChange={handleChange}
                  helperText={touched.title && errors.title}
                  error={Boolean(errors.title && touched.title)}
                />

                <Grid container spacing={4}>
                  <Grid item sm={6} xs={12}>
                    <DateTimePicker
                      value={values.startingDate}
                      onChange={(date) => setFieldValue("startingDate", date)}
                      renderInput={(props) => (
                        <MuiTextField {...props} label="Start date" variant="standard" />
                      )}
                    />
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <DateTimePicker
                      value={values.endingDate}
                      onChange={(date) => setFieldValue("endingDate", date)}
                      renderInput={(props) => (
                        <MuiTextField {...props} label="End date" variant="standard" />
                      )}
                    />
                  </Grid>
                </Grid>

                <Box py={1.3} />

                <TextField
                  fullWidth
                  type="text"
                  name="location"
                  label="Location"
                  onBlur={handleBlur}
                  value={values.location}
                  onChange={handleChange}
                  helperText={touched.location && errors.location}
                  error={Boolean(errors.location && touched.location)}
                />

                <TextField
                  rows={2}
                  fullWidth
                  multiline
                  type="text"
                  name="note"
                  label="Note"
                  onBlur={handleBlur}
                  value={values.note}
                  onChange={handleChange}
                  helperText={touched.note && errors.note}
                  error={Boolean(errors.note && touched.note)}
                />

                <FlexBetween>
                  <Button variant="contained" color="primary" type="submit">
                    Save
                  </Button>

                  <Button disabled={!event.id} startIcon={<Delete />} onClick={handleDeleteEvent}>
                    Delete
                  </Button>
                </FlexBetween>
              </form>
            );
          }}
        </Formik>
      </Box>
    </Dialog>
  );
};

export default EventEditorDialog;
