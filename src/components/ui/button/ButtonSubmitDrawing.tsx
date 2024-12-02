import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import CustomButton from './CustomButton';
import { useTheme } from '@mui/material';
import langUk from '../../../../locales/uk.json';
import { PageProps } from '@/context/withStaticPathsAndProps';
import { darkTheme, lightTheme } from '@/theme';

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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const secondaryColor = currentTheme.palette.secondary.main;
  const bgColor = currentTheme.palette.background.default;

  const translationsPage = translations?.modalInfo || langUk.modalInfo;
  const [numberPhone, setNumberPhone] = React.useState('');

  React.useEffect(() => {
    setNumberPhone(translationsPage.numberPhone);
  }, [lang]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      setFileList((prevFiles) => [...prevFiles, ...Array.from(files)]);
    } else {
      console.error('No files selected or input is invalid.');
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
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

  console.log('statusMessage', statusMessage);

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
            <Typography id="transition-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
              {translationsPage.title}
            </Typography>

            <Box
              sx={{
                border: '2px dashed #ccc',
                padding: '20px',
                marginTop: '20px',
                textAlign: 'center',
              }}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
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
              <CustomButton
                className="mt-5 border p-2 hover:border-orange-500 hover:text-orange-500 transition-all duration-300 ease-in-out"
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                {translationsPage.descriptionBtn}
              </CustomButton>
            </Box>

            {fileList.length > 0 && (
              <Box sx={{ mt: 2 }}>
                {fileList.map((file, index) => (
                  <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                    <Typography variant="body2">{file.name}</Typography>
                    <CustomButton
                      className="border p-1 text-sm hover:border-red-500 hover:text-red-500 transition-all duration-300 ease-in-out"
                      onClick={() => handleFileRemove(index)}
                    >
                      {translationsPage.removeBtn}
                    </CustomButton>
                  </Box>
                ))}
              </Box>
            )}

            <Typography id="transition-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
              {translationsPage.limitation}
            </Typography>
            <input
              type="number"
              value={numberPhone}
              onChange={(e) => setNumberPhone(e.target.value)}
              style={{
                color: secondaryColor,
                backgroundColor: bgColor,
                borderColor: secondaryColor,
                borderRadius: '5px',
              }}
              className="w-full mt-4 text-[16px] p-1.5 border"
              placeholder={translationsPage.inputTitle}
            />

            <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
              {numberPhone.length > 9 && fileList.length > 0 ? (
                <CustomButton
                  className="border p-2 w-full hover:border-orange-500 hover:text-orange-500 transition-all duration-300 ease-in-out"
                  onClick={handleFileSubmit}
                >
                  {translationsPage.submitBtn}
                </CustomButton>
              ) : (
                translationsPage.fieldCheck
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
