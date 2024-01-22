import { ExpandMore, Search } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  Grid,
  styled,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { FlexAlignCenter } from "app/components/FlexBox";
import { useState } from "react";

// styled components
const ContentBox = styled(FlexAlignCenter)(({ theme }) => ({
  flexDirection: "column",
  padding: "68px 16px 100px 16px",
  background: theme.palette.primary.main,
}));

const CardRoot = styled(Card)(({ theme }) => ({
  marginTop: "-48px",
  padding: "8px 16px",
  marginRight: "2rem",
  marginLeft: "2rem",
  borderRadius: "8px",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
  },
}));

const Faq2 = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleTabChange = (e, value) => setTabIndex(value);

  const handleExpansionClick = (ind) => {
    if (ind === expandedIndex) setExpandedIndex(-1);
    else setExpandedIndex(ind);
  };

  return (
    <div>
      <ContentBox>
        <TextField
          fullWidth
          variant="outlined"
          sx={{ maxWidth: 600 }}
          placeholder="Search knowledge base"
          InputProps={{
            startAdornment: <Search sx={{ mr: 1 }} fontSize="small" />,
            endAdornment: (
              <Button variant="contained" sx={{ px: "28px" }}>
                Search
              </Button>
            ),
            style: { background: "white" },
          }}
        />
      </ContentBox>

      <CardRoot>
        <Tabs
          value={tabIndex}
          textColor="primary"
          indicatorColor="primary"
          onChange={handleTabChange}
        >
          <Tab value={0} label="Getting Started" sx={{ textTransform: "capitalize" }} />
          <Tab value={1} label="Pricing" sx={{ textTransform: "capitalize" }} />
        </Tabs>

        {tabIndex === 0 && (
          <Grid container spacing={3}>
            <Grid item md={6} sm={12}>
              {questionList1.map((item, ind) => (
                <Accordion
                  key={ind}
                  elevation={0}
                  expanded={expandedIndex === ind}
                  onClick={() => handleExpansionClick(ind)}
                >
                  <AccordionSummary expandIcon={<ExpandMore />}>{item.title}</AccordionSummary>
                  <AccordionDetails>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                    brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                    cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                    you probably haven"t heard of them accusamus labore sustainable VHS.
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>

            <Grid item md={6} sm={12}>
              {questionList1.map((item, ind) => (
                <Accordion
                  key={ind}
                  elevation={0}
                  expanded={expandedIndex === ind + 4}
                  onClick={() => handleExpansionClick(ind + 4)}
                >
                  <AccordionSummary expandIcon={<ExpandMore />}>{item.title}</AccordionSummary>
                  <AccordionDetails>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                    brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                    cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                    you probably haven"t heard of them accusamus labore sustainable VHS.
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          </Grid>
        )}

        {tabIndex === 1 && (
          <Grid container spacing={3}>
            <Grid item md={6} sm={12}>
              {questionList2.map((item, ind) => (
                <Accordion
                  key={ind}
                  elevation={0}
                  expanded={expandedIndex === ind}
                  onClick={() => handleExpansionClick(ind)}
                >
                  <AccordionSummary expandIcon={<ExpandMore />}>{item.title}</AccordionSummary>
                  <AccordionDetails>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                    brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee nulla
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>

            <Grid item md={6} sm={12}>
              {questionList2.map((item, ind) => (
                <Accordion
                  key={ind}
                  elevation={0}
                  expanded={expandedIndex === ind + 4}
                  onClick={() => handleExpansionClick(ind + 4)}
                >
                  <AccordionSummary expandIcon={<ExpandMore />}>{item.title}</AccordionSummary>
                  <AccordionDetails>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                    brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee nulla
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          </Grid>
        )}
      </CardRoot>
    </div>
  );
};

const questionList1 = [
  { title: "How to install?" },
  { title: "How can I change colors?" },
  { title: "How to add page?" },
];

const questionList2 = [
  { title: "How would I get refund?" },
  { title: "How long will it take to reach product?" },
  { title: "What's the refund policy?" },
  { title: "What's the customer protection policy?" },
];
export default Faq2;
