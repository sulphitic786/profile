import { ExpandMore, Search } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Icon,
  styled,
  TextField,
} from "@mui/material";
import { Breadcrumb } from "app/components";
import { FlexAlignCenter } from "app/components/FlexBox";
import { H1, H4, Paragraph } from "app/components/Typography";
import { Fragment, useState } from "react";

// styled components
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const StyledButton = styled(Button)({
  boxShadow: "none",
  paddingLeft: "28px",
  paddingRight: "28px",
  borderRadius: "300px",
});

const Heading = styled(H1)({
  fontSize: "40px",
  fontWeight: "500",
  textAlign: "center",
  marginBottom: "32px",
});

const StyledP = styled(Paragraph)(({ theme }) => ({
  fontSize: "16px",
  textAlign: "center",
  marginBottom: "64px",
  color: theme.palette.text.secondary,
}));

const StyledCard = styled(Card)(({ theme, index, tabIndex }) => ({
  margin: "8px",
  display: "flex",
  cursor: "pointer",
  padding: "22px 32px",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  border: `1px solid ${index === tabIndex ? theme.palette.primary.main : "transparent"}`,
  transition: "all 200ms ease-in",
  "& .icon": {
    fontSize: "40px",
    marginBottom: "8px",
    transition: "all 200ms ease-in",
    color: index === tabIndex && theme.palette.primary.main,
  },
}));

const Faq1 = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleExpansionClick = (ind) => {
    if (ind === expandedIndex) setExpandedIndex(-1);
    else setExpandedIndex(ind);
  };

  return (
    <Container>
      <div className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Pages", path: "/faq" }, { name: "FAQ 1" }]} />
      </div>

      <FlexAlignCenter py={8} flexDirection="column">
        <Heading>Hi, How can we help you?</Heading>
        <Box sx={{ minWidth: 400 }}>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            placeholder="Search knowledge base"
            InputProps={{
              startAdornment: <Search fontSize="small" />,
              endAdornment: <StyledButton variant="contained">Search</StyledButton>,
              style: { borderRadius: 300, paddingRight: 0 },
            }}
          />
        </Box>
      </FlexAlignCenter>

      <StyledP>Or Browse by category</StyledP>

      <Box mb={4}>
        <FlexAlignCenter m={-1} flexWrap="wrap">
          {categoryList.map((item, ind) => (
            <StyledCard index={ind} tabIndex={tabIndex} key={ind} onClick={() => setTabIndex(ind)}>
              <Icon className="icon">{item.icon}</Icon>
              <H4>{item.title}</H4>
            </StyledCard>
          ))}
        </FlexAlignCenter>
      </Box>

      <Fragment>
        {categoryList[tabIndex].questionList?.map((item, ind) => (
          <Accordion
            key={ind}
            elevation={0}
            expanded={expandedIndex === ind}
            onClick={() => handleExpansionClick(ind)}
          >
            <AccordionSummary expandIcon={<ExpandMore />}>{item.question}</AccordionSummary>

            <AccordionDetails>{item.answer}</AccordionDetails>
          </Accordion>
        ))}
      </Fragment>
    </Container>
  );
};

const categoryList = [
  {
    icon: "home",
    title: "Getting Started",
    questionList: [
      {
        question: "How to install?",
        answer: "Open command line in root directory of your project and type npm install",
      },
      {
        question: "How to debug?",
        answer:
          "Delete node_modules from your project folder. Open command line in root directory of your project and type npm install",
      },
    ],
  },
  {
    icon: "layers",
    title: "Plans & Pricing",
    questionList: [
      {
        question: "What's the price?",
        answer: "$2356",
      },
      {
        question: "How long will I get suppot?",
        answer: "Life time support",
      },
    ],
  },
  {
    icon: "contact_support",
    title: "Sales Questions",
    questionList: [
      {
        question: "When are you availabe?",
        answer: "Monday to Friday from 10:00am to 6pm EST",
      },
      {
        question: "When are you availabe?",
        answer: "Monday to Friday from 10:00am to 6pm EST",
      },
    ],
  },
  {
    icon: "360",
    title: "Usage Guide",
    questionList: [
      {
        question: "How to install in Mac?",
        answer: "Open command line in your project's root directory and type yarn and hit enter",
      },
      {
        question: "How to install in Mac?",
        answer: "Open command line in your project's root directory and type yarn and hit enter",
      },
    ],
  },
];

export default Faq1;
