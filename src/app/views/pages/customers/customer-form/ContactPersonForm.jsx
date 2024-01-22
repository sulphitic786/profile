import {
  Button,
  Icon,
  IconButton,
  MenuItem,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { FieldArray } from "formik";
import { Fragment } from "react";

const StyledCell = styled(TableCell)(() => ({ padding: 0 }));

const ContactPersonForm = ({ values, handleChange }) => {
  return (
    <FieldArray name="contacts">
      {(arrayHelpers) => (
        <Fragment>
          <Table sx={{ whiteSpace: "pre", minWidth: 750 }}>
            <TableHead>
              <TableRow>
                <TableCell colSpan={4}>Salutation</TableCell>
                <TableCell colSpan={4}>First Name</TableCell>
                <TableCell colSpan={4}>Last Name</TableCell>
                <TableCell colSpan={4}>Email Address</TableCell>
                <TableCell colSpan={4}>Work Phone</TableCell>
                <TableCell colSpan={4}>Mobile</TableCell>
                <TableCell colSpan={4}>Designation</TableCell>
                <TableCell colSpan={4}>Department</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {values.contacts?.map((item, ind) => (
                <TableRow key={ind} sx={{ position: "relative" }}>
                  <StyledCell colSpan={4} align="left">
                    <TextField
                      select
                      fullWidth
                      size="small"
                      variant="outlined"
                      label="Salutation"
                      onBlur={handleChange}
                      name={`contacts[${ind}].salutation`}
                      defaultValue={item.salutation || ""}
                    >
                      {salutationList.map((item, ind) => (
                        <MenuItem defaultValue={item} key={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </TextField>
                  </StyledCell>

                  <StyledCell colSpan={4} align="left">
                    <TextField
                      fullWidth
                      size="small"
                      label="First Name"
                      variant="outlined"
                      onBlur={handleChange}
                      name={`contacts[${ind}].firstName`}
                      defaultValue={item.firstName || ""}
                    />
                  </StyledCell>

                  <StyledCell colSpan={4} align="left">
                    <TextField
                      fullWidth
                      size="small"
                      label="Last Name"
                      variant="outlined"
                      onBlur={handleChange}
                      name={`contacts[${ind}].lastName`}
                      defaultValue={item.lastName || ""}
                    />
                  </StyledCell>

                  <StyledCell colSpan={4} align="left">
                    <TextField
                      fullWidth
                      size="small"
                      label="Email"
                      variant="outlined"
                      onBlur={handleChange}
                      name={`contacts[${ind}].email`}
                      defaultValue={item.email || ""}
                    />
                  </StyledCell>

                  <StyledCell colSpan={4} align="left">
                    <TextField
                      fullWidth
                      size="small"
                      label="Work Phone"
                      variant="outlined"
                      onBlur={handleChange}
                      name={`contacts[${ind}].phone`}
                      defaultValue={item.phone || ""}
                    />
                  </StyledCell>

                  <StyledCell colSpan={4} align="left">
                    <TextField
                      fullWidth
                      size="small"
                      label="Mobile"
                      variant="outlined"
                      onBlur={handleChange}
                      name={`contacts[${ind}].mobile`}
                      defaultValue={item.mobile || ""}
                    />
                  </StyledCell>

                  <StyledCell colSpan={4} align="left">
                    <TextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      label="Designation"
                      onBlur={handleChange}
                      name={`contacts[${ind}].designation`}
                      defaultValue={item.designation || ""}
                    />
                  </StyledCell>

                  <StyledCell colSpan={4} align="left">
                    <TextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      label="Department"
                      onBlur={handleChange}
                      name={`contacts[${ind}].department`}
                      defaultValue={item.department || ""}
                    />
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
            sx={{ mt: 2 }}
            color="primary"
            variant="contained"
            onClick={() => arrayHelpers.push({})}
          >
            + Add New Contact
          </Button>
        </Fragment>
      )}
    </FieldArray>
  );
};

const salutationList = ["Mr.", "Mrs.", "Ms.", "Miss.", "Dr."];

export default ContactPersonForm;
