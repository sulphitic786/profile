import { Box, Grid, styled, Typography, Icon } from "@mui/material";
import { Fragment } from "react";
import { Breadcrumb } from "../../components";

const ContentBox = styled(Box)(({ theme }) => ({
  margin: "0px",
  [theme.breakpoints.down("sm")]: { margin: "6px" }
}));

const H4 = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "500",
  marginBottom: "0px",
  textTransform: "capitalize",
  color: theme.palette.text.secondary
}));

const Container = styled("div")(({ theme }) => ({
  margin: "20px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

const Services = () => {
  return (
    <Fragment>
      <Container>
        <Box className="breadcrumb">
          <Breadcrumb
            routeSegments={[{ name: "Profile", path: "/portfolio/about" }, { name: "services" }]}
          />
        </Box>
        <ContentBox className="services">
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12} className="mx-auto">
              <section id="services" className="services">
                <Box sx={{ padding: "16px", marginBottom: "16px" }}>
                  <H4 className="section-title" variant="h4">
                    Services
                  </H4>
                  <Typography className="description">
                    Whether you require a newly developed website to enhance customer engagement, a
                    web portal to improve visibility and organization, or a robust and feature-rich
                    web app to automate business processes,{" "}
                    <a
                      href="https://sulphitic786.github.io/"
                      target="_blank"
                      className="text-primary"
                    >
                      SulphiticCo
                    </a>{" "}
                    has the solution.
                  </Typography>
                </Box>

                <Grid container spacing={3}>
                  <Grid item lg={4} md={6} xs={12} className="icon-box">
                    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
                      <div className="icon">
                        <Icon className="">computer</Icon>
                      </div>
                      <H4 className="" variant="h4" component="h4" sx={{ marginLeft: "20px" }}>
                        <a href="#">Web Application Development</a>
                      </H4>
                    </Box>
                    <Typography className="description">
                      We are providing back-end services in Java, PHP, SQL, and more while our
                      front-end designers are well-versed in using JavaScript, Bootstrap, CSS3,
                      HTML5, ReactJs and more.
                    </Typography>
                  </Grid>

                  <Grid item lg={4} md={6} xs={12} className="icon-box">
                    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
                      <div className="icon">
                        <Icon className="">layers</Icon>
                      </div>
                      <H4 className="" variant="h4" component="h4" sx={{ marginLeft: "20px" }}>
                        <a href="#">Full-Stack Web Development Solutions</a>
                      </H4>
                    </Box>
                    <Typography className="description">
                      Our expert Full-Stack Web Developers are highly skilled in Java and SQL
                      programming languages with experience in leading 12-factor applications and
                      cloud platform implementation.
                    </Typography>
                  </Grid>

                  <Grid item lg={4} md={6} xs={12} className="icon-box">
                    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
                      <div className="icon">
                        <Icon className="">brush</Icon>
                      </div>
                      <H4 className="" variant="h4" component="h4" sx={{ marginLeft: "20px" }}>
                        <a href="#">Animation & Graphics Web Design</a>
                      </H4>
                    </Box>
                    <Typography className="description">
                      Our award-winning animators and graphic designers create beautiful logos,
                      branding materials, illustrations, infographic, motion graphics, and more to
                      fulfill your branding vision.
                    </Typography>
                  </Grid>

                  <Grid item lg={4} md={6} xs={12} className="icon-box">
                    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
                      <div className="icon">
                        <Icon className="">shopping_cart</Icon>
                      </div>
                      <H4 className="" variant="h4" component="h4" sx={{ marginLeft: "20px" }}>
                        <a href="#">E-Commerce Web Development Solutions</a>
                      </H4>
                    </Box>
                    <Typography className="description">
                      Our Software Development Team uses Magneto, Shopify, and/or BigCommerce
                      platforms to create seamless, scalable, and powerful online stores for
                      e-commerce companies of all sizes.
                    </Typography>
                  </Grid>

                  <Grid item lg={4} md={6} xs={12} className="icon-box">
                    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
                      <div className="icon">
                        <Icon className="">grain</Icon>
                      </div>
                      <H4 className="" variant="h4" component="h4" sx={{ marginLeft: "20px" }}>
                        <a href="#">Web Integration Services</a>
                      </H4>
                    </Box>
                    <Typography className="description">
                      We always stay on top of the latest developments in deployment, customization,
                      and integration to create the perfect, seamless approach to how you utilize
                      your software.
                    </Typography>
                  </Grid>

                  <Grid item lg={4} md={6} xs={12} className="icon-box">
                    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
                      <div className="icon">
                        <Icon className="">language</Icon>
                      </div>
                      <H4 className="" variant="h4" component="h4" sx={{ marginLeft: "20px" }}>
                        <a href="#">Web Portal Development</a>
                      </H4>
                    </Box>
                    <Typography className="description">
                      Our Web Portal Developers have both engineering expertise and a keen
                      understanding of the business sector to create reliable and robust solutions
                      that help companies manage their workflows.
                    </Typography>
                  </Grid>
                </Grid>
              </section>
            </Grid>
          </Grid>
        </ContentBox>
      </Container>
    </Fragment>
  );
};

export default Services;
