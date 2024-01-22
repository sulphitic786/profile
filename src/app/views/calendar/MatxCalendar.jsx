import { Box, Button, styled } from "@mui/material";
import Breadcrumb from "app/components/Breadcrumb";
import { convertHexToRGB } from "app/utils/utils";
import { format, getDay, parse, startOfWeek } from "date-fns";
import enUS from "date-fns/locale/en-US";
import { useEffect, useRef, useState } from "react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import * as ReactDOM from "react-dom";
import CalendarHeader from "./CalendarHeader";
import { getAllEvents, updateEvent } from "./CalendarService";
import EventEditorDialog from "./EventEditorDialog";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    margin: "30px",
    [theme.breakpoints.down("sm")]: { margin: "16px" },
  },
}));

const CalendarRoot = styled("div")(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  "& .rbc-event": {
    background: `rgba(${convertHexToRGB(theme.palette.primary.main)},1)`,
  },
  "& .rbc-selected": {
    background: `rgba(${convertHexToRGB(theme.palette.secondary.main)},1)`,
  },
  "& .rbc-calendar": { height: "auto", flexGrow: 1 },
  "& .rbc-header": {
    padding: "12px 16px !important",
    "& a": { paddingBottom: "8px !important" },
    "& span": { fontSize: "15px !important", fontWeight: 500 },
  },
}));

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });

const DragAndDropCalendar = withDragAndDrop(Calendar);
let viewList = Object.keys(Views).map((key) => Views[key]);

const MatxCalendar = () => {
  const headerComponentRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState(null);
  const [shouldShowEventDialog, setShouldShowEventDialog] = useState(false);

  const updateCalendar = () => {
    getAllEvents()
      .then((res) => res.data)
      .then((events) => {
        events = events?.map((e) => ({ ...e, start: new Date(e.start), end: new Date(e.end) }));
        setEvents(events);
      });
  };

  const handleDialogClose = () => {
    setShouldShowEventDialog(false);
    updateCalendar();
  };

  const handleEventMove = (event) => handleEventResize(event);

  const handleEventResize = (event) => {
    updateEvent(event).then(() => updateCalendar());
  };

  const openNewEventDialog = ({ action, ...event }) => {
    if (action === "doubleClick") {
      setNewEvent(event);
      setShouldShowEventDialog(true);
    }
  };

  const openExistingEventDialog = (event) => {
    setNewEvent(event);
    setShouldShowEventDialog(true);
  };

  useEffect(() => {
    updateCalendar();
  }, []);

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Calendar" }]} />
      </Box>

      <Button
        sx={{ mb: 2 }}
        variant="contained"
        color="secondary"
        onClick={() =>
          openNewEventDialog({ action: "doubleClick", start: new Date(), end: new Date() })
        }
      >
        Add Event
      </Button>

      <CalendarRoot>
        <Box ref={headerComponentRef} />
        <DragAndDropCalendar
          step={60}
          resizable
          selectable
          events={events}
          views={viewList}
          endAccessor="end"
          showMultiDayTimes
          localizer={localizer}
          startAccessor="start"
          defaultDate={new Date()}
          defaultView={Views.MONTH}
          onEventDrop={handleEventMove}
          onEventResize={handleEventResize}
          components={{
            toolbar: (props) => {
              return headerComponentRef.current ? (
                ReactDOM.createPortal(<CalendarHeader {...props} />, headerComponentRef.current)
              ) : (
                <div>Header component not found</div>
              );
            },
          }}
          // onNavigate={handleNavigate}
          onSelectEvent={(event) => openExistingEventDialog(event)}
          onSelectSlot={(slotDetails) => openNewEventDialog(slotDetails)}
        />
      </CalendarRoot>

      {shouldShowEventDialog && (
        <EventEditorDialog
          event={newEvent}
          open={shouldShowEventDialog}
          handleClose={handleDialogClose}
        />
      )}
    </Container>
  );
};

export default MatxCalendar;
