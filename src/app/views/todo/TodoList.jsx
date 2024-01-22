import { Box, Button, Card, Icon, IconButton, MenuItem, styled } from "@mui/material";
import { MatxMenu } from "app/components";
import { FlexBetween } from "app/components/FlexBox";
import { H2 } from "app/components/Typography";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
import TodoItem from "./TodoItem";
import { getAllTodo, getAllTodoTag, reorderTodoList, updateTodoById } from "./TodoService";

const StyledCard = styled(Card)(({ theme }) => ({
  margin: "30px",
  position: "relative",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const ContentBox = styled(FlexBetween)(() => ({
  paddingTop: "8px",
  paddingBottom: "8px",
  background: "rgba(0, 0, 0, 0.01)",
}));

const TodoList = ({ query }) => {
  const navigate = useNavigate();
  const [tagList, setTagList] = useState([]);
  const [isAlive, setIsAlive] = useState(true);
  const [todoList, setTodoList] = useState([]);
  const [filteredTodoList, setFilteredTodoList] = useState([]);

  const getAllTodoAndTagList = useCallback(async () => {
    let [{ data: todoList }, { data: tagList }] = await Promise.all([
      getAllTodo(),
      getAllTodoTag(),
    ]);
    if (isAlive) {
      setFilteredTodoList(todoList);
      setTodoList(todoList);
      setTagList(tagList);
    }
  }, [isAlive]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const search = useCallback(
    debounce((query) => {
      query = query.trim().toLowerCase();
      if (query !== "") {
        let filteredTodoList = todoList.filter(
          (todo) => todo.title.toLowerCase().match(query) || todo.note.toLowerCase().match(query)
        );
        setFilteredTodoList([...filteredTodoList]);
      } else {
        setFilteredTodoList(todoList);
      }
    }, 250),
    [todoList]
  );

  useEffect(() => {
    getAllTodoAndTagList();
    return () => setIsAlive(false);
  }, [getAllTodoAndTagList]);

  useEffect(() => {
    search(query);
  }, [query, search]);

  const updateTodo = async (todo) => {
    const { data: updatedTodo } = await updateTodoById(todo);
    if (isAlive) {
      let list1 = todoList.map((item) => {
        if (item.id === updatedTodo.id) return updatedTodo;
        return item;
      });

      let list2 = filteredTodoList.map((item) => {
        if (item.id === updatedTodo.id) return updatedTodo;
        return item;
      });

      setTodoList([...list1]);
      setFilteredTodoList([...list2]);
    }
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const handleDragEnd = async (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    let todoList = reorder(filteredTodoList, result.source.index, result.destination.index);

    let { data } = await reorderTodoList(todoList);

    if (isAlive) {
      setFilteredTodoList(data);
      setTodoList(data);
    }
  };

  const filterTodoListByProperty = (queryField, queryValue) => {
    if (queryField !== "all") {
      let list = todoList.filter((todo) => todo[queryField] === queryValue);
      setFilteredTodoList([...list]);
    } else {
      setFilteredTodoList([...todoList]);
    }
  };

  const filterTodoListByTag = (tagId) => {
    if (tagId !== "all") {
      let list = todoList.filter((todo) => todo.tag.includes(tagId));
      setFilteredTodoList([...list]);
    } else {
      setFilteredTodoList([...todoList]);
    }
  };

  // New Drag and Drop data logic
  const [dragAbleItem, setDragAbleItem] = useState([]);
  const getItems = (count) =>
    count.map((k, i) => ({
      done: k.done,
      dueDate: k.dueDate,
      id: `${k.id}`,
      important: k.important,
      note: k.note,
      read: k.read,
      selected: k.selected,
      starred: k.starred,
      startDate: k.startDate,
      tag: k.tag,
      title: k.title,
    }));

  useEffect(() => {
    if (filteredTodoList.length > 0) {
      setDragAbleItem(getItems(filteredTodoList));
    }
  }, [filteredTodoList]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const tempItems = reorder(dragAbleItem, result.source.index, result.destination.index);
    setDragAbleItem(tempItems);
  };

  return (
    <StyledCard className="todo">
      <ContentBox>
        <div>
          <MatxMenu
            menuButton={
              <IconButton size="large">
                <Icon>arrow_drop_down</Icon>
              </IconButton>
            }
          >
            <MenuItem onClick={() => filterTodoListByProperty("all")}>All</MenuItem>
            <MenuItem onClick={() => filterTodoListByProperty("read", true)}>Read</MenuItem>
            <MenuItem onClick={() => filterTodoListByProperty("read", false)}>Unread</MenuItem>
            <MenuItem onClick={() => filterTodoListByProperty("done", true)}>Done</MenuItem>
            <MenuItem onClick={() => filterTodoListByProperty("done", false)}>Undone</MenuItem>
            <MenuItem onClick={() => filterTodoListByProperty("important", true)}>
              Important
            </MenuItem>
            <MenuItem onClick={() => filterTodoListByProperty("important", false)}>
              Unimportant
            </MenuItem>
            <MenuItem onClick={() => filterTodoListByProperty("starred", true)}>Starred</MenuItem>
            <MenuItem onClick={() => filterTodoListByProperty("starred", false)}>
              Unstarred
            </MenuItem>
          </MatxMenu>
          <MatxMenu
            menuButton={
              <IconButton size="large">
                <Icon>label</Icon>
              </IconButton>
            }
          >
            <MenuItem
              sx={{ textTransform: "capitalize" }}
              onClick={() => filterTodoListByTag("all")}
            >
              all
            </MenuItem>
            {tagList.map((tag) => (
              <MenuItem
                key={tag.id}
                sx={{ textTransform: "capitalize" }}
                onClick={() => filterTodoListByTag(tag.id)}
              >
                {tag.name}
              </MenuItem>
            ))}
          </MatxMenu>
        </div>

        <Box pr={2}>
          <Button variant="contained" color="primary" onClick={() => navigate("/todo/list/add")}>
            Create Todo
          </Button>
        </Box>
      </ContentBox>

      <div className="todo-list">
        {/* Previous Drag and Drop Code Start*/}
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {filteredTodoList.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={parseFloat(todo.id)} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={provided.draggableProps.style}
                      >
                        <TodoItem
                          tagList={tagList}
                          updateTodo={updateTodo}
                          key={index}
                          todo={todo}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        {/* Previous Drag and Drop Code End*/}

        <Box p={2}>
          <H2>New Drag and Drop Start From Here for testing</H2>
        </Box>

        {/* New Drag and Drop Code Start*/}
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {dragAbleItem.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TodoItem
                          tagList={tagList}
                          updateTodo={updateTodo}
                          key={index}
                          todo={item}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        {/* New Drag and Drop Code End*/}
      </div>
    </StyledCard>
  );
};

export default TodoList;
