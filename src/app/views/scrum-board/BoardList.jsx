import {
  Box,
  Button,
  Card,
  ClickAwayListener,
  Icon,
  IconButton,
  InputAdornment,
  MenuItem,
  styled,
  TextField,
} from "@mui/material";
import { MatxMenu } from "app/components";
import { FlexBetween } from "app/components/FlexBox";
import { H4 } from "app/components/Typography";
import {
  addNewCardInList,
  deleteListFromBoard,
  renameListInBoard,
} from "app/redux/slices/scrumSlice";
import { useEffect, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Scrollbar from "react-perfect-scrollbar";
import { useDispatch, useSelector } from "react-redux";
import ScrumBoardCard from "./ScrumBoardCard";

// styled components
const StyledItem = styled(MenuItem)({
  minWidth: 148,
  display: "flex",
  alignItems: "center",
  "& span": { paddingLeft: "16px" },
});

const StyledScrollBar = styled(Scrollbar)({
  height: 380,
  position: "relative",
  paddingLeft: "16px",
  paddingRight: "16px",
});

const StyledCard = styled(Card)({
  padding: "16px",
  width: "100%",
  borderRadius: 0,
  cursor: "pointer",
  position: "absolute",
  bottom: "0",
});

const BoardList = ({ data, handleCardClick }) => {
  const [cardTitleText, setCardTitleText] = useState("");
  const [columnTitleText, setColumnTitleText] = useState("");
  const [shouldOpenAddCard, setShouldOpenAddCard] = useState(false);
  const [shouldOpenTitleEditor, setShouldOpenTitleEditor] = useState(false);

  const dispatch = useDispatch();
  const { board } = useSelector((state) => state.scrumboard);

  const handleChange = (event) => {
    let targetName = event.target.name;
    let value = event.target.value;

    if (targetName === "cardTitleText") {
      if (event.key === "Enter" && !event.shiftKey) handleAddNewCard();
      else setCardTitleText(value);
    } else {
      if (event.key === "Enter" && !event.shiftKey) handleRenameList();
      else setColumnTitleText(value);
    }
  };

  const handleRenameList = () => {
    const payload = { boardId: board.id, listId: data.column.id, listTitle: columnTitleText };
    dispatch(renameListInBoard(payload));
    openTitleEditor(false);
  };

  const openTitleEditor = (value) => setShouldOpenTitleEditor(value);

  const openAddCard = (value) => setShouldOpenAddCard(value);

  const handleAddNewCard = () => {
    if (cardTitleText.trim() !== "") {
      const payload = { boardId: board.id, listId: data.column.id, cardTitle: cardTitleText };
      dispatch(addNewCardInList(payload));
      setCardTitleText("");
    }
  };

  const handleListDelete = () => {
    dispatch(deleteListFromBoard({ boardId: board.id, listId: data.column.id }));
  };

  useEffect(() => {
    let listTitle = data?.column?.title;
    if (listTitle) setColumnTitleText(listTitle);
  }, [data]);

  let { provided, snapshot, column } = data;

  const bgLightGrey = "rgba(0, 0, 0, 0.01)";

  return (
    <Card
      elevation={snapshot.isDragging ? 10 : 3}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={{ ...provided.draggableProps.style }}
      sx={{ mx: "12px", pt: 1, width: 288, position: "relative" }}
    >
      <Droppable droppableId={column.id} direction="vertical" type="card">
        {(provided) => (
          <Box ref={provided.innerRef} position="relative">
            <FlexBetween pb={1}>
              {shouldOpenTitleEditor ? (
                <ClickAwayListener onClickAway={() => openTitleEditor(false)}>
                  <TextField
                    size="small"
                    sx={{ pl: 2 }}
                    variant="outlined"
                    value={columnTitleText}
                    onChange={handleChange}
                    onKeyDown={handleChange}
                    name="columnTitleText"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton size="small" onClick={handleRenameList}>
                            <Icon fontSize="small">done</Icon>
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </ClickAwayListener>
              ) : (
                <H4
                  onClick={() => openTitleEditor(true)}
                  sx={{ py: "4px", pl: 2, flexGrow: 1, textTransform: "capitalize" }}
                >
                  {column.title}
                </H4>
              )}
              <MatxMenu
                horizontalPosition="right"
                menuButton={
                  <IconButton>
                    <Icon>more_vert</Icon>
                  </IconButton>
                }
              >
                <StyledItem>
                  <Icon> settings </Icon>
                  <span> Settings </span>
                </StyledItem>

                <StyledItem onClick={handleListDelete}>
                  <Icon> delete </Icon>
                  <span> Delete </span>
                </StyledItem>
              </MatxMenu>
            </FlexBetween>

            <StyledScrollBar>
              {column.cardList.map((card, index) => (
                <Draggable key={card.id} draggableId={card.id} index={index} type="card">
                  {(provided, snapshot) => (
                    <Card
                      sx={{ mb: 2, borderRadius: "4px", background: bgLightGrey }}
                      elevation={snapshot.isDragging ? 10 : 3}
                      onClick={() => handleCardClick({ ...card, listId: column.id })}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{ ...provided.draggableProps.style }}
                    >
                      <ScrumBoardCard card={card}></ScrumBoardCard>
                    </Card>
                  )}
                </Draggable>
              ))}
            </StyledScrollBar>
            {provided.placeholder}
          </Box>
        )}
      </Droppable>

      {/* ===================================================== */}
      {shouldOpenAddCard ? (
        <ClickAwayListener onClickAway={() => openAddCard(false)}>
          <StyledCard elevation={5}>
            <TextField
              size="small"
              sx={{ mb: "12px" }}
              variant="outlined"
              name="cardTitleText"
              value={cardTitleText}
              fullWidth
              onChange={handleChange}
              onKeyDown={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton size="small" onClick={() => openAddCard(false)}>
                      <Icon fontSize="small">clear</Icon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box display="flex" justifyContent="flex-end">
              <Button onClick={handleAddNewCard} variant="contained" color="primary">
                Add
              </Button>
            </Box>
          </StyledCard>
        </ClickAwayListener>
      ) : (
        <Box display="flex">
          <Button
            variant="contained"
            color="primary"
            onClick={() => openAddCard(true)}
            sx={{ flexGrow: 1, borderRadius: 0, fontWeight: "500" }}
          >
            + Add Card
          </Button>
        </Box>
      )}
    </Card>
  );
};

export default BoardList;
