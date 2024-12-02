import { Button } from '@mui/material';
import { handleFileSubmit } from '../utils/network';
import React from 'react';

interface DisabledButtonProps {
  fileList: File[];
  setFileList: React.Dispatch<React.SetStateAction<File[]>>;
  setStatusMessage: React.Dispatch<React.SetStateAction<string>>;
  numberPhone: string;
  textBtn: string;
}

const DisabledButton: React.FC<DisabledButtonProps> = ({
  fileList,
  setStatusMessage,
  setFileList,
  numberPhone,
  textBtn,
}) => {
  return (
    <Button
      className="w-full bg-[silver]"
      onClick={() => handleFileSubmit(fileList, setStatusMessage, setFileList, numberPhone)}
      variant="outlined"
      disabled
    >
      {textBtn}
    </Button>
  );
};

export default DisabledButton;
