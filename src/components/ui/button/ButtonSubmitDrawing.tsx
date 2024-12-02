'use client';

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import CustomButton from './CustomButton';
import { Button, styled, useTheme } from '@mui/material';
import langUk from '../../../../locales/uk.json';
import { PageProps } from '@/context/withStaticPathsAndProps';
import { darkTheme, lightTheme } from '@/theme';
import ClearIcon from '@mui/icons-material/Clear';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ButtonSubmitDrawingProps {
  className?: string;
  translations?: PageProps['translations'];
  lang?: PageProps['lang'];
}

const ButtonSubmitDrawing: React.FC<ButtonSubmitDrawingProps> = ({ translations, className, lang }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [fileList, setFileList] = React.useState<File[]>([]);
  const [statusMessage, setStatusMessage] = React.useState<string>('');
  const [drag, setDrag] = React.useState(false);

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const secondaryColor = currentTheme.palette.secondary.main;
  const bgColor = currentTheme.palette.background.default;

  const translationsPage = translations?.modalInfo || langUk.modalInfo;
  const [numberPhone, setNumberPhone] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    setDrag(false);
  }, [fileList]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      setFileList((prevFiles) => [...prevFiles, ...Array.from(files)]);
    } else {
      console.error('No files selected or input is invalid.');
    }
  };
  const dragLeaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDrag(false);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDrag(true);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files.length > 0) {
      setFileList((prevFiles) => [...prevFiles, ...Array.from(event.dataTransfer.files)]);
    }
  };

  const handleFileRemove = (index: number) => {
    setFileList((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleFileSubmit = async () => {
    if (fileList.length === 0) {
      setStatusMessage('No files selected.');
      return;
    }

    const formData = new FormData();
    formData.append('token', '8355f5423b072c553809f09be3b7ca5fb0f7555c');
    formData.append('phone', numberPhone);

    fileList.forEach((file, index) => {
      formData.append(`attachment[${index}]`, file);
    });

    setStatusMessage('Sending files...');

    try {
      const response = await fetch('/mail.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatusMessage('Files sent successfully!');
        setFileList([]);
      } else {
        setStatusMessage(`Error: ${result.error || 'Unknown error'}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setStatusMessage(`Error: ${error.message}`);
      } else {
        setStatusMessage('An unknown error occurred');
      }
    }
  };

  function bytesToMegabytes(bytes: number) {
    if (typeof bytes !== 'number' || bytes < 0) {
      throw new Error('Input must be a non-negative number');
    }
    const megabytes = Math.round((bytes / (1024 * 1024)) * 100) / 100;
    return parseFloat(megabytes.toPrecision(3));
  }
  return (
    <div>
      <CustomButton className={className} variant="send-btn" onClick={handleOpen}>
        {translations?.btnSend}
      </CustomButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-description" sx={{ textAlign: 'center' }}>
              {translationsPage.title}
            </Typography>

            <div
              style={{
                border: drag ? '2px dashed blue' : '2px dashed #ccc',
                padding: '10px',
                marginTop: '20px',
                textAlign: 'center',
              }}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onDragLeave={(e) => dragLeaveHandler(e)}
            >
              {drag ? (
                <div className="relative z-10 h-[106px] flex items-center justify-center">
                  <CloudDownloadIcon className="size-[86px] absolute z-[0]" />
                </div>
              ) : (
                <>
                  <Typography variant="body2" color="textSecondary">
                    {translationsPage.dropFile}
                  </Typography>
                  <input
                    type="file"
                    id="file-upload"
                    style={{ display: 'none' }}
                    multiple
                    onChange={handleFileChange}
                  />
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    className="bg-[#c43c1e]  hover:bg-[#9e2a1f] text-[#fff] transition-all duration-300 ease-in-out mt-4"
                    onClick={() => document.getElementById('file-upload')?.click()}
                  >
                    {translationsPage.descriptionBtn}
                  </Button>

                  <Typography id="transition-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
                    {translationsPage.limitation}
                  </Typography>
                </>
              )}
            </div>

            {fileList.length > 0 && (
              <Box sx={{ mt: 2 }}>
                {fileList.map((file, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mt: 1,
                      border: '1 px solid',
                      alignItems: 'center',
                    }}
                  >
                    <div className="flex items-center gap-2 w-full justify-between">
                      <InsertDriveFileIcon />
                      <Typography
                        className="text-nowrap overflow-hidden w-1/2 text-ellipsis "
                        variant="body2"
                      >
                        {file.name}
                      </Typography>
                      <Typography variant="body2">{bytesToMegabytes(file.size)} Mb</Typography>
                      <CustomButton
                        className="border p-1 text-sm hover:border-red-500 hover:text-red-500 transition-all duration-300 ease-in-out"
                        onClick={() => handleFileRemove(index)}
                      >
                        <ClearIcon />
                      </CustomButton>
                    </div>
                  </Box>
                ))}
              </Box>
            )}
            <input
              type="number"
              value={numberPhone}
              onChange={(e) => setNumberPhone(e.target.value)}
              style={{
                backgroundColor: 'white',
                borderRadius: '5px',
              }}
              className="w-full mt-4 text-[16px] p-1.5 border"
              placeholder={translationsPage.inputTitle}
            />

            <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
              {numberPhone.length > 9 && fileList.length > 0 ? (
                <Button
                  onClick={handleFileSubmit}
                  className="bg-[#c43c1e]  hover:bg-[#9e2a1f] hover:text-[#fff] transition-all duration-300 ease-in-out w-full"
                  variant="outlined"
                >
                  {translationsPage.submitBtn}
                </Button>
              ) : (
                <Button className="w-full bg-[silver]" onClick={handleFileSubmit} variant="outlined" disabled>
                  {translationsPage.submitBtn}
                </Button>
              )}
            </Box>

            {statusMessage && (
              <Typography variant="body2" sx={{ marginTop: '20px', color: 'red' }}>
                {statusMessage}
              </Typography>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ButtonSubmitDrawing;
