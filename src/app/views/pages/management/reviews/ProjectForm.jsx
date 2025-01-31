import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Icon,
  MenuItem,
  Stack,
  styled,
  TextField
} from "@mui/material";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import "flatpickr/dist/themes/material_green.css";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Flatpickr from "react-flatpickr";
import * as yup from "yup";
import { fireStore } from "../../../../../config";
import { MatxLoading } from "../../../../components";
import { FlexAlignCenter, FlexBox } from "../../../../components/FlexBox";
import { H4 } from "../../../../components/Typography";
import { useAlert } from "../../../../contexts/AlertContext";
import { convertHexToRGB, getIsoDate, removeTimeFromDate } from "../../../../utils/utils";

// styled components
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

const StyledTextField = styled(TextField)({ marginBottom: "16px" });
const Form = styled("form")({ paddingLeft: "16px", paddingRight: "16px" });

const DropZone = styled(FlexAlignCenter)(({ isDragActive, theme }) => ({
  height: 160,
  width: "100%",
  cursor: "pointer",
  borderRadius: "4px",
  marginBottom: "16px",
  transition: "all 350ms ease-in-out",
  border: `2px dashed rgba(${convertHexToRGB(theme.palette.text.primary)}, 0.3)`,
  "&:hover": {
    background: `rgb(${convertHexToRGB(theme.palette.text.primary)}, 0.2) !important`
  },
  background: isDragActive ? "rgb(0, 0, 0, 0.15)" : "rgb(0, 0, 0, 0.01)"
}));

const ProjectForm = (props) => {
  const [imageList, setImageList] = useState([]);
  const [dateRange, setDateRange] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: { "image/*": [".jpg", ".png"] },
    maxFiles: 1
  });
  const { showAlert } = useAlert();
  const storage = getStorage(); // Initialize Firebase Storage
  let formData = props?.updateData;

  console.log("formData", formData);

  const productSchema = yup.object().shape({
    name: yup.string().required("Name is required!"),
    // technology: yup.string().required("Technology (Like -> Html, Css) is required!"),
    // category: yup.string().required("Category is required!"),
    status: yup.string().required("Status is required!"),
    message: yup.string().required("Description is required!")
  });

  let initialValues = {
    name: formData?.name || "",
    live_url: formData?.image || "",
    location: formData?.location || "",
    clientSource: formData?.clientSource || "",
    status: formData?.status || "active",
    message: formData?.message || "",
    rating: formData?.rating || "",
    date: formData?.date || "",
    created_at: formData?.created_at || getIsoDate(),
    updated_at: getIsoDate()

    // client_email: formData?.client_email || "",
    // category: formData?.category || "",
    // technology: formData?.technology || "",
  };

  useEffect(() => {
    if (formData?.date) {
      setDateRange(formData?.date);
    }
  }, [formData]);

  useEffect(() => {
    setImageList(acceptedFiles);
  }, [acceptedFiles]);

  const handleSubmit = async (values) => {
    values.date = removeTimeFromDate(dateRange);
    console.log("Add values", values);
    if (props?.action == "update") {
      updateReview(values);
    } else {
      addReview(values);
    }
  };
  const addReview = async (values) => {
    setLoading(true);
    try {
      const downloadURLs = []; // Array to store download URLs of uploaded images
      await Promise.all(
        acceptedFiles.map(async (file) => {
          const storageRef = ref(storage, "project-files/" + file.name);
          await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(storageRef); // Get download URL for the uploaded image and add it to the array
          downloadURLs.push(downloadURL);
        })
      );

      const preparedData = { ...values, image: downloadURLs[0] ?? values.live_url };
      await addDoc(collection(fireStore, "reviews"), preparedData);
      showAlert("success", "Review data added successfully!");
      setLoading(false);
      props.fetchData();
      props.back();
    } catch (error) {
      setLoading(false);
      showAlert("error", "Error while adding review data!");
      console.error("Error uploading images:", error);
    }
  };

  const updateReview = async (values) => {
    setLoading(true);
    try {
      const downloadURLs = []; // Array to store download URLs of uploaded images
      // Upload images if new images are selected
      if (acceptedFiles?.length) {
        await Promise.all(
          acceptedFiles.map(async (file) => {
            const storageRef = ref(storage, "project-files/" + file.name);
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef); // Get download URL for the uploaded image and add it to the array
            downloadURLs.push(downloadURL);
          })
        );
      }

      // Update document in Firestore
      const projectRef = doc(fireStore, "reviews", formData.id); // Assuming you have the ID of the project to update
      await updateDoc(projectRef, {
        ...values, // Update existing values
        image: downloadURLs[0] ?? values.live_url
      });
      setLoading(false);
      showAlert("success", "Review data updated successfully!");
      props.fetchData();
      props.back();
    } catch (error) {
      setLoading(false);
      showAlert("error", "Error while updating review data!");
      console.error("Error uploading images:", error);
    }
  };

  return (
    <Container>
      {loading && <MatxLoading />}
      <Card elevation={3}>
        <Box p={2} display="flex">
          <H4>{props?.action == "update" ? "Update Project" : "Add New Review"}</H4>
        </Box>
        <Divider sx={{ mb: 3 }} />

        <Formik
          onSubmit={handleSubmit}
          // enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={productSchema}
        >
          {({ values, errors, touched, resetForm, handleChange, handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <StyledTextField
                    fullWidth
                    name="name"
                    label="Name *"
                    size="small"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name || ""}
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}
                  />

                  <Flatpickr
                    style={{ width: "100%", padding: "10px" }}
                    options={{ dateFormat: "Y-m-d" }} // Ensures a single date selection
                    className="form-control mb-3"
                    name="project_duration"
                    placeholder="Review Date"
                    value={dateRange}
                    onChange={(selectedDates) => {
                      const selectedDate = selectedDates[0]?.toISOString();
                      setDateRange(selectedDate);
                    }}
                  />

                  {/* <StyledTextField
                    select
                    sx={{ mt: 2 }}
                    fullWidth
                    size="small"
                    name="status"
                    label="Status *"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.status || ""}
                    error={Boolean(touched.status && errors.status)}
                    helperText={touched.status && errors.status}
                  >
                    {statusList.sort().map((cat) => (
                      <MenuItem value={cat} key={cat}>
                        {cat}
                      </MenuItem>
                    ))}
                  </StyledTextField> */}

                  {/* <StyledTextField
                    fullWidth
                    rows={2}
                    multiline
                    size="small"
                    name="technology"
                    variant="outlined"
                    label="Technology or Language *"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.technology || ""}
                    error={Boolean(touched.technology && errors.technology)}
                    helperText={touched.technology && errors.technology}
                  /> */}

                  {acceptedFiles.length < 1 ? (
                    <StyledTextField
                      fullWidth
                      sx={{ mt: 2 }}
                      size="small"
                      name="live_url"
                      variant="outlined"
                      label="Image Url"
                      onChange={handleChange}
                      value={values.live_url || ""}
                    />
                  ) : (
                    ""
                  )}

                  {values.live_url == "" ? (
                    <DropZone sx={{ mt: 1 }} {...getRootProps()}>
                      <input {...getInputProps()} />
                      <FlexBox alignItems="center" flexDirection="column">
                        <Icon sx={{ color: "text.secondary", fontSize: "48px" }}>publish</Icon>
                        {imageList.length ? (
                          <span>{imageList.length} image selected</span>
                        ) : (
                          <span>Drop Profile Image</span>
                        )}
                      </FlexBox>
                    </DropZone>
                  ) : (
                    ""
                  )}
                </Grid>

                <Grid item sm={6} xs={12}>
                  {/* <StyledTextField
                    select
                    fullWidth
                    size="small"
                    name="category"
                    label="Category *"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.category || ""}
                    error={Boolean(touched.category && errors.category)}
                    helperText={touched.category && errors.category}
                  >
                    {categoryList.sort().map((cat) => (
                      <MenuItem value={cat} key={cat}>
                        {cat}
                      </MenuItem>
                    ))}
                  </StyledTextField> */}

                  <StyledTextField
                    select
                    fullWidth
                    size="small"
                    name="status"
                    label="Status *"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.status || ""}
                    error={Boolean(touched.status && errors.status)}
                    helperText={touched.status && errors.status}
                  >
                    {statusList.sort().map((cat) => (
                      <MenuItem value={cat} key={cat}>
                        {cat}
                      </MenuItem>
                    ))}
                  </StyledTextField>

                  <StyledTextField
                    fullWidth
                    name="clientSource"
                    label="Client Source"
                    size="small"
                    variant="outlined"
                    onChange={handleChange}
                    value={values?.clientSource || ""}
                    // onBlur={handleBlur}
                    // error={Boolean(touchedclientSource && errorsclientSource)}
                    // helperText={touchedclientSource && errorsclientSource}
                  />

                  <StyledTextField
                    fullWidth
                    name="location"
                    size="small"
                    // type="number"
                    label="Client Region"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.location || ""}
                    // onBlur={handleBlur}
                    // error={Boolean(touched.location && errors.location)}
                    // helperText={touched.location && errors.location}
                  />

                  {/* <StyledTextField
                    fullWidth
                    size="small"
                    type="email"
                    name="client_email"
                    label="Client Email"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.client_email || ""}
                    onBlur={handleBlur}
                    error={Boolean(touched.client_email && errors.client_email)}
                    helperText={touched.client_email && errors.client_email}
                  /> */}

                  <StyledTextField
                    fullWidth
                    size="small"
                    type="number"
                    name="rating"
                    label="Rating"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.rating || ""}
                    inputProps={{ min: 0, max: 5 }}
                    // onBlur={handleBlur}
                    // error={Boolean(touched.rating && errors.rating)}
                    // helperText={touched.rating && errors.rating}
                  />

                  <StyledTextField
                    fullWidth
                    rows={5}
                    multiline
                    size="small"
                    name="message"
                    variant="outlined"
                    label="Review *"
                    value={values.message || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.message && errors.message)}
                    helperText={touched.message && errors.message}
                  />
                </Grid>
              </Grid>
              <Divider sx={{ mb: 2 }} />
              <Stack
                sx={{ mb: 2 }}
                direction="row"
                className="mb-3"
                spacing={2}
                justifyContent="flex-end"
              >
                <Button variant="outlined" color="secondary" onClick={() => props.back()}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  justifyContent="flex-end"
                  sx={{ mb: 2, px: 6 }}
                >
                  Submit
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Card>
    </Container>
  );
};

const statusList = ["active", "inactive"];
const categoryList = [
  "Dashboard",
  "E-commerce",
  "Blogs",
  "Portfolios",
  "Business",
  "Educational",
  "Personal",
  "Non-profit and Charity",
  "Government",
  "Travel and Tourism",
  "Real Estate",
  "Technology",
  "Health and Wellness",
  "News and Information",
  "Media and Entertainment",
  "Social Networking"
];
export default ProjectForm;
