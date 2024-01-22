import { Card, Grid, Icon, IconButton, styled } from "@mui/material";
import { H3, Paragraph } from "app/components/Typography";

const StyledCard = styled(Card)(() => ({
  padding: "20px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
}));

const StatCard4 = () => {
  const statList = [
    { icon: "colorize", amount: 48, title: "New Posts" },
    { icon: "attachment", amount: 291, title: "Attached Files" },
    { icon: "mode_comment", amount: 291, title: "Comments" },
    { icon: "remove_red_eye", amount: 110, title: "Total Views" },
  ];

  return (
    <Grid container spacing={3}>
      {statList.map((item, ind) => (
        <Grid key={item.title} item md={6} xs={12}>
          <StyledCard elevation={3}>
            <IconButton sx={{ padding: "12px", background: "rgba(0, 0, 0, 0.01)" }}>
              <Icon sx={{ color: "text.secondary" }}>{item.icon}</Icon>
            </IconButton>

            <H3 sx={{ mt: "4px", fontSize: 32 }}>{item.amount.toLocaleString()}</H3>
            <Paragraph sx={{ m: 0, color: "text.secondary" }}>{item.title}</Paragraph>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatCard4;
