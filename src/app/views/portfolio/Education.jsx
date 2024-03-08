import {
  Card,
  Grid,
  styled,
  useTheme,
  Box,
  Typography,
  Icon,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import { Fragment } from "react";
import { Breadcrumb } from "../../components";
import { H4, H5, H6 } from "../../components/Typography";
// import Campaigns from './shared/Campaigns';
// import DoughnutChart from './shared/Doughnut';
// import RowCards from './shared/RowCards';
// import StatCards from './shared/StatCards';
// import StatCards2 from './shared/StatCards2';
// import TopSellingTable from './shared/TopSellingTable';
// import UpgradeCard from './shared/UpgradeCard';

const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
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

const useStyles = styled((theme) => ({
  section: {
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  image: {
    maxWidth: "100%",
    height: "auto"
  }
}));

const Education = () => {
  const { palette } = useTheme();
  const classes = useStyles();

  return (
    <Fragment>
      <Container>
        <Box className="breadcrumb">
          <Breadcrumb
            routeSegments={[{ name: "Profile", path: "/portfolio/about" }, { name: "Education" }]}
          />
        </Box>
        <ContentBox className="about">
          <section id="resume" className="resume">
            <div className="section-title">
              <Typography style={{ fontWeight: "bold" }} variant="h5">
                Education / Experience
              </Typography>
              <Typography variant="body1">
                Always seeking a position in a highly competitive area of challenge, utilization,
                and abilities on the way to success for the organization to earn more and more
                knowledge and experience.
              </Typography>
            </div>

            <Grid container spacing={3}>
              <Grid item lg={6}>
                <div data-aos="fade-up">
                  <Typography variant="h4" className="resume-title">
                    Education / Certifications
                  </Typography>
                  {/* <div className="resume-item pb-0">
                    <Typography variant="h4">Waseem Qasim</Typography>
                    <Typography variant="body1" component="p">
                      <em>
                        Innovative and deadline-driven Frontend Web Developer with 4+ years of
                        experience designing and developing user-centered platforms from initial
                        concept to final, polished deliverables.
                      </em>
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText>
                          <b>Address:</b> Islamabad Pakistan
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemText>
                          <b>Phone:</b> +92324 4929494
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemText>
                          <b>Email:</b> wqasimg@gmail.com
                        </ListItemText>
                      </ListItem>
                    </List>
                  </div> */}
                </div>

                {/* Education and Internship sections */}
                <div className="resume-item">
                  <H4 style={{ fontSize: "12px" }}>Master In Computer Science</H4>
                  <H5 style={{ fontSize: "11px" }}>Aug/2017 - Aug/2019</H5>
                  <H6>
                    <em>University of Agriculture Faisalabad Pakistan</em>
                  </H6>
                </div>

                <div className="resume-item">
                  <H4 style={{ fontSize: "12px" }}>Bachelor In Computer Science</H4>
                  <H5 style={{ fontSize: "11px" }}>Aug/2014 - Aug/2016</H5>
                  <H6>
                    <em>The University of Punjab</em>
                  </H6>
                </div>

                <div className="resume-item">
                  <H4 style={{ fontSize: "12px" }}>Web Development (Certification)</H4>
                  <H5 style={{ fontSize: "11px" }}>jul/2019 - Dec/2019</H5>
                  <H6>
                    <em>The University of Lahore</em>
                  </H6>
                  <p>A helpful course about fullstack web development using backend in PHP.</p>
                  <li>Designing focus on front-end. </li>
                  <li>Development and implementation of the designs. </li>
                  <li>Focus on the modern programming technologies. </li>
                  <li>Supervised by professionals for the assessment of all development. </li>
                </div>

                <div className="resume-item">
                  <H4 style={{ fontSize: "12px" }}>
                    Web Developer Internship(Mussawar I.T Solutions)
                  </H4>
                  <H5 style={{ fontSize: "11px" }}>Dec/2019 - Feb/2020</H5>
                  <H6>
                    <em>Jeff Heights Near Hafeez Center Liberty Lahore </em>
                  </H6>
                  <ul>
                    <li>
                      Lead by the design, development, and implementation of the layout, and
                      production materials.
                    </li>
                    <li>
                      Collaborate with 3 members of the design team and counsel on all aspects of
                      the project.{" "}
                    </li>
                    <li>
                      Supervised by seniors in order to ensure quality and accuracy of the design
                    </li>
                    <li>Oversee the efficient use of production project budgets.</li>
                    <li>Stay up-to-date with emerging technology.</li>
                  </ul>
                </div>
              </Grid>

              <Grid item lg={6}>
                <div data-aos="fade-up" data-aos-delay={100}>
                  <Typography variant="h3" className="resume-title">
                    Professional Experience
                  </Typography>
                  {/* <div className="resume-item">
                    <Typography variant="h4">ReactJs/Frontend Developer(Multi-Telesoft)</Typography>
                    <Typography variant="h5">Nov/2021 - Mar/2023</Typography>
                    <Typography variant="body1" component="p">
                      <em>Islamabad</em>
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText>
                          Supporting development, maintaining, and updating web portals and
                          dashboards as well websites.
                        </ListItemText>
                      </ListItem>
                    </List>
                  </div> */}
                  {/* Other professional experience */}
                  <div className="resume-item">
                    <H4 style={{ fontSize: "12px" }}>ReactJs/Frontend Developer(Multi-Telesoft)</H4>
                    <H5 style={{ fontSize: "11px" }}>Nov/2021 - Mar/2023</H5>
                    <H6>
                      <em> G-10/1 Near High Court, Islamabad </em>
                    </H6>
                    <ul>
                      <li>
                        Supporting development, maintaining, and updating web portals and dashboards
                        as well websites.
                      </li>
                      <li>Assisting in deployment and development of websites. </li>
                      <li>Writing codes for web based Solutions. </li>
                      <li>Technical documentation and presentation.</li>
                      <li>Troubleshooting websites problems.</li>
                    </ul>
                  </div>
                  <div className="resume-item">
                    <H4 style={{ fontSize: "12px" }}>ReactJs Developer(NextLogixs)</H4>
                    <H5 style={{ fontSize: "11px" }}>Feb/2020 - Sep/2021</H5>
                    <H6>
                      <em> Link Road, Model Town Lahore </em>
                    </H6>
                    <ul>
                      <li>
                        Supporting development, maintaining, and updating web portals as well
                        websites.
                      </li>
                      <li>Assisting in deployment and development of websites. </li>
                      <li>Writing codes for web based Solutions. </li>
                      <li>Technical documentation and presentation.</li>
                      <li>Troubleshooting websites problems .</li>
                    </ul>
                  </div>
                  <div className="resume-item">
                    <H4 style={{ fontSize: "12px" }}>Web Developer in Micrologix</H4>
                    <H5 style={{ fontSize: "11px" }}>Oct/2018 - Nov/2019</H5>
                    <H6>
                      <em>Garden Town Opposite to UAF Gate Faisalabad</em>
                    </H6>
                    <ul>
                      <li>
                        Developed numerous front end programs (Commerce, Blogs,Online Store,
                        presentations, and advertisements).
                      </li>
                      <li>
                        Recommended and consulted with clients on the most appropriate web
                        development.
                      </li>
                      <li>
                        Create designs and proposals a month for clients and account managers.
                      </li>
                    </ul>
                  </div>
                </div>
              </Grid>
            </Grid>
          </section>
        </ContentBox>
      </Container>
    </Fragment>
  );
};

export default Education;
