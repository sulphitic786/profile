import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { amber, green } from '@mui/material/colors';
import { styled } from '@mui/material';

const ContentRoot = styled('div')(({ theme }) => ({
  '& .icon': { fontSize: 20 },
  '& .success': { backgroundColor: green[600] },
  '& .warning': { backgroundColor: amber[700] },
  '& .error': { backgroundColor: theme.palette.error.main },
  '& .info': { backgroundColor: theme.palette.primary.main },
  '& .iconVariant': { opacity: 0.9, marginRight: theme.spacing(1) },
  '& .message': { display: 'flex', alignItems: 'center' },
  '& .margin': { margin: theme.spacing(1) }
}));

const ToastNotification = ({ message, type }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 6000); // Auto-hide after 6000 milliseconds

    return () => clearTimeout(timer);
  }, [type]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const getAlertSeverity = (type) => {
    console.log("typeee", type)
    switch (type) {
      case 'success':
        return 'success';
      case 'warning':
        return 'warning';
      case 'error':
        return 'error';
      default:
        return 'info';
    }
  };

  return (
    <ContentRoot>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {console.log("open", open, message, type)}
        <Alert onClose={handleClose} severity={getAlertSeverity(type)} sx={{ width: '100%' }} variant="filled">
          {message}
        </Alert>
      </Snackbar>
    </ContentRoot>
  );
};

export const toastNotification = (message, type) => {
  console.log("message, type", message, type)
  return <ToastNotification message={message} type={type} />;
};




// const ContentRoot = styled('div')(({ theme }) => ({
//   '& .icon': { fontSize: 20 },
//   '& .success': { backgroundColor: green[600] },
//   '& .warning': { backgroundColor: amber[700] },
//   '& .error': { backgroundColor: theme.palette.error.main },
//   '& .info': { backgroundColor: theme.palette.primary.main },
//   '& .iconVariant': { opacity: 0.9, marginRight: theme.spacing(1) },
//   '& .message': { display: 'flex', alignItems: 'center' },
//   '& .margin': { margin: theme.spacing(1) }
// }));

// export default function CustomizedSnackbars() {
//   const [open, setOpen] = React.useState(false);

//   function handleClick() {
//     setOpen(true);
//   }
//   function handleClose(_, reason) {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setOpen(false);
//   }

//   return (
//     <ContentRoot>
//       <Button variant="outlined" className="margin" onClick={handleClick}>
//         Open success snackbar
//       </Button>

//       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//         <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }} variant="filled">
//           This is a success message!
//         </Alert>
//       </Snackbar>

//       <Alert onClose={handleClose} sx={{ m: 1 }} severity="error" variant="filled">
//         This is an error message!
//       </Alert>

//       <Alert onClose={handleClose} sx={{ m: 1 }} severity="warning" variant="filled">
//         This is a warning message!
//       </Alert>

//       <Alert onClose={handleClose} sx={{ m: 1 }} severity="info" variant="filled">
//         This is an information message!
//       </Alert>

//       <Alert onClose={handleClose} sx={{ m: 1 }} severity="success" variant="filled">
//         This is a success message!
//       </Alert>
//     </ContentRoot>
//   );
// }
