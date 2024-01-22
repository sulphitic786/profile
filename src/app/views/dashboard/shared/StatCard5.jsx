import { Card, Grid, Icon, IconButton, styled, useTheme } from "@mui/material";
import { H3, Paragraph } from "app/components/Typography";

const StyledCard = styled(Card)(() => ({
  padding: "20px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
}));

const StatCard5 = () => {
  const statList = [
    { icon: "card_giftcard", amount: 10495, title: "TO BE PACKED" },
    { icon: "local_shipping", amount: 30942, title: "TO BE SHIPPED" },
    { icon: "assignment_turned_in", amount: 45269, title: "TO BE DELIVERED" },
    { icon: "assignment", amount: 20965, title: "TO BE INVOICED" },
  ];

  const { palette } = useTheme();
  const textMuted = palette.text.secondary;

  return (
    <div>
      <Grid container spacing={3}>
        {statList.map((item, ind) => (
          <Grid key={item.title} item md={3} sm={6} xs={12}>
            <StyledCard elevation={3}>
              <IconButton size="small" sx={{ background: "rgba(0, 0, 0, 0.01)" }}>
                <Icon sx={{ color: textMuted }}>{item.icon}</Icon>
              </IconButton>

              <H3 sx={{ mt: "4px", fontSize: "32px" }}>{item.amount.toLocaleString()}</H3>
              <Paragraph sx={{ m: 0, color: textMuted }}>{item.title}</Paragraph>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default StatCard5;
