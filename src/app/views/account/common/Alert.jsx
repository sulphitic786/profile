import { Notifications } from "@mui/icons-material";
import { Box, Button, Stack, useMediaQuery } from "@mui/material";
import { FlexBetween } from "app/components/FlexBox";
import { H5, Paragraph } from "app/components/Typography";

const Alert = ({ title, description, btnText, hiddenButton }) => {
  const downSM = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <FlexBetween
      sx={{
        padding: 3,
        flexWrap: "wrap",
        borderRadius: "4px",
        backgroundColor: "grey.100",
      }}
    >
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        width={hiddenButton ? "100%" : { lg: "60%", sm: "60%", xs: "100%" }}
      >
        <Notifications color="primary" />
        <Box>
          <H5 lineHeight={1.5}>{title}</H5>
          <Paragraph>{description}</Paragraph>
        </Box>
      </Stack>

      {!hiddenButton && (
        <Button variant="contained" fullWidth={downSM} sx={{ marginTop: { xs: 2, sm: 0 } }}>
          {btnText}
        </Button>
      )}
    </FlexBetween>
  );
};

export default Alert;
