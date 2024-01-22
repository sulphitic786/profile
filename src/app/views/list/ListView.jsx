import {
  Avatar,
  Box,
  Card,
  Grid,
  Hidden,
  Icon,
  IconButton,
  MenuItem,
  styled,
  useTheme,
} from "@mui/material";
import { MatxMenu } from "app/components";
import { themeShadows } from "app/components/MatxTheme/themeColors";
import { Paragraph, Small, Span } from "app/components/Typography";

// styled components
const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const StyledItem = styled(MenuItem)({
  display: "flex",
  alignItems: "center",
  "& .icon": { marginRight: 2 },
});

const IMG = styled("img")({ height: 75, width: 100 });

const StyledIcon = styled(Icon)(({ theme }) => ({
  cursor: "pointer",
  marginRight: "16px",
  color: theme.palette.text.secondary,
}));

const ListCard = styled(Card)(({ theme }) => ({
  padding: "8px",
  position: "relative",
  transition: "all 0.3s ease",
  boxShadow: themeShadows[12],
  "& .card__button-group": {
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    display: "none",
    position: "absolute",
    background: theme.palette.background.paper,
  },
  "&:hover": {
    "& .card__button-group": { display: "flex", alignItems: "center" },
  },
}));

const ListView = ({ list = [] }) => {
  const { palette } = useTheme();
  const textMuted = palette.text.secondary;

  return (
    <div>
      {list.map((item, index) => (
        <ListCard key={item.id} elevation={3} sx={{ mb: index < list.length && 2 }}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item md={6}>
              <FlexBox>
                <IMG src={item.projectImage} alt="project" />

                <Box ml={2}>
                  <Paragraph sx={{ mb: 1 }}>{item.projectName}</Paragraph>

                  <Box display="flex">
                    <Small sx={{ color: textMuted }}>{item.date}</Small>
                    <Small sx={{ ml: 3, color: textMuted }}>{item.email}</Small>
                  </Box>
                </Box>
              </FlexBox>
            </Grid>

            <Grid item md={2}>
              <FlexBox color={textMuted}>
                <Icon fontSize="small">chat_bubble_outline</Icon>
                <Span sx={{ mr: 3, ml: "4px" }}>{item.comment}</Span>
                <Icon fontSize="small">desktop_windows</Icon>
                <Span sx={{ ml: "4px" }}>{item.revision}</Span>
              </FlexBox>
            </Grid>

            <Grid item md={2}>
              <FlexBox>
                <Avatar src={item.userImage} />
                <Span sx={{ ml: "16px" }}>{item.userName}</Span>
              </FlexBox>
            </Grid>

            <Grid item md={2}>
              <div className="card__button-group">
                <StyledIcon fontSize="small">filter_none</StyledIcon>
                <StyledIcon fontSize="small">share</StyledIcon>
                <StyledIcon fontSize="small">edit</StyledIcon>
                <StyledIcon fontSize="small">delete</StyledIcon>
              </div>

              <Box textAlign="right">
                <Hidden smDown>
                  <MatxMenu
                    menuButton={
                      <IconButton sx={{ mr: "4px" }}>
                        <Icon>more_horiz</Icon>
                      </IconButton>
                    }
                  >
                    <StyledItem>
                      <Icon className="icon">filter_none</Icon> Duplicate
                    </StyledItem>

                    <StyledItem>
                      <Icon className="icon">share</Icon> Share
                    </StyledItem>

                    <StyledItem>
                      <Icon className="icon">edit</Icon> Edit
                    </StyledItem>

                    <StyledItem>
                      <Icon className="icon">delete</Icon> Delete
                    </StyledItem>
                  </MatxMenu>
                </Hidden>
              </Box>
            </Grid>
          </Grid>
        </ListCard>
      ))}
    </div>
  );
};

export default ListView;
