import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Fab, Icon, IconButton, Link, styled, useTheme } from "@mui/material";
import clsx from "clsx";
import useAuth from "../../hooks/useAuth";
import useSettings from "../../hooks/useSettings";

const Toggle = styled("div")(() => ({
  position: "fixed",
  right: "30px",
  bottom: "50px",
  zIndex: 99,
  transition: "all 0.15s ease",
  "&.open": {
    right: "10px"
  }
}));

const SecondarySidebarToggle = () => {
  const { settings, updateSettings } = useSettings();
  const { isAuthenticated } = useAuth();

  const toggle = () => {
    updateSettings({ secondarySidebar: { open: !settings.secondarySidebar.open } });
  };

  const { palette } = useTheme();
  const textColor = palette.primary.contrastText;

  return (
    <Toggle className={clsx({ open: settings.secondarySidebar.open })}>
      {settings.secondarySidebar.open && (
        <IconButton onClick={toggle} size="small" aria-label="toggle">
          <Icon sx={{ color: textColor }}>close</Icon>
        </IconButton>
      )}

      {!settings.secondarySidebar.open && (
        <>
          {isAuthenticated ? (
            <Fab color="primary" aria-label="expand" onClick={toggle}>
              <Icon sx={{ color: textColor }}>settings</Icon>
            </Fab>
          ) : (
            <Fab color="primary" aria-label="expand">
              <Link
                href={`https://wa.me/923244929494?text=${encodeURIComponent("Hello Waseem")}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "#25D366" // WhatsApp green color
                  }
                }}
              >
                <WhatsAppIcon sx={{ fontSize: "3em" }} />
              </Link>
            </Fab>
          )}
        </>
      )}
    </Toggle>
  );
};

export default SecondarySidebarToggle;
