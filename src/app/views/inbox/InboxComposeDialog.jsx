import { Box, Button, Dialog, Fab, Icon, IconButton, styled, TextField } from "@mui/material";
import { Paragraph } from "app/components/Typography";
import { Formik } from "formik";

const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const FormController = styled("div")({
  flexWrap: 1,
  display: "flex",
  marginBottom: "16px",
  justifyContent: "space-between",
  "& input": { display: "none" },
});

const InboxComposeDialog = ({ open, handleClose }) => {
  const initialValues = {
    to: "",
    subject: "",
    content: "",
    attachment: null,
  };

  const handleFormSubmit = (values) => {
    console.log(values);

    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth={true}>
      <Box p={3}>
        <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
          {({ values, handleBlur, handleChange, handleSubmit, setFieldValue }) => {
            return (
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  name="to"
                  label="To"
                  type="email"
                  value={values.to}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                />

                <TextField
                  fullWidth
                  type="text"
                  name="subject"
                  label="Subject"
                  onBlur={handleBlur}
                  value={values.subject}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                />

                <FormController>
                  <Button onClick={handleClose}>Cancel</Button>

                  <FlexBox>
                    {values.attachment && (
                      <Paragraph sx={{ mr: 3 }}>{values.attachment.name}</Paragraph>
                    )}

                    <label htmlFor="attachment">
                      <IconButton sx={{ mr: 1 }} component="span">
                        <Icon>attachment</Icon>
                      </IconButton>
                    </label>

                    <input
                      type="file"
                      id="attachment"
                      onChange={(e) => setFieldValue("attachment", e.target.files[0])}
                    />

                    <Fab size="medium" color="secondary" type="submit">
                      <Icon>send</Icon>
                    </Fab>
                  </FlexBox>
                </FormController>
              </form>
            );
          }}
        </Formik>
      </Box>
    </Dialog>
  );
};

export default InboxComposeDialog;
