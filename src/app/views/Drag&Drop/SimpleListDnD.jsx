import { useTheme } from "@mui/material";
import { themeShadows } from "app/components/MatxTheme/themeColors";
import { convertHexToRGB } from "app/utils/utils";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

// fake data generator
const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle, palette) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  boxShadow: themeShadows[4],
  borderRadius: "4px",
  // change background colour if dragging
  background: isDragging
    ? `rgba(${convertHexToRGB(palette.background.default)},1)`
    : `rgba(${convertHexToRGB(palette.background.paper)},1)`,

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver, palette) => ({
  borderRadius: "4px",
  background: isDraggingOver
    ? "rgba(0,0,0, .1)"
    : `rgba(${convertHexToRGB(palette.background.default)},1)`,
  padding: grid,
  width: 250,
});

const SimpleListDnD = () => {
  const { palette } = useTheme();

  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(getItems(6));
  }, []);

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const tempItems = reorder(item, result.source.index, result.destination.index);
    setItem(tempItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver, palette)}
          >
            {item.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style,
                      palette
                    )}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default SimpleListDnD;
