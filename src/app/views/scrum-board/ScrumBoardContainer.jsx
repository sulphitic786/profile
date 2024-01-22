import {
  Avatar,
  Box,
  Button,
  Card,
  ClickAwayListener,
  Icon,
  IconButton,
  InputAdornment,
  styled,
  TextField,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { moveCardInList, reorderCardInList, reorderList } from "app/redux/slices/scrumSlice";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Scrollbar from "react-perfect-scrollbar";
import { useDispatch, useSelector } from "react-redux";
import BoardList from "./BoardList";
import CardEditorDialog from "./CardEditorDialog";

// styled components
const StyledScrollBar = styled(Scrollbar)({
  width: "100%",
  display: "flex",
  position: "relative",
  paddingBottom: "16px",
});

const StyledCard = styled(Card)({
  padding: "16px",
  minWidth: 288,
  cursor: "pointer",
  marginLeft: "12px",
  marginRight: "12px",
});

const ScrumBoardContainer = ({ list = [], handleAddList, handleAddNewCard }) => {
  const [card, setCard] = useState(null);
  const [columnTitle, setColumnTitle] = useState("");
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);
  const [shouldOpenAddList, setShouldOpenAddList] = useState(false);

  const dispatch = useDispatch();
  const { board } = useSelector((state) => state.scrumboard);

  const handleAddCard = () => {
    handleAddList(columnTitle);
    setColumnTitle("");
  };

  const handleCardClick = (card) => {
    setCard(card);
    setShouldOpenDialog(true);
  };

  const handleDialogClose = () => setShouldOpenDialog(false);

  const handleAddListToggle = (value) => setShouldOpenAddList(value);

  const handleChange = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      handleAddList(columnTitle);
      setColumnTitle("");
    } else setColumnTitle(event.target.value);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId === "horizontal-droppable") {
      const data = { boardId: board.id, startIndex: source.index, endIndex: destination.index };
      dispatch(reorderList(data));
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const data = {
        boardId: board.id,
        startIndex: source.index,
        listId: source.droppableId,
        endIndex: destination.index,
      };

      dispatch(reorderCardInList(data));
    } else {
      const data = {
        source,
        destination,
        boardId: board.id,
        sourcelistId: source.droppableId,
        destinationlistId: destination.droppableId,
      };

      dispatch(moveCardInList(data));
    }
  };

  return (
    <StyledScrollBar>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="horizontal-droppable" direction="horizontal">
          {(provided) => (
            <Box ref={provided.innerRef} {...provided.droppableProps} display="flex">
              {list.map((column, index) => (
                <Draggable key={column.id} draggableId={column.id} index={index} type="column">
                  {(provided, snapshot) => (
                    <BoardList
                      data={{ provided, snapshot, column }}
                      handleCardClick={handleCardClick}
                      handleDialogClose={handleDialogClose}
                      handleAddNewCard={handleAddNewCard}
                    />
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>

      <div>
        {shouldOpenAddList ? (
          <ClickAwayListener onClickAway={() => handleAddListToggle(false)}>
            <StyledCard elevation={3}>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                name="columnTitle"
                value={columnTitle}
                sx={{ mb: "12px" }}
                onChange={handleChange}
                onKeyDown={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton size="small" onClick={() => handleAddListToggle(false)}>
                        <Icon fontSize="small">clear</Icon>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button onClick={handleAddCard} variant="contained" color="primary">
                Add
              </Button>
            </StyledCard>
          </ClickAwayListener>
        ) : (
          <StyledCard
            elevation={3}
            onClick={() => handleAddListToggle(true)}
            sx={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.01)" }}
          >
            <Avatar sx={{ width: 24, height: 24, backgroundColor: "error.main" }}>+</Avatar>
            <Span sx={{ ml: 4, fontWeight: "500" }}>Add List</Span>
          </StyledCard>
        )}
      </div>

      {shouldOpenDialog && (
        <CardEditorDialog card={card} open={shouldOpenDialog} handleClose={handleDialogClose} />
      )}
    </StyledScrollBar>
  );
};

export default ScrumBoardContainer;
