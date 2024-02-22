import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  Grid,
  Hidden,
  Icon,
  IconButton,
  MenuItem,
  styled,
  TextField,
  Tooltip
} from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MatxMenu } from "../../components";
import { themeShadows } from "../../components/MatxTheme/themeColors";
import { Component } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TagDialog from "./TagDialog";
import { addTodo, deleteTodo, getAllTodoTag, getTodoById, updateTodoById } from "./TodoService";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  zIndex: 2000,
  background: "#fff",
  borderRadius: "4px",
  boxShadow: themeShadows[5],
  [theme.breakpoints.down("sm")]: { margin: "16px" }
}));

const FlexBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center"
});

const JustifyBox = styled(FlexBox)({
  paddingTop: "8px",
  paddingBottom: "8px",
  justifyContent: "space-between",
  background: "rgba(0, 0, 0, 0.01)"
});

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();

  return <WrappedComponent {...props} params={params} navigate={navigate} />;
};

class TodoEditor extends Component {
  state = {
    todo: {
      title: "",
      note: "",
      done: false,
      read: false,
      starred: false,
      important: false,
      startDate: new Date(),
      dueDate: new Date(),
      tag: []
    },
    tagList: [],
    shouldOpenTagDialog: false
  };

  componentDidMount() {
    let { id } = this.props.params;

    getAllTodoTag().then(({ data: tagList }) => {
      if (id !== "add") {
        getTodoById(id).then(({ data }) => {
          if (!data) {
            this.props.navigate("/todo/list");
            return;
          }
          this.setState({ todo: { ...data }, tagList: [...tagList] });
        });
      } else {
        this.setState({ tagList });
      }
    });
  }

  addNewTodo = () => {
    let id = this.state.tagList.length + 1;
    addTodo({ ...this.state.todo, id }).then(() => {
      this.props.navigate("/todo/list");
    });
  };

  updateTodo = (todo) => {
    updateTodoById(todo);
    this.setState({
      todo: { ...this.state.todo, ...todo }
    });
  };

  reloadTagList = () => {
    getAllTodoTag().then(({ data }) => {
      this.setState({ tagList: [...data] });
    });
  };

  addTagInTodo = (id) => {
    let { tag } = this.state.todo;
    if (!tag.includes(id)) {
      tag.push(id);
      this.setState({
        todo: { ...this.state.todo, tag }
      });
    }
  };

  handleTagDelete = (tagId) => {
    let { tag: tagList = [] } = this.state.todo;
    tagList = tagList.filter((id) => id !== tagId);
    this.setState(
      {
        todo: { ...this.state.todo, tag: [...tagList] }
      },
      () => updateTodoById({ ...this.state.todo })
    );
  };

  handleTodoDelete = () => {
    deleteTodo({ ...this.state.todo }).then(() => {
      this.props.navigate("/todo/list");
    });
  };

  handleChange = (event) => {
    event.persist();
    this.setState({
      todo: {
        ...this.state.todo,
        [event.target.name]: event.target.value
      }
    });
  };

  handleDateChange = (filedName, date) => {
    this.setState(
      this.setState({
        todo: {
          ...this.state.todo,
          [filedName]: date
        }
      })
    );
  };

  handleSubmit = (event) => {
    let { id: todoId } = this.props.params;

    if (todoId === "add") {
      this.addNewTodo();
    } else {
      updateTodoById({ ...this.state.todo }).then(() => {
        this.props.navigate("/todo/list");
      });
    }
  };

  handleTagDialogToggle = () => {
    this.setState({
      shouldOpenTagDialog: !this.state.shouldOpenTagDialog
    });
  };

  render() {
    let {
      title,
      note,
      done,
      read,
      starred,
      important,
      startDate,
      dueDate,
      tag: tagIdList = []
    } = this.state.todo;
    let { tagList } = this.state;

    return (
      <Container>
        <JustifyBox>
          <FlexBox>
            <Link to="/todo/list">
              <IconButton>
                <Icon>arrow_back</Icon>
              </IconButton>
            </Link>

            <Hidden smDown>
              <FormControlLabel
                sx={{ ml: 1 }}
                onChange={() => this.updateTodo({ ...this.state, done: !done })}
                control={<Checkbox checked={done} />}
                label={`Mark As ${done ? "Und" : "D"}one`}
              />
            </Hidden>
          </FlexBox>

          <Box display="flex" flexWrap="wrap">
            <Tooltip title={`Mark As ${read ? "Unr" : "R"}ead`} fontSize="large">
              <IconButton onClick={() => this.updateTodo({ ...this.state, read: !read })}>
                <Icon>{read ? "drafts" : "markunread"}</Icon>
              </IconButton>
            </Tooltip>

            <Tooltip title={`Mark As ${important ? "Uni" : "I"}mportant`} fontSize="large">
              <IconButton onClick={() => this.updateTodo({ ...this.state, important: !important })}>
                <Icon color={important ? "error" : "inherit"}>
                  {important ? "error" : "error_outline"}
                </Icon>
              </IconButton>
            </Tooltip>

            <Tooltip title={`Mark As ${starred ? "Uns" : "S"}tarred`} fontSize="large">
              <IconButton onClick={() => this.updateTodo({ ...this.state, starred: !starred })}>
                <Icon color={starred ? "secondary" : "inherit"}>
                  {starred ? "star" : "star_outline"}
                </Icon>
              </IconButton>
            </Tooltip>

            <Hidden smDown>
              <Tooltip title="Manage tags" fontSize="large">
                <IconButton onClick={this.handleTagDialogToggle}>
                  <Icon>library_add</Icon>
                </IconButton>
              </Tooltip>
            </Hidden>

            <MatxMenu
              menuButton={
                <Tooltip title="Add tags" fontSize="large">
                  <IconButton>
                    <Icon>label</Icon>
                  </IconButton>
                </Tooltip>
              }
            >
              {this.state.tagList.map((tag) => (
                <MenuItem
                  key={tag.id}
                  sx={{ textTransform: "capitalize" }}
                  onClick={() => this.addTagInTodo(tag.id)}
                >
                  {tag.name}
                </MenuItem>
              ))}
            </MatxMenu>

            <Tooltip title="Delete" fontSize="large">
              <IconButton onClick={this.handleTodoDelete}>
                <Icon>delete_outline</Icon>
              </IconButton>
            </Tooltip>
          </Box>
        </JustifyBox>

        <Box p={2}>
          {tagIdList.length ? (
            <Box mb={2}>
              {tagIdList.map((tagId) => {
                let tagName = (tagList.find((tag) => tag.id === tagId) || {}).name;
                if (!tagName) return null;
                else
                  return (
                    <Chip
                      key={tagId}
                      label={tagName}
                      onDelete={() => this.handleTagDelete(tagId)}
                      sx={{ mr: 1, textTransform: "capitalize" }}
                    />
                  );
              })}
            </Box>
          ) : null}

          <form onSubmit={this.handleSubmit}>
            <TextField
              fullWidth
              type="text"
              name="title"
              value={title}
              label="Title*"
              onChange={this.handleChange}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              type="text"
              name="note"
              value={note}
              multiline={true}
              label="Put your notes*"
              onChange={this.handleChange}
              sx={{ mb: 2 }}
            />

            <Box mb={2}>
              <Grid container spacing={2}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  {/* <DatePicker
                    value={new Date(startDate)}
                    onChange={(date) => this.handleDateChange("startDate", date)}
                    renderInput={(props) => (
                      <TextField
                        {...props}
                        fullWidth
                        variant="standard"
                        id="mui-pickers-date"
                        label="Start Date*"
                      />
                    )}
                  /> */}
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                  {/* <DatePicker
                    value={new Date(dueDate)}
                    onChange={(date) => this.handleDateChange('dueDate', date)}
                    renderInput={(props) => (
                      <TextField
                        {...props}
                        fullWidth
                        variant="standard"
                        id="mui-pickers-date"
                        label="End Date*"
                      />
                    )}
                  /> */}
                </Grid>
              </Grid>
            </Box>

            <Link to="/todo/list">
              <Button variant="outlined" color="secondary" sx={{ mr: 2 }} type="submit">
                cancel
              </Button>
            </Link>
            <Button color="primary" variant="contained" type="submit">
              save
            </Button>
          </form>
        </Box>

        <TagDialog
          reloadTagList={this.reloadTagList}
          open={this.state.shouldOpenTagDialog}
          handleClose={this.handleTagDialogToggle}
        />
      </Container>
    );
  }
}

export default withRouter(TodoEditor);
