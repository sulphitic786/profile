import {
  Box,
  Card,
  Checkbox,
  Chip,
  FormControlLabel,
  Icon,
  IconButton,
  MenuItem,
  styled,
  useTheme,
} from "@mui/material";
import { MatxMenu } from "app/components";
import { Paragraph } from "app/components/Typography";
import { Link } from "react-router-dom";

const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const FlexWrap = styled(FlexBox)({
  flexWrap: "wrap",
});

const StyledLink = styled(Link)({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
});

const TodoItem = ({ todo = { tag: [] }, tagList, updateTodo }) => {
  const { palette } = useTheme();
  const textMuted = palette.text.secondary;

  return (
    <Card sx={{ borderRadius: 0 }} elevation={1}>
      <FlexWrap p={2}>
        <StyledLink to={`/todo/list/${todo.id}`}>
          <Icon sx={{ cursor: "move" }}>open_with</Icon>
          <Box ml={2}>
            <Paragraph sx={{ mb: 2 }}>{todo.title}</Paragraph>
            <Paragraph sx={{ mb: "12px", color: textMuted }}>{todo.note}</Paragraph>
            {todo.tag.map((tagId, index) => {
              let tagName = (tagList.find((tag) => tag.id === tagId) || {}).name;
              if (!tagName) return null;
              else {
                return (
                  <Chip
                    key={index}
                    sx={{ mr: "12px" }}
                    label={tagList.find((tag) => tag.id === tagId).name}
                  />
                );
              }
            })}
          </Box>
        </StyledLink>

        <FlexWrap>
          <IconButton onClick={() => updateTodo({ ...todo, important: !todo.important })}>
            <Icon color={todo.important ? "error" : "inherit"}>
              {todo.important ? "error" : "error_outline"}
            </Icon>
          </IconButton>

          <IconButton onClick={() => updateTodo({ ...todo, starred: !todo.starred })}>
            <Icon color={todo.starred ? "secondary" : "inherit"}>
              {todo.starred ? "star" : "star_outline"}
            </Icon>
          </IconButton>

          <MatxMenu
            menuButton={
              <IconButton>
                <Icon>more_vert</Icon>
              </IconButton>
            }
          >
            <MenuItem>
              <FormControlLabel
                onChange={() => updateTodo({ ...todo, done: !todo.done })}
                control={<Checkbox checked={todo.done} />}
                label={`Mark As ${todo.done ? "Und" : "D"}one`}
              />
            </MenuItem>

            <MenuItem>
              <FormControlLabel
                onChange={() => updateTodo({ ...todo, read: !todo.read })}
                control={<Checkbox checked={todo.read} />}
                label={`Mark As ${todo.read ? "Unr" : "R"}ead`}
              />
            </MenuItem>
          </MatxMenu>
        </FlexWrap>
      </FlexWrap>
    </Card>
  );
};

export default TodoItem;
