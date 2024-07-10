import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Icon,
  MenuItem,
  styled,
  TextField,
  Stack
} from "@mui/material";
import { Breadcrumb } from "../../../../components";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { fireStore } from "../../../../../config";
import { FlexAlignCenter, FlexBox } from "../../../../components/FlexBox";
import { H4 } from "../../../../components/Typography";
import { convertHexToRGB, removeTimeFromDate, getIsoDate } from "../../../../utils/utils";
import { Formik } from "formik";
import { useAlert } from "../../../../contexts/AlertContext";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import { useNavigate, useLocation } from "react-router-dom";
import * as yup from "yup";
import { MatxLoading } from "../../../../components";

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
    accept: { "image/*": [".jpg", ".png"] }
  });
  const { showAlert } = useAlert();
  const storage = getStorage(); // Initialize Firebase Storage
  let formData = props?.updateData;

  const productSchema = yup.object().shape({
    name: yup.string().required("Name is required!"),
    technology: yup.string().required("Technology (Like -> Html, Css) is required!"),
    category: yup.string().required("Category is required!"),
    status: yup.string().required("Status is required!"),
    description: yup.string().required("Description is required!")
  });

  let initialValues = {
    name: formData?.name || "",
    live_url: formData?.live_url || "",
    client: formData?.client || "",
    client_region: formData?.client_region || "",
    client_email: formData?.client_email || "",
    client_phone: formData?.client_phone || "",
    description: formData?.description || "",
    category: formData?.category || "",
    status: formData?.status || "",
    technology: formData?.technology || "",
    images: formData?.images || [],
    project_duration: formData?.project_duration || [],
    description: formData?.description || "",
    created_at: formData?.created_at || getIsoDate(),
    updated_at: getIsoDate()
  };

  useEffect(() => {
    if (formData?.project_duration) {
      setDateRange(formData?.project_duration);
    }
  }, [formData]);

  useEffect(() => {
    setImageList(acceptedFiles);
  }, [acceptedFiles]);

  const handleSubmit = async (values) => {
    values.project_duration = dateRange;
    if (props?.action == "update") {
      updateProject(values);
    } else {
      addProject(values);
    }
  };
  const addProject = async (values) => {
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

      // Store image URLs and additional data in Firestore
      const preparedData = { ...values, images: downloadURLs };
      await addDoc(collection(fireStore, "projects"), preparedData);
      showAlert("success", "Project data added successfully!");
      setLoading(false);
      props.fetchData();
      props.back();
    } catch (error) {
      setLoading(false);
      showAlert("error", "Error while adding project data!");
      console.error("Error uploading images:", error);
    }
  };

  const updateProject = async (values) => {
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
      const projectRef = doc(fireStore, "projects", formData.id); // Assuming you have the ID of the project to update
      await updateDoc(projectRef, {
        ...values, // Update existing values
        images: downloadURLs.length ? downloadURLs : values.images // If new images are uploaded, update images with new URLs, otherwise keep existing images
      });
      setLoading(false);
      showAlert("success", "Project data updated successfully!");
      props.fetchData();
      props.back();
    } catch (error) {
      setLoading(false);
      showAlert("error", "Error while updating project data!");
      console.error("Error uploading images:", error);
    }
  };

  return (
    <Container>
      {loading && <MatxLoading />}
      <Card elevation={3}>
        <Box p={2} display="flex">
          <H4>{props?.action == "update" ? "Update Project" : "Add New Project"}</H4>
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

                  <StyledTextField
                    fullWidth
                    size="small"
                    name="live_url"
                    variant="outlined"
                    label="Live Url"
                    onChange={handleChange}
                    value={values.live_url || ""}
                  />

                  <Flatpickr
                    style={{ width: "100%", padding: "10px" }}
                    options={{ mode: "range" }}
                    className="form-control mb-3"
                    name="project_duration"
                    placeholder="Project Duration"
                    value={dateRange}
                    onChange={(selectedDates) => {
                      const startDate = selectedDates[0]?.toISOString();
                      const endDate = selectedDates[1]?.toISOString();
                      setDateRange([startDate, endDate]);
                    }}
                  />

                  <StyledTextField
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
                  </StyledTextField>

                  <StyledTextField
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
                  />

                  <DropZone {...getRootProps()}>
                    <input {...getInputProps()} />
                    <FlexBox alignItems="center" flexDirection="column">
                      <Icon sx={{ color: "text.secondary", fontSize: "48px" }}>publish</Icon>
                      {imageList.length ? (
                        <span>{imageList.length} images were selected</span>
                      ) : (
                        <span>Drop project images</span>
                      )}
                    </FlexBox>
                  </DropZone>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <StyledTextField
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
                  </StyledTextField>

                  <StyledTextField
                    fullWidth
                    name="client"
                    label="Client"
                    size="small"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.client || ""}
                    // onBlur={handleBlur}
                    // error={Boolean(touched.client && errors.client)}
                    // helperText={touched.client && errors.client}
                  />

                  <StyledTextField
                    fullWidth
                    name="client_region"
                    size="small"
                    // type="number"
                    label="Client Region"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.client_region || ""}
                    // onBlur={handleBlur}
                    // error={Boolean(touched.client_region && errors.client_region)}
                    // helperText={touched.client_region && errors.client_region}
                  />

                  <StyledTextField
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
                  />

                  <StyledTextField
                    fullWidth
                    size="small"
                    type="number"
                    name="client_phone"
                    label="Client Phone"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.client_phone || ""}
                    // onBlur={handleBlur}
                    // error={Boolean(touched.client_phone && errors.client_phone)}
                    // helperText={touched.client_phone && errors.client_phone}
                  />

                  <StyledTextField
                    fullWidth
                    rows={5}
                    multiline
                    size="small"
                    name="description"
                    variant="outlined"
                    label="Description *"
                    value={values.description || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.description && errors.description)}
                    helperText={touched.description && errors.description}
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
