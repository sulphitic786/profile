import { Box, Hidden, styled } from "@mui/material";
import { debounce } from "lodash";
import { useEffect, useMemo, useState } from "react";
import GridView from "./GridView";
import { getAllList } from "./ListService";
import ListTopbar from "./ListTopbar";
import ListView from "./ListView";

// styled component
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const AppList = () => {
  const [list, setList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [sliderValue, setSliderValue] = useState(50);
  const [viewMode, setViewMode] = useState("grid");

  const handleInputChange = (event) => {
    let { value } = event.target;
    search(value);
  };

  const search = useMemo(
    () =>
      debounce((query) => {
        let tempList = originalList.filter((item) =>
          item.projectName.toLowerCase().match(query.toLowerCase())
        );
        setList([...tempList]);
      }, 200),
    [originalList]
  );

  const handleSldierChange = (_, value) => setSliderValue(value);

  const handleViewChange = (view) => setViewMode(view);

  useEffect(() => {
    getAllList().then((response) => {
      setOriginalList(response.data);
      setList(response.data);
    });
  }, []);

  return (
    <Container className="list">
      <Box mb={2}>
        <ListTopbar
          viewMode={viewMode}
          handleViewChange={handleViewChange}
          handleInputChange={handleInputChange}
          handleSldierChange={handleSldierChange}
          sliderValue={sliderValue}
        ></ListTopbar>
      </Box>

      <Hidden xsDown>
        {viewMode === "list" ? (
          <ListView list={list}></ListView>
        ) : (
          <GridView list={list} sliderValue={sliderValue}></GridView>
        )}
      </Hidden>

      <Hidden smUp>
        <GridView list={list} sliderValue={sliderValue}></GridView>
      </Hidden>
    </Container>
  );
};

export default AppList;
