import { Box, Icon, styled, TextField, useTheme } from "@mui/material";
import { useState } from "react";
import TodoList from "./TodoList";

const AppTodoRoot = styled("div")(({ theme }) => ({
  "& .searchBoxHolder": {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: "calc(220px - 94px + 30px)",
    [theme.breakpoints.down("sm")]: { height: "calc(220px - 94px -16px + 30px)" },
  },
  "& .searchBox": {
    width: "calc(100% - 60px)",
    [theme.breakpoints.down("sm")]: { width: "calc(100% - 32px)" },
  },
  "& .todoContent": { marginTop: -94 },
}));

const AppTodo = () => {
  const [query, setQuery] = useState("");
  const handleQueryChange = (event) => setQuery(event.target.value);

  const { palette } = useTheme();
  const bgPrimary = palette.primary.main;

  return (
    <AppTodoRoot>
      <Box height={220} sx={{ background: bgPrimary }}>
        <div className="searchBoxHolder">
          <div className="searchBox">
            <TextField
              fullWidth
              name="query"
              value={query}
              size="medium"
              variant="outlined"
              InputProps={{
                startAdornment: <Icon sx={{ mr: "12px" }}>search</Icon>,
                style: {
                  outline: "none",
                  borderRadius: 300,
                  background: "white",
                },
              }}
              onChange={handleQueryChange}
            />
          </div>
        </div>
      </Box>

      <div className="todoContent">
        <TodoList query={query} />
      </div>
    </AppTodoRoot>
  );
};

export default AppTodo;
