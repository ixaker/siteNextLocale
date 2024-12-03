import { Button } from '@mui/material';
import React from 'react';

interface DisabledButtonProps {
  textBtn: string;
}

const DisabledButton: React.FC<DisabledButtonProps> = ({ textBtn }) => {
  return (
    <Button sx={{ width: '100%', backgroundColor: 'silver' }} variant="outlined" disabled>
      {textBtn}
    </Button>
  );
};

export default DisabledButton;
