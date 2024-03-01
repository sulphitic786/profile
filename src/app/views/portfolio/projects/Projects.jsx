import { Box, Hidden, styled } from "@mui/material";
import { debounce } from "lodash";
import { useEffect, useMemo, useState } from "react";
import GridView from "./GridView";
import ListTopbar from "./ListTopbar";
import ListView from "./ListView";
import { MatxLoading } from "../../../components";
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { fireStore } from "../../../../config";
import ProjectViewer from "./ProjectViewer";
import { useAlert } from "../../../contexts/AlertContext";

// styled component
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" }
}));

const Projects = () => {
  const [list, setList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [sliderValue, setSliderValue] = useState(50);
  const [viewMode, setViewMode] = useState("grid");
  const [loading, setLoading] = useState(false);
  const { showAlert } = useAlert();

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getDocs(collection(fireStore, "projects"));
      const dataFromFirebase = response?.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setLoading(false);
      setList(dataFromFirebase);
      setOriginalList(dataFromFirebase);
      // showAlert("success", "Data fetch successfully.");
    } catch (error) {
      setLoading(false);
      showAlert("error", "Error while fetching projects data.");
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (event) => {
    let { value } = event.target;
    search(value);
  };

  const search = useMemo(
    () =>
      debounce((query) => {
        let tempList = originalList.filter((item) =>
          item.name.toLowerCase().match(query?.toLowerCase())
        );
        setList([...tempList]);
      }, 200),
    [originalList]
  );

  const handleSldierChange = (_, value) => setSliderValue(value);

  const handleViewChange = (view) => setViewMode(view);

  return (
    <Container className="list">
      {loading && <MatxLoading />}
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

export default Projects;
