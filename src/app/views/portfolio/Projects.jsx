import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  IconButton,
  Modal,
  TablePagination,
  Box,
  styled
} from '@mui/material';
import { Edit, Visibility, Delete } from '@mui/icons-material';

const StyledTable = styled(Table)(() => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } }
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } }
  }
}));

const PortfolioTable = ({}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleView = (item) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setOpenModal(false);
  };

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log('event', +event.target.value);
    setRowsPerPage(+event.target.value);
    console.log('setRowsPerPage', rowsPerPage);
    setPage(0);
  };

  const portfolioData = [
    {
      id: 1,
      name: 'Project 1',
      client: 'Client A',
      origin: 'Origin A',
      completedDate: '2023-08-01'
    },
    {
      id: 11,
      name: 'Project 1',
      client: 'Client A',
      origin: 'Origin A',
      completedDate: '2023-08-01'
    },
    {
      id: 12,
      name: 'Project 1',
      client: 'Client A',
      origin: 'Origin A',
      completedDate: '2023-08-01'
    },
    {
      id: 13,
      name: 'Project 1',
      client: 'Client A',
      origin: 'Origin A',
      completedDate: '2023-08-01'
    },
    {
      id: 111,
      name: 'Project 1',
      client: 'Client A',
      origin: 'Origin A',
      completedDate: '2023-08-01'
    },
    {
      id: 14,
      name: 'Project 1',
      client: 'Client A',
      origin: 'Origin A',
      completedDate: '2023-08-01'
    },
    {
      id: 15,
      name: 'Project 1',
      client: 'Client A',
      origin: 'Origin A',
      completedDate: '2023-08-01'
    },
    {
      id: 16,
      name: 'Project 1',
      client: 'Client A',
      origin: 'Origin A',
      completedDate: '2023-08-01'
    },
    {
      id: 17,
      name: 'Project 1',
      client: 'Client A',
      origin: 'Origin A',
      completedDate: '2023-08-01'
    },
    {
      id: 18,
      name: 'Project 1',
      client: 'Client A',
      origin: 'Origin A',
      completedDate: '2023-08-01'
    },
    {
      id: 19,
      name: 'Project 1',
      client: 'Client A',
      origin: 'Origin A',
      completedDate: '2023-08-01'
    },
    {
      id: 10,
      name: 'Project 1',
      client: 'Client A',
      origin: 'Origin A',
      completedDate: '2023-08-01'
    },
    {
      id: 2,
      name: 'Project 2',
      client: 'Client B',
      origin: 'Origin B',
      completedDate: '2023-08-02'
    }
    // ... add more data
  ];

  // return (
  //   <div>
  //     <TableContainer component={Paper}>
  //       <Table>
  //         <TableHead>
  //           <TableRow>
  //             <TableCell>
  //               <Checkbox />
  //             </TableCell>
  //             <TableCell>Name</TableCell>
  //             <TableCell>Client</TableCell>
  //             <TableCell>Origin</TableCell>
  //             <TableCell>Completed Date</TableCell>
  //             <TableCell>Action</TableCell>
  //           </TableRow>
  //         </TableHead>
  //         <TableBody>
  //           {portfolioData.map((item) => (
  //             <TableRow key={item.id}>
  //               <TableCell>
  //                 <Checkbox />
  //               </TableCell>
  //               <TableCell>{item.name}</TableCell>
  //               <TableCell>{item.client}</TableCell>
  //               <TableCell>{item.origin}</TableCell>
  //               <TableCell>{item.completedDate}</TableCell>
  //               <TableCell>
  //                 <IconButton onClick={() => handleView(item)}>
  //                   <Visibility />
  //                 </IconButton>
  //                 <IconButton>
  //                   <Edit />
  //                 </IconButton>
  //                 <IconButton>
  //                   <Delete />
  //                 </IconButton>
  //               </TableCell>
  //             </TableRow>
  //           ))}
  //         </TableBody>
  //       </Table>
  //       <TablePagination
  //       sx={{ px: 2 }}
  //       page={page}
  //       component="div"
  //       rowsPerPage={rowsPerPage}
  //       count={subscribarList.length}
  //       onPageChange={handleChangePage}
  //       rowsPerPageOptions={[5, 10, 25, 35, 50]}
  //       onRowsPerPageChange={handleChangeRowsPerPage}
  //       nextIconButtonProps={{ "aria-label": "Next Page" }}
  //       backIconButtonProps={{ "aria-label": "Previous Page" }}
  //     />

  //     </TableContainer>

  //     <Modal open={openModal} onClose={handleCloseModal}>
  //       <div>
  //         <h2>{selectedItem?.name}</h2>
  //         <p>Client: {selectedItem?.client}</p>
  //         <p>Origin: {selectedItem?.origin}</p>
  //         <p>Completed Date: {selectedItem?.completedDate}</p>
  //       </div>
  //     </Modal>
  //   </div>
  // );

  return (
    <>
      <Box width="100%" overflow="auto">
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Origin</TableCell>
              <TableCell>Completed Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {portfolioData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.client}</TableCell>
                  <TableCell>{item.origin}</TableCell>
                  <TableCell>{item.completedDate}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleView(item)}>
                      <Visibility />
                    </IconButton>
                    <IconButton>
                      <Edit />
                    </IconButton>
                    <IconButton>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </StyledTable>

        <TablePagination
          sx={{ px: 2 }}
          page={page}
          component="div"
          rowsPerPage={rowsPerPage}
          count={portfolioData.length}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25, 35, 50]}
          onRowsPerPageChange={handleChangeRowsPerPage}
          nextIconButtonProps={{ 'aria-label': 'Next Page' }}
          backIconButtonProps={{ 'aria-label': 'Previous Page' }}
        />
      </Box>
      <Modal className="bg-scandory" open={openModal} onClose={handleCloseModal}>
        <div>
          <h2>{selectedItem?.name}</h2>
          <p>Client: {selectedItem?.client}</p>
          <p>Origin: {selectedItem?.origin}</p>
          <p>Completed Date: {selectedItem?.completedDate}</p>
        </div>
      </Modal>
    </>
  );
};

export default PortfolioTable;
