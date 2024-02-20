import { Fragment } from 'react';
import { Breadcrumb } from 'app/components';
import { MatxLoading } from 'app/components';
import { Button, Grid, Icon, Box, styled } from '@mui/material';
import { Span } from 'app/components/Typography';
import { useEffect, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { fireStore } from 'config';
import { useAlert } from 'app/contexts/AlertContext';
import { getIsoDate } from 'app/utils/utils';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '0px',
  [theme.breakpoints.down('sm')]: { margin: '16px' }
}));

const Container = styled('div')(({ theme }) => ({
  margin: '20px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '14px'
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
      const res = await addDoc(collection(fireStore, 'contact-us'), {
        ...state,
        created_at: getIsoDate()
      });

      // After submitting, you might want to clear the form or perform other actions
      setState({});
      setLoading(false);
      // console.log('response', res);
      showAlert('success', 'Your response sent successfully.');

      // You may also want to fetch updated data if needed
      // fetchData();
    } catch (error) {
      showAlert('error', 'Error while saving data.');
      console.error('Error saving data to Firebase:', error);
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
            routeSegments={[{ name: 'Profile', path: '/portfolio/about' }, { name: 'Contact' }]}
          />
        </Box>
        <ContentBox className="about">
          <div className="p-2">
            <div className="section-title">
              <h2>Contact</h2>
              <p>
                Here is my contact info to reach me out easily by the public, so feel free to
                contact me regarding any tachnical devlopment assitance or issue.
              </p>
            </div>
            <Grid container spacing={6} className="contact">
              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                <div className="d-flex align-items-stretch">
                  <div className="info">
                    <div className="address">
                      <i className="icofont-phone me-3">
                        <Icon color="primary">location_on</Icon>
                      </i>
                      <h6 className="fw-bold">Location:</h6>
                      <p>Islamabad</p>
                    </div>

                    <div className="email">
                      <i className="icofont-phone me-3">
                        <Icon color="primary" className="">
                          mail_outline
                        </Icon>
                      </i>
                      <h6 className="fw-bold">Email:</h6>
                      <p>wqasimg@gmail.com</p>
                    </div>

                    <div className="phone">
                      <i className="icofont-phone me-3">
                        <Icon color="primary">phone_in_talk</Icon>
                      </i>
                      <h6 className="fw-bold">Call:</h6>
                      <p>+92324 4929494</p>
                    </div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6640.600245896029!2d73.0127589232893!3d33.67529215132975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe20192c81c9%3A0x28808a565e31833!2sG-10%20Markaz%20G%2010%20Markaz%20G-10%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1656798445719!5m2!1sen!2sus"
                      frameborder="0"
                      style={{ border: '0', width: '92%', height: '250px' }}
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                  <TextField
                    type="text"
                    name="name"
                    id="standard-basic"
                    label="Name *"
                    value={name || ''}
                    onChange={handleChange}
                    errorMessages={['this field is required']}
                    validators={['required', 'minStringLength: 4', 'maxStringLength: 35']}
                  />

                  <TextField
                    type="text"
                    name="phone"
                    value={phone || ''}
                    label="Mobile Number *"
                    onChange={handleChange}
                    validators={[
                      'required',
                      'isNumber',
                      'minStringLength:10',
                      'maxStringLength:10'
                    ]}
                    errorMessages={[
                      'this field is required',
                      'phone number must contain only digits',
                      'phone number must be 10 digits',
                      'phone number must be 10 digits'
                    ]}
                  />

                  <TextField
                    type="email"
                    name="email"
                    label="Email"
                    value={email || ''}
                    onChange={handleChange}
                    // validators={['required', 'isEmail']}
                    // errorMessages={['this field is required', 'email is not valid']}
                  />

                  <TextField
                    type="text"
                    name="subject"
                    label="Subject"
                    onChange={handleChange}
                    value={subject || ''}
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
                    value={message || ''}
                    validators={['required']}
                    errorMessages={['this field is required']}
                  />

                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    className="text-center mx-auto"
                  >
                    <Icon>send</Icon>
                    <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Send Message</Span>
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
