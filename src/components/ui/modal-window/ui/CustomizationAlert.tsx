import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

interface CustomizationAlertProps {
  message?: string;
  openAlert: boolean;
  setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomizationAlert: React.FC<CustomizationAlertProps> = ({ message, openAlert, setOpenAlert }) => {
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <div>
      <Snackbar
        sx={{
          width: 'auto',
          position: 'fixed',
          top: '50%',
        }}
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{
            width: '100%',
            backgroundColor: '#edf7ed',
            color: 'black',
            borderRadius: '7px',
            border: '2px solid darkgreen',
          }}
          action={
            <Button color="inherit" size="small" onClick={handleClose}>
              <CloseIcon />
            </Button>
          }
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomizationAlert;
