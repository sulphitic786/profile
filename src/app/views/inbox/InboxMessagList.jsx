import { Avatar, Box, Checkbox, Icon, IconButton, MenuItem, styled, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { MatxMenu } from "app/components";
import { FlexBetween, FlexBox } from "app/components/FlexBox";
import { H5, Paragraph, Small } from "app/components/Typography";
import { getTimeDifference } from "app/utils/utils";
import { format } from "date-fns";
import HtmlReactParser from "html-react-parser";
import { Fragment, useState } from "react";

const ContentBox = styled(FlexBetween)({
  flexWrap: 1,
  width: "100%",
  height: "100%",
});

const StyledH5 = styled(H5)({ marginLeft: "4px", fontWeight: "500" });

const StyledItem = styled(MenuItem)({
  display: "flex",
  alignItems: "center",
  "& .icon": { marginRight: "16px" },
});

const InboxMessageList = ({ messageList, handleCheckboxSelection }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansionPanel = (index) => {
    if (index === expanded) setExpanded(false);
    else setExpanded(index);
  };

  const { palette } = useTheme();
  const textMuted = palette.text.secondary;

  return (
    <Box mx="4px" mb="4px">
      {messageList.map((message, index) => (
        <Accordion key={message.id} expanded={expanded === index} elevation={3}>
          <AccordionSummary sx={{ p: 0, pl: 1, pr: 3 }}>
            <FlexBox alignItems="center" px={1} width="100%">
              {expanded !== index && (
                <Fragment>
                  <Checkbox
                    checked={message.selected}
                    onChange={(event) => handleCheckboxSelection(event, index)}
                    color="secondary"
                  />
                  <IconButton>
                    <Icon>star_border</Icon>
                  </IconButton>
                </Fragment>
              )}

              <ContentBox onClick={() => toggleExpansionPanel(index)}>
                {expanded === index && (
                  <FlexBetween ml="12px">
                    <Avatar src={message.sender.photo} />

                    <Box ml={1}>
                      <StyledH5>{message.sender.name}</StyledH5>
                      <Small sx={{ color: textMuted }}>
                        {format(new Date(message.date).getTime(), "MMMM dd, yyyy")}
                      </Small>
                    </Box>
                  </FlexBetween>
                )}

                {expanded !== index && (
                  <StyledH5 sx={{ fontSize: "14px", color: textMuted }}>
                    {message.sender.name}
                  </StyledH5>
                )}

                <Paragraph>{message.subject}</Paragraph>
                <Small sx={{ color: textMuted }}>
                  {getTimeDifference(new Date(message.date))} ago
                </Small>
              </ContentBox>

              <MatxMenu
                menuButton={
                  <IconButton>
                    <Icon>more_vert</Icon>
                  </IconButton>
                }
              >
                <StyledItem>
                  <Icon className="icon">reply</Icon> Reply
                </StyledItem>

                <StyledItem>
                  <Icon className="icon">archive</Icon> Archive
                </StyledItem>

                <StyledItem>
                  <Icon className="icon">delete</Icon> Delete
                </StyledItem>
              </MatxMenu>
            </FlexBox>
          </AccordionSummary>

          <AccordionDetails>
            <div>{HtmlReactParser(message.message)}</div>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default InboxMessageList;
