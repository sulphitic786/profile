import { Box, Button, Grid, Icon, styled } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { Fragment, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { fireStore } from "../../../config";
import { Breadcrumb, MatxLoading } from "../../components";
import { H4, Paragraph, Span } from "../../components/Typography";
import { useAlert } from "../../contexts/AlertContext";
import { getIsoDate } from "../../utils/utils";

const ContentBox = styled("div")(({ theme }) => ({
  margin: "0px",
  [theme.breakpoints.down("sm")]: { margin: "16px" }
}));

const Container = styled("div")(({ theme }) => ({
  margin: "20px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "14px"
}));

const About = () => {
  const [state, setState] = useState({ created_at: getIsoDate() });
  const [loading, setLoading] = useState(false);
  const { showAlert } = useAlert();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      // Save data to "contact-us" collection
      const res = await addDoc(collection(fireStore, "contact-us"), {
        ...state,
        created_at: getIsoDate()
      });

      // After submitting, you might want to clear the form or perform other actions
      setState({});
      setLoading(false);
      // console.log('response', res);
      showAlert("success", "Your response sent successfully.");

      // You may also want to fetch updated data if needed
      // fetchData();
    } catch (error) {
      showAlert("error", "Error while saving data.");
      console.error("Error saving data to Firebase:", error);
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    // console.log('event', event);
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const { name, phone, email, subject, message, created_at } = state;

  return (
    <Fragment>
      <Container>
        {loading && <MatxLoading />}
        <Box className="breadcrumb">
          <Breadcrumb
            routeSegments={[{ name: "Profile", path: "/portfolio/about" }, { name: "Contact" }]}
          />
        </Box>
        <ContentBox className="about">
          <div className="">
            <div className="section-title">
              <H4 sx={{ fontWeight: "bold", fontSize: "19px", ml: 2 }}>Contact Us</H4>
              <Paragraph sx={{ mx: 2, textAlign: "justify", textIndent: "2em" }}>
                If you have any questions, feedback, or inquiries, we're here to help! Our dedicated
                team is ready to assist you with any queries you may have regarding our products,
                services, or anything else related to our business. Whether you're a customer,
                partner, or simply interested in learning more about what we do, feel free to reach
                out to us using the contact information provided below. Your satisfaction is our
                priority, and we look forward to hearing from you soon!
              </Paragraph>
            </div>
            <Grid container spacing={6} className="contact">
              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                <div className="d-flex align-items-stretch">
                  <Box className="info">
                    <Box className="address">
                      <i className="icofont-phone me-3">
                        <Icon color="primary">location_on</Icon>
                      </i>
                      {/* <H5 className="fw-bold"></H5> */}
                      <p style={{ paddingTop: "10px" }}>Islamabad, Pakistan</p>
                    </Box>

                    <Box sx={{ display: "block" }} className="email">
                      <i className="icofont-phone me-3">
                        <Icon color="primary" className="">
                          mail_outline
                        </Icon>
                      </i>
                      {/* <h6 className="fw-bold">Email:</h6> */}
                      <p style={{ paddingTop: "10px" }}>wqasimg@gmail.com</p>
                    </Box>

                    <Box sx={{ paddingBottom: "20px" }} className="phone">
                      <i className="icofont-phone me-3">
                        <Icon color="primary">phone_in_talk</Icon>
                      </i>
                      {/* <h6 className="fw-bold">Call:</h6> */}
                      <p style={{ paddingTop: "10px" }}>+92324 4929494</p>
                    </Box>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6640.600245896029!2d73.0127589232893!3d33.67529215132975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe20192c81c9%3A0x28808a565e31833!2sG-10%20Markaz%20G%2010%20Markaz%20G-10%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1656798445719!5m2!1sen!2sus"
                      frameborder="0"
                      style={{ border: "0", width: "92%", height: "250px" }}
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                  </Box>
                </div>
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                  <TextField
                    type="text"
                    name="name"
                    id="standard-basic"
                    label="Name *"
                    value={name || ""}
                    onChange={handleChange}
                    errorMessages={["This field is required!"]}
                    validators={["required", "minStringLength: 4", "maxStringLength: 35"]}
                  />

                  <TextField
                    type="text"
                    name="phone"
                    value={phone || ""}
                    label="Mobile Number *"
                    onChange={handleChange}
                    validators={[
                      "required",
                      "isNumber"
                      // "minStringLength:10",
                      // "maxStringLength:10"
                    ]}
                    errorMessages={[
                      "This field is required!",
                      "phone number must contain only digits"
                      // "phone number must be 10 digits",
                      // "phone number must be 10 digits"
                    ]}
                  />

                  <TextField
                    type="email"
                    name="email"
                    label="Email"
                    value={email || ""}
                    onChange={handleChange}
                    // validators={['required', 'isEmail']}
                    // errorMessages={['this field is required', 'email is not valid']}
                  />

                  <TextField
                    type="text"
                    name="subject"
                    label="Subject"
                    onChange={handleChange}
                    value={subject || ""}
                    // validators={['required']}
                    // errorMessages={['this field is required']}
                  />

                  <TextField
                    type="text"
                    multiline
                    rows={6}
                    placeholder="Write Your Message"
                    name="message"
                    label="Message *"
                    onChange={handleChange}
                    value={message || ""}
                    validators={["required"]}
                    errorMessages={["This field is required!"]}
                  />

                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    className="text-center mx-auto"
                  >
                    <Icon>send</Icon>
                    <Span sx={{ pl: 1, textTransform: "capitalize" }}>Send Message</Span>
                  </Button>
                </ValidatorForm>
              </Grid>
            </Grid>
          </div>
        </ContentBox>
      </Container>
    </Fragment>
  );
};

export default About;
