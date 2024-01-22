import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { styled } from "@mui/material";
import { H4, Paragraph } from "app/components/Typography";
import { format } from "date-fns";

const TimelineRoot = styled(TimelineItem)(({ theme }) => ({
  "&:before": {
    display: "none !important",
  },
  "& .date": {
    marginTop: 0,
    marginBottom: "20px",
    textTransform: "uppercase",
    color: theme.palette.text.secondary,
  },
}));

const RecentUpdateCard = ({ notification, isFirstIndex, isLastIndex }) => {
  return (
    <TimelineRoot>
      <TimelineSeparator>
        <TimelineDot
          color="primary"
          variant={isFirstIndex || isLastIndex ? "default" : "outlined"}
        />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <p className="date">{format(new Date(notification.timestamp), "dd MMM, yyyy")}</p>
        <H4 sx={{ mt: 0, mb: 2 }}>{notification.title}</H4>
        <Paragraph sx={{ m: 0, pb: !isLastIndex && 4 }}>{notification.subtitle}</Paragraph>
      </TimelineContent>
    </TimelineRoot>
  );
};

export default RecentUpdateCard;
