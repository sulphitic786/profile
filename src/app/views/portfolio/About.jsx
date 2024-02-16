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

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const About = () => {
  const { palette } = useTheme();
  const classes = useStyles();

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Profile', path: '/portfolio/about' }, { name: 'About' }]}
        />
      </Box>
      <ContentBox className="about">
        <Grid container spacing={3}>
          <Grid item lg={10} md={10} sm={12} xs={12} className="mx-auto">
            <section id="about" className={'section'}>
              <div className="container">
                <div className="section-title my-2">
                  <Typography variant="h4">About</Typography>
                  <Typography variant="body1">
                    As a web developer focused on customer satisfaction, I manage all aspects of web
                    development from concept to requirements definition, design, development,
                    launch, maintenance and user support. I enjoy the client-facing role and working
                    closely with team members to produce high-quality deliverables.
                  </Typography>
                </div>
                <Grid container spacing={4}>
                  {/* <Grid item lg={4} data-aos="fade-right">
                    <img src="assets/img/profile-img.jpg" className={'image'} alt="Waseem Qasim" />
                  </Grid> */}
                  <Grid item lg={12} data-aos="fade-left">
                    <div className="content">
                      <Typography variant="h3">Web Developer</Typography>
                      <Typography variant="body1" className="font-italic">
                        Building a website is, in many ways, an exercise of willpower. It’s tempting
                        to get distracted by the bells and whistles of the design process, and
                        forget all about creating compelling content.
                      </Typography>
                      <Grid container>
                        <Grid item lg={6}>
                          <List>
                            {/* <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 22 Feb 1994</li> */}
                            <ListItem>
                              <Icon color="primary">chevron_right</Icon> <strong>Website: </strong>
                              <a href="sulphitic786.github.io"> sulphitic786.github.io </a>
                            </ListItem>
                            <ListItem>
                              <Icon color="primary">chevron_right</Icon> <strong>Phone: </strong>{' '}
                              +923244929494
                            </ListItem>
                            <ListItem>
                              <Icon color="primary">chevron_right</Icon> <strong>City: </strong>
                              Islamabad
                            </ListItem>
                          </List>
                        </Grid>
                        <Grid item lg={6}>
                          <List>
                            <ListItem>
                              <Icon color="primary">chevron_right</Icon>
                              <strong>Activities: </strong> Reseach | Badminton | Cricket
                            </ListItem>
                            <ListItem>
                              <Icon color="primary">chevron_right</Icon> <strong>Degree: </strong>{' '}
                              Master in Computer Science
                            </ListItem>
                            <ListItem>
                              <Icon color="primary">chevron_right</Icon> <strong>Email: </strong>{' '}
                              wqasimg@gmail.com
                            </ListItem>
                            <ListItem>
                              <Icon color="primary">chevron_right</Icon>{' '}
                              <strong>Freelance: </strong> Available
                            </ListItem>
                          </List>
                        </Grid>
                      </Grid>
                      <Typography variant="body1">
                        Showing a balanced portfolio can ease the process of the client trusting you
                        as they can see how creative you can get but also how you can deliver
                        results that the client expects. Sometimes, things that are too flashy might
                        scare away clients as some have the prejudice of{' '}
                        <b>“I don’t need an artist, I need a developer”.</b>
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </section>
          </Grid>
        </Grid>
      </ContentBox>
    </Container>
  );
};

export default About;
