import {
  Card,
  Grid,
  Button,
  styled,
  useTheme,
  Box,
  Typography,
  Icon,
  List,
  ListItem
} from "@mui/material";
import { CameraAlt, DateRange, KeyboardArrowDown, MoreHoriz } from "@mui/icons-material";
import LinearProgress from "@mui/material/LinearProgress";
import { Breadcrumb } from "../../components";
import { FlexBox, FlexBetween } from "../../components/FlexBox";
import { Small, H4 } from "../../components/Typography";
import MapMarkerIcon from "../../components/icons/MapMarkerIcon";
import { Link } from "react-router-dom";
import UsersReviews from "./UsersReviews";

const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" }
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginRight: ".5rem",
  textTransform: "capitalize"
}));

const SubTitle = styled("span")(({ theme }) => ({
  fontSize: "0.875rem",
  color: theme.palette.text.secondary
}));

const H4A = styled("h4")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginBottom: "16px",
  textTransform: "capitalize",
  color: theme.palette.text.secondary
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

const ContentWrapper = styled(Box)(({ theme }) => ({
  zIndex: 1,
  marginTop: 55,
  position: "relative",
  [theme.breakpoints.down("sm")]: { paddingLeft: 20, paddingRight: 20 }
}));

const CoverPicWrapper = styled(Box)(() => ({
  top: 0,
  left: 0,
  height: 170,
  width: "100%",
  overflow: "hidden",
  position: "absolute",
  backgroundColor: "#C6D3ED"
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  width: 130,
  height: 130,
  margin: "auto",
  overflow: "hidden",
  borderRadius: "50%",
  border: "2px solid",
  borderColor: "white",
  boxSizing: "border-box",
  backgroundColor: theme.palette.primary[200]
}));

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

const About = () => {
  const theme = useTheme();

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Profile", path: "/portfolio/about" }, { name: "About" }]}
        />
      </Box>
      <Card sx={{ padding: 3, position: "relative" }}>
        <CoverPicWrapper>
          <img
            width="100%"
            height="100%"
            alt="Team Member"
            src="/assets/images/study-2.jpg"
            style={{ objectFit: "cover" }}
          />
        </CoverPicWrapper>

        <ContentWrapper>
          <FlexBox paddingTop={4} justifyContent="center">
            <ImageWrapper>
              <img
                src="/assets/images/profilePicture.jpeg"
                alt="Profile"
                height={130}
                width={130}
                sizes="small"
              />
            </ImageWrapper>
            {/* </AvatarBadge> */}
          </FlexBox>

          <Box textAlign="center" mt={2}>
            <H4 fontWeight={600} textAlign="center">
              Waseem Qasim
            </H4>

            <FlexBetween maxWidth={500} flexWrap="wrap" margin="auto" mt={1}>
              <FlexBox alignItems="center" gap={1}>
                {/* <Bratislava sx={{ color: "text.disabled" }} /> */}
                <Small fontWeight={600} color="text.disabled">
                  Software Engineer | Project Manager | Fullstack | NodeJs | Sr. Frontend |
                  Typescript | Redux | Nextjs | Reactjs | Javascript | Material UI | Html & HTML5 |
                  CSS | Tailwind | CSS & CSS3 | SCSS | SQL | NoSql | MongoDB | DynamoDB | MySql |
                  Databases | GraphQL | CI/CD | GIT & Github | 6x Alibaba Cloud | AWS | Deployment
                </Small>
              </FlexBox>

              <FlexBox alignItems="center" gap={1}>
                <MapMarkerIcon color="primary" />
                <Small fontWeight={600} color="text.disabled">
                  Islamabad, Pakistan
                </Small>
              </FlexBox>

              <FlexBox alignItems="center" gap={1}>
                <DateRange color="primary" />
                <Small fontWeight={600} color="text.disabled">
                  Joined March 17, 2019
                </Small>
              </FlexBox>
            </FlexBetween>

            <FlexBox justifyContent={"space-evenly"} marginTop={3} flexWrap="wrap">
              <Box
                minWidth={250}
                sx={{ [theme.breakpoints.down(600)]: { minWidth: "100%", mb: 2 } }}
              >
                <Small mb={0.5}>Profile Impression</Small>

                <FlexBox alignItems="center" gap={1}>
                  <LinearProgress
                    value={90}
                    color="success"
                    variant="determinate"
                    sx={{ flexGrow: 1 }}
                  />
                  <Small fontWeight={600}>90%</Small>
                </FlexBox>
              </Box>

              <FlexBetween
                width="100%"
                maxWidth={100}
                justifyContent={"flex-end"}
                flexWrap="wrap"
                sx={{
                  [theme.breakpoints.down(600)]: { maxWidth: "100%" },
                  [theme.breakpoints.down(400)]: {
                    "& .MuiButtonBase-root": { width: "100%", mb: 1 }
                  }
                }}
              >
                {/* <Button variant="outlined">Follow</Button> */}
                <Button variant="outlined">
                  <Link to="/portfolio/contact_us" paddingLeft={1} variant="outlined">
                    {/* <Icon>send</Icon> */}
                    Hire Me
                  </Link>
                </Button>

                {/* <Button sx={{ padding: "0.6rem" }}>
                  <MoreHoriz sx={{ color: "text.disabled" }} />
                </Button> */}
              </FlexBetween>
            </FlexBox>
          </Box>
        </ContentWrapper>
      </Card>

      <Card sx={{ padding: 3, marginY: 2, position: "relative" }} className="">
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12} xs={12} className="mx-auto">
            <section id="about" className={"section"}>
              <div className="container">
                <div className="section-title my-2">
                  <Typography variant="h5">About</Typography>
                  <Typography textAlign="justify" variant="body1">
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
                  <Grid item lg={12}>
                    <div className="content">
                      <Typography marginTop={2} variant="h5">
                        Web Developer
                      </Typography>
                      <Typography textAlign="justify" variant="body1" className="font-italic">
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
                              <Link
                                href={`http://sulphitic.netlify.app`}
                                target="_blank"
                                sx={{ color: "primary" }}
                              >
                                sulphitic.netlify.app
                              </Link>
                            </ListItem>
                            <ListItem>
                              <Icon color="primary">chevron_right</Icon> <strong>Phone: </strong>{" "}
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
                              <Icon color="primary">chevron_right</Icon> <strong>Degree: </strong>{" "}
                              Master in Computer Science
                            </ListItem>
                            <ListItem>
                              <Icon color="primary">chevron_right</Icon> <strong>Email: </strong>{" "}
                              wqasimg@gmail.com
                            </ListItem>
                            <ListItem>
                              <Icon color="primary">chevron_right</Icon>{" "}
                              <strong>Freelance: </strong> Available
                            </ListItem>
                          </List>
                        </Grid>
                      </Grid>
                      <Typography variant="body1">
                        Showing a balanced portfolio can ease the process of the client trusting you
                        as they can see how creative you can get but also how you can deliver
                        results that the client expects. Sometimes, things that are too flashy might
                        scare away clients as some have the prejudice of{" "}
                        <b>“I don’t need an artist, I need a developer”.</b>
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </section>
          </Grid>
        </Grid>
      </Card>
      <Card sx={{ padding: 3, position: "relative" }}>
        <UsersReviews />
      </Card>
    </Container>
  );
};

export default About;
