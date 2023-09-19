import { Card, Grid, styled, useTheme, Box, Typography, Icon, List, ListItem } from '@mui/material';
import { Fragment } from 'react';
import { Breadcrumb } from 'app/components';
// import Campaigns from './shared/Campaigns';
// import DoughnutChart from './shared/Doughnut';
// import RowCards from './shared/RowCards';
// import StatCards from './shared/StatCards';
// import StatCards2 from './shared/StatCards2';
// import TopSellingTable from './shared/TopSellingTable';
// import UpgradeCard from './shared/UpgradeCard';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' }
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginRight: '.5rem',
  textTransform: 'capitalize'
}));

const SubTitle = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary
}));

const H4 = styled('h4')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginBottom: '16px',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary
}));

const useStyles = styled((theme) => ({
  section: {
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  image: {
    maxWidth: '100%',
    height: 'auto'
  }
}));

const About = () => {
  const { palette } = useTheme();
  const classes = useStyles();

  return (
    <Fragment>
      <ContentBox className="contact">
        <Box className="breadcrumb">
          <Breadcrumb
            routeSegments={[{ name: 'Profile', path: '/profile' }, { name: 'Contact' }]}
          />
        </Box>
        <Grid container spacing={3}>
          <Grid item lg={10} md={10} sm={12} xs={12} className="mx-auto">
            <section id="contact" className="contact">
              <div className="container">
                <div className="section-title">
                  <h2>Contact</h2>
                  <p>
                    Here is my contact info to reach me out easily by the public, so feel free to
                    contact me regarding any tachnical devlopment assitance or issue.
                  </p>
                </div>

                <div className="row" data-aos="fade-in">
                  <div className="col-lg-5 d-flex align-items-stretch">
                    <div className="info">
                      <div className="address">
                        <i className="icofont-phone">
                          <Icon color="primary">location_on</Icon>
                        </i>
                        <h4>Location:</h4>
                        <p>Islamabad</p>
                      </div>

                      <div className="email">
                        <i className="icofont-phone">
                          <Icon color="primary" className="">
                            mail_outline
                          </Icon>
                        </i>
                        <h4>Email:</h4>
                        <p>wqasimg@gmail.com</p>
                      </div>

                      <div className="phone">
                        <i className="icofont-phone">
                          <Icon color="primary">phone_in_talk</Icon>
                        </i>
                        <h4>Call:</h4>
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

                  <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                    <form
                      action="forms/contact.php"
                      method="post"
                      role="form"
                      className="php-email-form"
                    >
                      <div className="form-row">
                        <div className="form-group">
                          <label for="name">Your Name</label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            data-rule="minlen:4"
                            data-msg="Please enter at least 4 chars"
                          />
                          <div className="validate"></div>
                        </div>
                        <div className="form-group">
                          <label for="name">Your Email</label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            data-rule="email"
                            data-msg="Please enter a valid email"
                          />
                          <div className="validate"></div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="name">Subject</label>
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 8 chars of subject"
                        />
                        <div className="validate"></div>
                      </div>
                      <div className="form-group">
                        <label for="name">Message</label>
                        <textarea
                          className="form-control"
                          name="message"
                          rows="10"
                          data-rule="required"
                          data-msg="Please write something for us"
                        ></textarea>
                        <div className="validate"></div>
                      </div>
                      <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                      </div>
                      <div className="text-center">
                        <button type="submit">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default About;
