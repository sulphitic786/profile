import { Box, Button, Card, Divider, Grid, Icon, MenuItem, styled, TextField } from "@mui/material";
import { Breadcrumb } from "app/components";
import { FlexAlignCenter, FlexBox } from "app/components/FlexBox";
import { H4 } from "app/components/Typography";
import { convertHexToRGB } from "app/utils/utils";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import * as yup from "yup";

// styled components
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
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
    background: `rgb(${convertHexToRGB(theme.palette.text.primary)}, 0.2) !important`,
  },
  background: isDragActive ? "rgb(0, 0, 0, 0.15)" : "rgb(0, 0, 0, 0.01)",
}));

const ProductForm = () => {
  const [imageList, setImageList] = useState([]);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: { "image/*": [".jpg", ".png"] },
  });

  const handleSubmit = async (values) => {
    console.log(values);
  };

  useEffect(() => {
    setImageList(acceptedFiles);
  }, [acceptedFiles]);

  return (
    <Container>
      <div className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Pages", path: "/pages" }, { name: "New Product" }]} />
      </div>

      <Card elevation={3}>
        <Box p={2} display="flex">
          <H4>Add New Product</H4>
        </Box>
        <Divider sx={{ mb: 3 }} />

        <Formik
          onSubmit={handleSubmit}
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={productSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <StyledTextField
                    fullWidth
                    name="name"
                    label="Name"
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
                    multiline
                    size="small"
                    name="description"
                    variant="outlined"
                    label="Description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description || ""}
                    error={Boolean(touched.description && errors.description)}
                    helperText={touched.description && errors.description}
                  />

                  <StyledTextField
                    select
                    fullWidth
                    size="small"
                    name="category"
                    label="Category"
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

                  <DropZone {...getRootProps()}>
                    <input {...getInputProps()} />
                    <FlexBox alignItems="center" flexDirection="column">
                      <Icon sx={{ color: "text.secondary", fontSize: "48px" }}>publish</Icon>
                      {imageList.length ? (
                        <span>{imageList.length} images were selected</span>
                      ) : (
                        <span>Drop product images</span>
                      )}
                    </FlexBox>
                  </DropZone>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <StyledTextField
                    fullWidth
                    size="small"
                    name="productCode"
                    variant="outlined"
                    onBlur={handleBlur}
                    label="Product Code"
                    onChange={handleChange}
                    value={values.productCode || ""}
                    error={Boolean(touched.productCode && errors.productCode)}
                    helperText={touched.productCode && errors.productCode}
                  />

                  <StyledTextField
                    fullWidth
                    name="sku"
                    label="SKU"
                    size="small"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.sku || ""}
                    error={Boolean(touched.sku && errors.sku)}
                    helperText={touched.sku && errors.sku}
                  />

                  <StyledTextField
                    fullWidth
                    name="price"
                    size="small"
                    type="number"
                    label="Price"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.price || ""}
                    error={Boolean(touched.price && errors.price)}
                    helperText={touched.price && errors.price}
                  />

                  <StyledTextField
                    fullWidth
                    size="small"
                    type="number"
                    name="salePrice"
                    label="Sale Price"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.salePrice || ""}
                    error={Boolean(touched.salePrice && errors.salePrice)}
                    helperText={touched.salePrice && errors.salePrice}
                  />

                  <StyledTextField
                    fullWidth
                    size="small"
                    type="number"
                    name="quantity"
                    label="Quantity"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.quantity || ""}
                    error={Boolean(touched.quantity && errors.quantity)}
                    helperText={touched.quantity && errors.quantity}
                  />

                  <StyledTextField
                    fullWidth
                    size="small"
                    type="number"
                    variant="outlined"
                    onBlur={handleBlur}
                    name="minOrderAmount"
                    onChange={handleChange}
                    label="Minimum Order Amount"
                    value={values.minOrderAmount || ""}
                    error={Boolean(touched.minOrderAmount && errors.minOrderAmount)}
                    helperText={touched.minOrderAmount && errors.minOrderAmount}
                  />
                </Grid>
              </Grid>

              <Button type="submit" color="primary" variant="contained" sx={{ mb: 2, px: 6 }}>
                Add Product
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </Container>
  );
};

const productSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  price: yup.number().required("Price is required"),
  category: yup.string().required("Category is required"),
  quantity: yup.number().required("Quantity is required"),
});

const initialValues = {
  name: "",
  sku: "",
  price: "",
  category: "",
  quantity: "",
};

const categoryList = ["Electronics", "Clothes", "Toys", "Books", "Utensils"];
export default ProductForm;
