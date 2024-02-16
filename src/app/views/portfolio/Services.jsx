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
  margin: '20px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const Services = () => {
  const { palette } = useTheme();
  const classes = useStyles();

  return (
    <Fragment>
      <Container>
        <Box className="breadcrumb">
          <Breadcrumb
            routeSegments={[{ name: 'Profile', path: '/portfolio/about' }, { name: 'services' }]}
          />
        </Box>
        <ContentBox className="about">
          <Grid container spacing={3}>
            <Grid item lg={10} md={10} sm={12} xs={12} className="mx-auto">
              <section id="services" className="services">
                <div className="container">
                  <div className="section-title">
                    <h2>Services</h2>
                    <p>
                      Whether you require a newly developed website to enhance customer engagement,
                      a web portal to improve visibility and organization, or a robust and
                      feature-rich web app to automate business processes,{' '}
                      <a href="https://sulphitic786.github.io/portfolio" className="text-primery">
                        SulphiticCo
                      </a>{' '}
                      has the solution.
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                      <div className="icon">
                        <Icon className="">computer</Icon>
                      </div>
                      <h4 className="title">
                        <a href="">Web Application Development</a>
                      </h4>
                      <p className="description">
                        We are providing back-end services in Java, PHP, SQL, and more while our
                        front-end designers are well-versed in using JavaScript, Bootstrap, CSS3,
                        HTML5, ReactJs and more.
                      </p>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div className="icon">
                        <Icon className="">layers</Icon>
                      </div>
                      <h4 className="title">
                        <a href="">Full-Stack Web Development Solutions</a>
                      </h4>
                      <p className="description">
                        Our expert Full-Stack Web Developers are highly skilled in Java and SQL
                        programming languages with experience in leading 12-factor applications and
                        cloud platform implementation.
                      </p>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="icon">
                        <Icon className="">brush</Icon>
                      </div>
                      <h4 className="title">
                        <a href="">Animation & Graphics Web Design</a>
                      </h4>
                      <p className="description">
                        Our award-winning animators and graphic designers create beautiful logos,
                        branding materials, illustrations, infographics, motion graphics, and more
                        to fulfill your branding vision.
                      </p>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div className="icon">
                        <Icon className="">add_shopping_cart</Icon>
                      </div>
                      <h4 className="title">
                        <a href="">E-Commerce Web Development Solutions</a>
                      </h4>
                      <p className="description">
                        Our Software Development Team uses Magento, Shopify, and/or BigCommerce
                        platforms to create seamless, scalable, and powerful online stores for
                        e-commerce companies of all sizes.
                      </p>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <div className="icon">
                        <Icon className="">grain</Icon>
                      </div>
                      <h4 className="title">
                        <a href="">Web Integration Services</a>
                      </h4>
                      <p className="description">
                        We always stay on top of the latest developments in deployment,
                        customization, and integration to create the perfect, seamless approach to
                        how you utilize your software.
                      </p>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <div className="icon">
                        <Icon className="">language</Icon>
                      </div>
                      <h4 className="title">
                        <a href="">Web Portal Development</a>
                      </h4>
                      <p className="description">
                        Our Web Portal Developers have both engineering expertise and a keen
                        understanding of the business sector to create reliable and robust solutions
                        that help companies manage their workflows.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </Grid>
          </Grid>
        </ContentBox>
      </Container>
    </Fragment>
  );
};

export default Services;
