import { Box, Button, Dialog, TextField, useTheme } from "@mui/material";
import { FlexBetween, FlexBox } from "app/components/FlexBox";
import { Span } from "app/components/Typography";
import { generateRandomId } from "app/utils/utils";
import { useCallback, useEffect, useState } from "react";
import { addNewTag, deleteTag, getAllTodoTag } from "./TodoService";

const TagDialog = ({ open, handleClose }) => {
  const [name, setName] = useState("");
  const [tagList, setTagList] = useState([]);
  const [isAlive, setIsAlive] = useState(true);

  const loadTagList = useCallback(async () => {
    let { data } = await getAllTodoTag();
    if (isAlive) setTagList(data);
  }, [isAlive]);

  useEffect(() => {
    loadTagList();
    return () => setIsAlive(false);
  }, [loadTagList]);

  useEffect(() => {
    return () => setIsAlive(false);
  }, []);

  const handleChange = (event) => {
    if (event.key === "Enter") {
      handleAddNewTag();
    } else {
      setName(event.target.value);
    }
  };

  const handleAddNewTag = async (event) => {
    if (name.trim() !== "") {
      let { data: tag } = await addNewTag({
        id: generateRandomId(),
        name: name.trim(),
      });

      if (isAlive) {
        let list = [...tagList];
        list.push(tag);

        setTagList(list);
        setName("");
      }
    }
  };

  const handleDeleteTag = async (id) => {
    await deleteTag({ id, name });
    if (isAlive) {
      let list = tagList.filter((tag) => tag.id !== id);
      setTagList([...list]);
    }
  };

  const { palette } = useTheme();
  const bgError = palette.error.main;

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="xs">
      <Box px={2} py={3}>
        <FlexBox alignItems="center">
          <TextField
            value={name}
            size="small"
            label="New tag*"
            variant="outlined"
            onChange={handleChange}
            onKeyDown={handleChange}
            sx={{ flexGrow: 1 }}
          />
          <div>
            <Button onClick={handleAddNewTag} variant="contained" color="primary">
              Add
            </Button>
          </div>
        </FlexBox>

        <Box pt={2}>
          {tagList.map((tag, index) => (
            <FlexBetween my={1} key={tag.id}>
              <span>{index + 1}</span>
              <Span sx={{ textTransform: "capitalize" }}>{tag.name}</Span>
              <Button
                onClickCapture={() => handleDeleteTag(tag.id)}
                variant="contained"
                sx={{ background: bgError }}
              >
                Delete
              </Button>
            </FlexBetween>
          ))}
        </Box>

        <Box pt={2} textAlign="right">
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Close
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default TagDialog;
