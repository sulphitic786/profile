import {
  AppBar,
  Button,
  Icon,
  ThemeProvider,
  Link,
  Toolbar,
  styled,
  useTheme
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import useSettings from "../hooks/useSettings";
import { topBarHeight } from "../utils/constant";
import { Paragraph, Span } from "./Typography";

const AppFooter = styled(Toolbar)(() => ({
  display: "flex",
  alignItems: "center",
  minHeight: topBarHeight,
  "@media (max-width: 499px)": {
    display: "table",
    width: "100%",
    minHeight: "auto",
    padding: "1rem 0",
    "& .container": {
      flexDirection: "column !important",
      "& a": { margin: "0 0 16px !important" }
    }
  }
}));

const FooterContent = styled("div")(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: "0px 1rem",
  maxWidth: "1170px",
  margin: "0 auto"
}));

const Footer = () => {
  const theme = useTheme();
  const { settings } = useSettings();

  const footerTheme = settings.themes[settings.footer.theme] || theme;

  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar color="primary" position="static" sx={{ zIndex: 96 }}>
        <AppFooter>
          <FooterContent>
            <Span>
              <Link
                href={"https://www.linkedin.com/in/waseemqasim3737/"}
                target="_blank"
                sx={{ color: "white" }}
              >
                <LinkedInIcon sx={{ mr: 1, fontSize: "2em" }} />
              </Link>
              <Link
                href={"https://github.com/sulphitic786/"}
                target="_blank"
                sx={{ color: "white" }}
              >
                <GitHubIcon sx={{ mr: 1, fontSize: "2em" }} />
              </Link>
              <Link
                href={"https://www.facebook.com/salman.naike"}
                target="_blank"
                sx={{ color: "white" }}
              >
                <FacebookIcon sx={{ mr: 1, fontSize: "2em" }} />
              </Link>
            </Span>

            <Span sx={{ m: "auto" }}>
              {/* <Icon sx={{ mr: 1 }} fontSize="small">
                shopping_cart
              </Icon> */}
            </Span>
            <Paragraph sx={{ m: 0 }}>
              COPYRIGHT © {new Date().getFullYear()} SulphiticCo, All rights Reserved
            </Paragraph>
          </FooterContent>
        </AppFooter>
      </AppBar>
    </ThemeProvider>
  );
};

export default Footer;
