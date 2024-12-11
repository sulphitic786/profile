import { useState, Fragment, useEffect } from "react";
import { CameraAlt, DateRange, KeyboardArrowDown, MoreHoriz } from "@mui/icons-material";
import { Box, Button, Card, Divider, Grid, styled, TextField, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import AvatarBadge from "../../components/AvatarBadge";
import { FlexBetween, FlexBox } from "../../components/FlexBox";
import Bratislava from "../../components/icons/Bratislava";
import MapMarkerIcon from "../../components/icons/MapMarkerIcon";
import { H4, H5, Small } from "../../components/Typography";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAlert } from "../../contexts/AlertContext";
import { MatxLoading } from "../../components";

import { fireStore } from "../../../config";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";

// styled components
const ContentWrapper = styled(Box)(({ theme }) => ({
  zIndex: 1,
  marginTop: 55,
  position: "relative",
  [theme.breakpoints.down("sm")]: { paddingLeft: 20, paddingRight: 20 }
}));

const CoverPicWrapper = styled(Box)(() => ({
  top: 0,
  left: 0,
  height: 125,
  width: "100%",
  overflow: "hidden",
  position: "absolute",
  backgroundColor: "#C6D3ED"
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  width: 120,
  height: 120,
  margin: "auto",
  overflow: "hidden",
  borderRadius: "50%",
  border: "2px solid",
  borderColor: "white",
  backgroundColor: theme.palette.primary[200]
}));

const BasicInformation = () => {
  const [data, setData] = useState(null);
  const [profileImage, setProfileImage] = useState("/assets/images/avatars/001-man.svg");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const theme = useTheme();
  const { showAlert } = useAlert();
  const storage = getStorage();
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    // Fetch single user data by ID
    fetchUserData();
  }, []);

  useEffect(() => {
    if (data) {
      // Update form values dynamically when data is loaded
      setValues({
        name: data?.name || "",
        gender: data?.gender || "", // Default value
        email: data?.email || "",
        phone: data?.phone || "", // Default value
        password: data?.password || "", // Default value
        department: "Develop", // Default value
        country: "usa", // Default value
        state: "New York", // Default value
        address: "Corverview, Michigan", // Default value
        zipCode: 4336 // Default value
      });
      setProfileImage(data?.profileImage);
    }
  }, [data]);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const userDocRef = doc(fireStore, "users", userData.id); // Reference to the user document
      const userSnapshot = await getDoc(userDocRef); // Fetch the user document
      console.log("userSnapshot", userSnapshot);
      if (userSnapshot.exists()) {
        setData({ id: userSnapshot.id, ...userSnapshot.data() }); // Set the user data in state
        showAlert("success", "User data fetched successfully.");
        setLoading(false);
      } else {
        console.error("No user found with the given ID.");
        showAlert("error", "User not found.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      showAlert("error", "Error while fetching user data.");
      setLoading(false);
    }
  };

  const handleImageChange = async (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const imageUrl = await URL.createObjectURL(selectedFile);
      setProfileImage(imageUrl);
    }
  };

  const updateUser = async (values) => {
    setLoading(true);
    try {
      let downloadURL = ""; // Variable to store the download URL
      console.log("file", file);
      // Upload the image if a new image is selected
      if (file) {
        console.log("file enter", file);
        const fileName = `profile_${userData.id}`;
        const storageRef = ref(storage, "project-files/" + fileName);

        // Define metadata to include the MIME type
        const metadata = {
          contentType: file.type // Automatically get the correct MIME type from the file object
        };

        // Upload the file with metadata
        await uploadBytes(storageRef, file, metadata);
        downloadURL = await getDownloadURL(storageRef); // Get the download URL
        console.log("downloadURL", downloadURL);
      }

      // Update document in Firestore
      const projectRef = doc(fireStore, "users", userData.id); // Assuming you have the ID of the user to update
      await updateDoc(projectRef, {
        ...values, // Include existing values from the form
        profileImage: downloadURL || "" // Update the profile image field
      });

      setLoading(false);
      showAlert("success", "User data updated successfully!");
    } catch (error) {
      setLoading(false);
      showAlert("error", "Error while updating user data!");
      console.error("Error uploading image:", error);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Must be greater then 3 characters")
      .required("First Name is Required!"),
    gender: Yup.string().required("Last Name is Required!"),
    email: Yup.string().email("Invalid email address").required("Email is Required!"),
    phone: Yup.string().min(9).required("Phone Number is required!"),
    password: Yup.string().required("password is Required!"),
    department: Yup.string().required("Department is Required!"),
    country: Yup.string().required("Country is Required!"),
    state: Yup.string().required("State is Required!"),
    address: Yup.string().required("Address is Required!"),
    zipCode: Yup.number().required("Zip Code is Required!")
  });

  const { values, errors, setValues, handleSubmit, handleChange, handleBlur, touched } = useFormik({
    initialValues: {
      name: "",
      gender: "",
      email: "",
      phone: "",
      password: "",
      department: "",
      country: "",
      state: "",
      address: "",
      zipCode: ""
    },
    validationSchema,
    onSubmit: (values) => updateUser(values)
  });

  return (
    <Fragment>
      {loading && <MatxLoading />}
      <Card sx={{ padding: 3, position: "relative" }}>
        <CoverPicWrapper>
          <img
            width="100%"
            height="100%"
            alt="Team Member"
            src="/assets/images/study-2.jpg"
            style={{ objectFit: "cover" }}
          />
        </CoverPicWrapper>

        <ContentWrapper>
          <FlexBox justifyContent="center">
            <AvatarBadge
              badgeContent={
                <label htmlFor="icon-button-file">
                  <input
                    type="file"
                    accept="image/*"
                    id="icon-button-file"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                  {console.log("data", data)}
                  <IconButton aria-label="upload picture" component="span">
                    <CameraAlt sx={{ fontSize: 16, color: "background.paper" }} />
                  </IconButton>
                </label>
              }
            >
              <ImageWrapper>
                <img
                  src={profileImage}
                  alt="Profile"
                  sizes="large"
                  style={{
                    width: "100%", // Make the image responsive
                    height: "100%", // Maintain aspect ratio
                    maxWidth: "200px", // Set a maximum width for the image
                    maxHeight: "200px", // Set a maximum height for the image
                    borderRadius: "50%", // Optional: For circular images
                    objectFit: "cover" // Crop the image if necessary
                  }}
                />
              </ImageWrapper>
            </AvatarBadge>
          </FlexBox>
          {/* <FlexBox justifyContent="center">
            <AvatarBadge
              badgeContent={
                <label htmlFor="icon-button-file">
                  <input
                    type="file"
                    accept="image/*"
                    id="icon-button-file"
                    style={{ display: "none" }}
                  />

                  <IconButton aria-label="upload picture" component="span">
                    <CameraAlt sx={{ fontSize: 16, color: "background.paper" }} />
                  </IconButton>
                </label>
              }
            >
              <ImageWrapper>
                <img src="/assets/images/avatars/001-man.svg" alt="Team Member" sizes="large" />
              </ImageWrapper>
            </AvatarBadge>
          </FlexBox> */}

          <Box mt={2}>
            <H4 fontWeight={600} textAlign="center">
              {data?.name}
            </H4>

            <FlexBetween maxWidth={500} flexWrap="wrap" margin="auto" mt={1}>
              <FlexBox alignItems="center" gap={1}>
                <Bratislava sx={{ color: "text.disabled" }} />
                <Small fontWeight={600} color="text.disabled">
                  Software Engineer | Project Manager | Reactjs Developer | Nextjs Software Engineer
                  | Project Manager | Reactjs Developer | Nextjs
                </Small>
              </FlexBox>

              <FlexBox alignItems="center" gap={1}>
                <MapMarkerIcon sx={{ color: "text.disabled" }} />
                <Small fontWeight={600} color="text.disabled">
                  New York
                </Small>
              </FlexBox>

              <FlexBox alignItems="center" gap={1}>
                <DateRange sx={{ color: "text.disabled" }} />
                <Small fontWeight={600} color="text.disabled">
                  Joined March 17
                </Small>
              </FlexBox>
            </FlexBetween>

            <FlexBetween marginTop={3} flexWrap="wrap">
              <Box
                minWidth={250}
                sx={{ [theme.breakpoints.down(600)]: { minWidth: "100%", mb: 2 } }}
              >
                <Small mb={0.5}>Profile Completion</Small>

                <FlexBox alignItems="center" gap={1}>
                  <LinearProgress
                    value={90}
                    color="success"
                    variant="determinate"
                    sx={{ flexGrow: 1 }}
                  />
                  <Small fontWeight={600}>90%</Small>
                </FlexBox>
              </Box>

              {/* <FlexBetween
                width="100%"
                maxWidth={250}
                flexWrap="wrap"
                sx={{
                  [theme.breakpoints.down(600)]: { maxWidth: "100%" },
                  [theme.breakpoints.down(400)]: {
                    "& .MuiButtonBase-root": { width: "100%", mb: 1 }
                  }
                }}
              >
                <Button variant="outlined">Follow</Button>

                <Button variant="contained">Hire Me</Button>

                <Button sx={{ padding: "0.6rem" }}>
                  <MoreHoriz sx={{ color: "text.disabled" }} />
                </Button>
              </FlexBetween> */}
            </FlexBetween>
          </Box>
        </ContentWrapper>
      </Card>

      <Card sx={{ mt: 3 }}>
        <H5 padding={3}>Basic Information</H5>
        <Divider />

        <form onSubmit={handleSubmit}>
          <Box margin={3}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="name"
                  label="Name"
                  variant="outlined"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.name}
                  helperText={touched?.name && errors?.name}
                  error={Boolean(touched?.name && errors?.name)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="gender"
                  label="Gender"
                  variant="outlined"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.gender}
                  helperText={touched.gender && errors.gender}
                  error={Boolean(touched.gender && errors.gender)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  variant="outlined"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  disabled
                  value={values?.email}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="phone"
                  label="Phone"
                  variant="outlined"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}
                  helperText={touched.phone && errors.phone}
                  error={Boolean(touched.phone && errors.phone)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  variant="outlined"
                  label="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  disabled
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="department"
                  variant="outlined"
                  label="Department"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.department}
                  helperText={touched.department && errors.department}
                  error={Boolean(touched.department && errors.department)}
                />
              </Grid>

              {/* <Grid item sm={6} xs={12}>
                <TextField
                  select
                  fullWidth
                  name="country"
                  label="Country"
                  variant="outlined"
                  placeholder="Country"
                  SelectProps={{ native: true, IconComponent: KeyboardArrowDown }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.country}
                  helperText={touched.country && errors.country}
                  error={Boolean(touched.country && errors.country)}
                >
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="uae">United Arab Emirates</option>
                </TextField>
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="state"
                  label="State"
                  variant="outlined"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.state}
                  helperText={touched.state && errors.state}
                  error={Boolean(touched.state && errors.state)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="address"
                  label="Address"
                  variant="outlined"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address}
                  helperText={touched.address && errors.address}
                  error={Boolean(touched.address && errors.address)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="zipCode"
                  label="Zip Code"
                  variant="outlined"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.zipCode}
                  helperText={touched.zipCode && errors.zipCode}
                  error={Boolean(touched.zipCode && errors.zipCode)}
                />
              </Grid> */}

              <Grid item xs={12}>
                <Button type="submit" variant="contained">
                  Save Changes
                </Button>
                <Button variant="outlined" sx={{ ml: 2 }}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Card>
    </Fragment>
  );
};

export default BasicInformation;
