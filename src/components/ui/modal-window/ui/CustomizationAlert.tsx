import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

interface CustomizationAlertProps {
  message: string;
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
        open={openAlert}
        autoHideDuration={6000} // уведомление исчезнет автоматически через 6 секунд
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity="info"
          sx={{ width: '100%' }}
          action={
            <Button color="inherit" size="small" onClick={handleClose}>
              Закрыть
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
