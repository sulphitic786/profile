import {
  Box,
  Card,
  Divider,
  Hidden,
  Icon,
  IconButton,
  MenuItem,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { MatxSidenav, MatxSidenavContainer, MatxSidenavContent } from "app/components";
import { H5, H6, Paragraph } from "app/components/Typography";
import { useEffect, useState } from "react";

const FlexBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

const SidebarCardRoot = styled("div")(({ theme }) => ({
  position: "relative",
  "& .headerBG": {
    height: 200,
    background: theme.palette.primary.main,
    backgroundImage: "url('/assets/images/home-bg-black.png')",
    backgroundSize: "contain",
  },
  "& .sidenavHolder": { marginTop: -200 },
  "& .sidenav": {
    background: "transparent !important",
    [theme.breakpoints.down("sm")]: {
      background: theme.palette.background.default,
    },
  },
}));

const SideNavHeader = styled(H6)(({ theme }) => ({
  padding: "24px",
  paddingLeft: "36px",
  color: "rgba(255,255,255,0.87) !important",
  [theme.breakpoints.down("sm")]: { color: "inherit !important" },
}));

const LeftSidebarCard = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const bgDefault = theme.palette.background.default;
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleSidenav = () => setOpen(!open);

  useEffect(() => {
    if (isMobile) setOpen(false);
    else setOpen(true);
  }, [isMobile]);

  return (
    <SidebarCardRoot>
      <div className="headerBG" />
      <div className="sidenavHolder">
        <MatxSidenavContainer>
          <MatxSidenav
            open={open}
            width="320px"
            bgClass="bg-transparent"
            toggleSidenav={toggleSidenav}
            sx={{ background: "transparent" }}
          >
            <div className="sidenav">
              <Hidden mdUp>
                <Box display="flex" justifyContent="flex-end">
                  <IconButton onClick={toggleSidenav}>
                    <Icon>clear</Icon>
                  </IconButton>
                </Box>
              </Hidden>

              <SideNavHeader>Sidebar header</SideNavHeader>

              <Box py="68px" />
              <Box sx={{ background: bgDefault }}>
                <MenuItem sx={{ pl: 4 }}>List 1</MenuItem>
                <MenuItem sx={{ pl: 4 }}>List 1</MenuItem>
                <MenuItem sx={{ pl: 4 }}>List 1</MenuItem>
                <MenuItem sx={{ pl: 4 }}>List 1</MenuItem>
                <MenuItem sx={{ pl: 4 }}>List 1</MenuItem>
                <MenuItem sx={{ pl: 4 }}>List 1</MenuItem>
                <MenuItem sx={{ pl: 4 }}>List 1</MenuItem>
              </Box>
            </div>
          </MatxSidenav>

          <MatxSidenavContent>
            <H5 sx={{ p: 3, color: "#fff" }}>Left sidebar card</H5>
            <Box py="20px" />
            <Box pb="6px" />
            <Card sx={{ m: 2 }} elevation={2}>
              <FlexBox ml={1} flexWrap="wrap">
                <Hidden mdUp>
                  <IconButton onClick={toggleSidenav}>
                    <Icon>short_text</Icon>
                  </IconButton>
                </Hidden>
                <Hidden mdDown>
                  <Box pl={2} />
                </Hidden>
                <Box py={2}>Card toolbar</Box>
              </FlexBox>
              <Divider />
              <Paragraph
                sx={{
                  p: 3,
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
              >
                {`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima sapiente earum aspernatur quia officia eaque beatae rem molestiae fuga tempora, architecto doloremque facilis, illum, soluta ducimus dolorum tempore nemo inventore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima sapiente earum aspernatur quia officia eaque beatae rem molestiae fuga tempora, architecto doloremque facilis, illum, soluta ducimus dolorum tempore nemo inventore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima sapiente earum aspernatur quia officia eaque beatae rem molestiae fuga tempora, architecto doloremque facilis, illum, soluta ducimus dolorum tempore nemo inventore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima sapiente earum aspernatur quia officia eaque beatae rem molestiae fuga tempora, architecto doloremque facilis, illum, soluta ducimus dolorum tempore nemo inventore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima sapiente earum aspernatur quia officia eaque beatae rem molestiae fuga tempora, architecto doloremque facilis, illum, soluta ducimus dolorum tempore nemo inventore!

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium.
                                
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium.

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium.

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium.

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium.

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium.
                                
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium.`}
              </Paragraph>
            </Card>
          </MatxSidenavContent>
        </MatxSidenavContainer>
      </div>
    </SidebarCardRoot>
  );
};

export default LeftSidebarCard;
