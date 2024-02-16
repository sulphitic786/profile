import React, { useEffect, useState } from 'react';
import { Paper, styled, Icon, Grid, Button, Tooltip, TextField } from '@mui/material';
import { Breadcrumb } from 'app/components';
import DataTable from 'react-data-table-component';
import ConfirmationDialog from 'app/components/ConfirmationDialog';
import { getDateFromTimestamp, color } from 'app/utils/utils';
// import '@styles/react/libs/tables/react-dataTable-component.scss';
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword
} from 'firebase/auth';
import { MatxLoading } from 'app/components';
import { fireStore } from 'config';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'app/contexts/AlertContext';
import AddUpdateEditor from './AddUpdateEditor';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: {
    margin: '16px'
  },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const Small = styled('small')(({ bgcolor }) => ({
  height: 20,
  width: 60,
  color: '#fff',
  padding: '3px 8px',
  textAlign: 'center',
  borderRadius: '4px',
  overflow: 'hidden',
  background: bgcolor,
  boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)'
}));

const FilterComponent = ({ filterText, onFilter }) => {
  return (
    <TextField
      placeholder="Search Input"
      label="Quick Search"
      value={filterText}
      onChange={onFilter}
      id="search"
      className=""
    />
  );
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [action, setAction] = useState('');
  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);
  const [shouldOpenConfirmationDialog, setShouldOpenConfirmationDialog] = useState(false);
  const { showAlert } = useAlert();

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  const deleteRequestHandler = (user) => {
    console.log('model open', user);
    setCurrentUser(user);
    setShouldOpenConfirmationDialog(true);
  };

  const handleDialogClose = () => {
    setShouldOpenEditorDialog(false);
    setShouldOpenConfirmationDialog(false);
  };

  const handleAddUpdateUser = (action, row) => {
    setCurrentUser(row);
    setAction(action);
    setShouldOpenEditorDialog(true);
  };

  const handleConfirmationResponse = async () => {
    try {
      setLoading(true);
      // Delete the document with the given ID
      await deleteDoc(doc(fireStore, 'users', currentUser.id));
      showAlert('success', 'Data deleted successfully.');
      setShouldOpenConfirmationDialog(false);
      setLoading(false);
      fetchData();
    } catch (error) {
      setLoading(false);
      showAlert('error', 'Error while deleting request.');
      console.error('Error deleting data from Firebase:', error);
    }
  };

  const handleAddUser = async (userData) => {
    try {
      setLoading(true);
      const auth = getAuth();
      // Create user in Firebase Authentication
      const authUserCredential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      // Obtain user ID from authentication result
      const user_id = authUserCredential.user.uid;
      // Prepare user data to be saved in Firestore
      const newUser = { ...userData, created_at: new Date(), updated_at: new Date(), user_id };
      // Add the new user document to Firestore
      await addDoc(collection(fireStore, 'users'), newUser);
      showAlert('success', 'User added successfully.');
      setLoading(false);
      fetchData(); // Fetch updated data
      handleDialogClose();
    } catch (error) {
      setLoading(false);
      showAlert('error', 'Error while adding user.');
      console.error('Error adding user to Firebase:', error);
    }
  };

  const handleUpdateUser = async (userData) => {
    console.log('currentUser', currentUser, 'userData', userData);
    try {
      setLoading(true);
      const auth = getAuth();
      const email = auth.currentUser.email;
      const updatedUserData = { ...userData, updated_at: new Date() }; // Prepare user data to be updated in Firestore
      const credentials = EmailAuthProvider.credential(email, userData.currant_password);

      if (userData.password !== currentUser.password) {
        console.log('password update');
        // Reauthenticate the user
        await reauthenticateWithCredential(auth.currentUser, credentials);
        await updatePassword(auth.currentUser, userData.password); // Update user password in Firebase Authentication if a new password is provided
        await updateDoc(doc(fireStore, 'users', currentUser.id), updatedUserData); // Update user data in the Firestore collection
      } else {
        console.log('user update');
        await updateDoc(doc(fireStore, 'users', currentUser.id), updatedUserData); // Update user data in the Firestore collection
      }

      showAlert('success', 'User updated successfully.');
      handleDialogClose();
      setLoading(false);
      fetchData(); // Fetch updated data
    } catch (error) {
      setLoading(false);
      showAlert('error', 'Error while updating user.');
      console.error('Error updating user:', error);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getDocs(collection(fireStore, 'users'));
      const dataFromFirebase = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setLoading(false);
      setUsers(dataFromFirebase);
      console.log('dataFromFirebase', dataFromFirebase);
      showAlert('success', 'Data fetch successfully.');
    } catch (error) {
      setLoading(false);
      showAlert('error', 'Error while fetching data.');
      console.error('Error fetching data:', error);
    }
  };

  const navigate = useNavigate();

  const columns = [
    {
      name: 'Name',
      sortable: true,
      minWidth: '100px',
      sortField: 'name',
      selector: (row) => row.name,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">{row.name}</div>
        </div>
      )
    },
    {
      name: 'Phone',
      sortable: true,
      minWidth: '100px',
      sortField: 'phone',
      selector: (row) => row.phone,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">{row.phone}</div>
        </div>
      )
    },
    {
      name: 'Email',
      sortable: true,
      minWidth: '180px',
      sortField: 'email',
      selector: (row) => row.email,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">{row.email}</div>
        </div>
      )
    },
    {
      name: 'Role',
      sortable: true,
      minWidth: '100px',
      sortField: 'role',
      selector: (row) => row.roles,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">{row.roles}</div>
        </div>
      )
    },
    {
      name: 'Gender',
      sortable: true,
      minWidth: '100px',
      sortField: 'gender',
      selector: (row) => row.gender,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">{row.gender}</div>
        </div>
      )
    },
    {
      name: 'Status',
      sortable: true,
      minWidth: '100px',
      sortField: 'status',
      selector: (row) => row.status,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <Small bgcolor={color(row.isActive ? 'lightSuccess' : 'lightError')}>
            {row.isActive ? 'Active' : 'Inactive'}
          </Small>
        </div>
      )
    },
    {
      name: 'Password',
      sortable: true,
      minWidth: '100px',
      sortField: 'password',
      selector: (row) => row.password,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">{row.password}</div>
        </div>
      )
    },
    {
      name: 'Date',
      sortable: true,
      minWidth: '100px',
      sortField: 'date',
      selector: (row) => row?.created_at,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">{getDateFromTimestamp(row.created_at)}</div>
        </div>
      )
    },
    {
      name: 'Action',
      sortable: true,
      minWidth: '100px',
      sortField: 'date',
      selector: (row) => row,
      cell: (row) => (
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex ">
            <Tooltip title="Edit/Update User">
              <Icon
                onClick={() => handleAddUpdateUser('update', row)}
                color="success"
                fontSize="small"
                style={{ cursor: 'pointer' }}
              >
                edit
              </Icon>
            </Tooltip>
            <Tooltip title="Delete Request">
              <Icon
                onClick={() => deleteRequestHandler(row)}
                color="error"
                fontSize="small"
                style={{ cursor: 'pointer' }}
              >
                delete_forever
              </Icon>
            </Tooltip>
          </div>
        </div>
      )
    }
  ];

  const ExpandableTable = ({ data }) => {
    return (
      <>
        <div
          className="d-flex justify-content-center align-items-center py-2"
          style={{ backgroundColor: '#e0d9d9', opacity: '0.5', fontStyle: 'italic' }}
        >
          <div className="d-flex flex-column">{data.message}</div>
        </div>
      </>
    );
  };

  const subheaderComponentHandler = () => {
    return (
      <>
        <div className="mt-1" style={{ width: '-webkit-fill-available' }}>
          <Button
            color="primary"
            variant="contained"
            sx={{ mt: '6px !important' }}
            style={{ float: 'left' }}
            onClick={() => handleAddUpdateUser('add')}
          >
            + Add New User
          </Button>
          <FilterComponent
            className="justify-content-end"
            onFilter={(e) => setFilterText(e.target.value)}
            filterText={filterText}
          />
        </div>
      </>
    );
  };

  const handleSelectAllRows = (event) => {};

  if (users) {
    var filteredData = users.filter((item) => {
      const itemString = JSON.stringify(item).toLowerCase();
      return itemString.includes(filterText.toLowerCase());
    });
  }

  return (
    <Container>
      {loading && <MatxLoading />}
      <div className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Pages', path: '/pages' }, { name: 'contact-us-list' }]}
        />
      </div>

      <Paper sx={{ width: '100%', overflowX: 'scroll' }}>
        <DataTable
          // title="Movie List"
          responsive
          striped
          highlightOnHover
          persistTableHead
          subHeader
          // subHeaderAlign="center"
          fixedHeader
          fixedHeaderScrollHeight="50vh"
          columns={columns}
          data={filteredData}
          // sortIcon={<ChevronDown />}
          className="react-dataTable"
          pagination
          // selectableRows
          // expandableRows
          // expandOnRowClicked
          // expandableRowsComponent={ExpandableTable}
          // onSelectedRowsChange={handleRowsSelection}
          subHeaderComponent={subheaderComponentHandler()}
          paginationPerPage={250}
          paginationRowsPerPageOptions={[25, 50, 75, 100]}
        />
      </Paper>

      {shouldOpenEditorDialog && (
        <AddUpdateEditor
          action={action}
          addUpdateData={currentUser}
          open={shouldOpenEditorDialog}
          handleClose={handleDialogClose}
          addUser={handleAddUser}
          updateUser={handleUpdateUser}
        />
      )}

      {shouldOpenConfirmationDialog && (
        <ConfirmationDialog
          text="Are you sure to delete?"
          open={shouldOpenConfirmationDialog}
          onConfirmDialogClose={handleDialogClose}
          onYesClick={handleConfirmationResponse}
        />
      )}
    </Container>
  );
};

export default Users;
