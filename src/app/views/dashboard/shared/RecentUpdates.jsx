import { Timeline } from "@mui/lab";
import { Card, useMediaQuery } from "@mui/material";
import RecentUpdateCard from "./RecentUpdateCard";

const RecentUpdates = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("xs"));

  return (
    <Card elevation={3} sx={{ mx: "auto", maxWidth: 900, p: !isMobile && 5 }}>
      <Timeline align="left">
        {updateList.map((notification, ind) => (
          <RecentUpdateCard
            key={ind}
            isFirstIndex={ind === 0}
            notification={notification}
            isLastIndex={ind === updateList.length - 1}
          />
        ))}
      </Timeline>
    </Card>
  );
};

const updateList = [
  {
    title: "What is Lorem Ipsum?",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    timestamp: "2020/09/15",
  },
  {
    title: "Why do we use it?",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    timestamp: "2020/08/1",
  },
  {
    title: "Where can I get some?",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    timestamp: "2020/07/05",
  },
  {
    title: "Where does it come from?",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    timestamp: "2020/05/12",
  },
];
export default RecentUpdates;
