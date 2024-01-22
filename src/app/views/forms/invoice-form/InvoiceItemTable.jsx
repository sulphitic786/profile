import {
  Autocomplete,
  Box,
  Button,
  Icon,
  IconButton,
  MenuItem,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { FieldArray } from "formik";
import { useEffect, useState } from "react";
import { calculateAmount, getProductList } from "./InvoiceFormService";

// styled components
const IMG = styled("img")({ width: 48 });
const StyledCell = styled(TableCell)({ padding: 0 });
const FlexBox = styled("div")({ display: "flex", alignItems: "center" });

const InvoiceItemTable = ({ values, handleChange, setFieldValue }) => {
  const [isAlive, setIsAlive] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductList().then(({ data }) => {
      if (isAlive) setProductList(data);
    });

    return () => setIsAlive(false);
  }, [isAlive]);

  return (
    <FieldArray name="items">
      {(arrayHelpers) => (
        <Box overflow="auto">
          <Table sx={{ whiteSpace: "pre", minWidth: 750 }}>
            <TableHead>
              <TableRow>
                <TableCell colSpan={7}>Item Details</TableCell>
                <TableCell colSpan={2}>Quantity </TableCell>
                <TableCell colSpan={2}>Rate</TableCell>
                <TableCell colSpan={2}>Discount</TableCell>
                <TableCell colSpan={2} align="center">
                  Amount
                </TableCell>
                <StyledCell colSpan={1} align="center" />
              </TableRow>
            </TableHead>

            <TableBody>
              {values.items?.map((item, ind) => (
                <TableRow key={ind} sx={{ position: "relative" }}>
                  <StyledCell colSpan={7} align="left">
                    <FlexBox>
                      <IMG alt="" src={item?.imgUrl} />
                      <Autocomplete
                        size="small"
                        sx={{ width: "100%" }}
                        options={productList}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => (
                          <TextField {...params} variant="outlined" fullWidth />
                        )}
                        onChange={(_, newValue) => {
                          handleChange({
                            target: { name: `items[${ind}]`, value: newValue },
                          });
                        }}
                      />
                    </FlexBox>
                  </StyledCell>

                  <StyledCell colSpan={2} align="left">
                    <TextField
                      fullWidth
                      size="small"
                      type="number"
                      variant="outlined"
                      onChange={handleChange}
                      name={`items[${ind}].quantity`}
                      defaultValue={item.quantity || ""}
                    />
                  </StyledCell>

                  <StyledCell colSpan={2} align="left">
                    <TextField
                      fullWidth
                      size="small"
                      type="number"
                      variant="outlined"
                      onChange={handleChange}
                      value={item.price || ""}
                      name={`items[${ind}].price`}
                    />
                  </StyledCell>

                  <StyledCell colSpan={2} align="left">
                    <TextField
                      fullWidth
                      size="small"
                      type="number"
                      variant="outlined"
                      onChange={handleChange}
                      value={item.discount || ""}
                      name={`items[${ind}].discount`}
                      InputProps={{
                        style: { paddingRight: 0 },
                        endAdornment: (
                          <Select
                            margin="none"
                            variant="standard"
                            onChange={handleChange}
                            value={item.discountType || "%"}
                            name={`items[${ind}].discountType`}
                          >
                            <MenuItem value="$">$</MenuItem>
                            <MenuItem value="%">%</MenuItem>
                          </Select>
                        ),
                      }}
                    />
                  </StyledCell>

                  <StyledCell colSpan={2} align="center">
                    {calculateAmount(item).toFixed(2)}
                  </StyledCell>

                  <StyledCell colSpan={1} align="center">
                    <IconButton size="small" onClick={() => arrayHelpers.remove(ind)}>
                      <Icon color="error" fontSize="small">
                        clear
                      </Icon>
                    </IconButton>
                  </StyledCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Button
            color="primary"
            variant="contained"
            sx={{ mt: "16px !important" }}
            onClick={() => arrayHelpers.push({})}
          >
            + Add New Item
          </Button>
        </Box>
      )}
    </FieldArray>
  );
};

export default InvoiceItemTable;
