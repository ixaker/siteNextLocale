import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import CustomButton from './CustomButton';
import { TextField } from '@mui/material';
import langUk from '../../../../locales/uk.json';
import { PageProps } from '@/context/withStaticPathsAndProps';

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
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = React.useState<File | null>(null);
  const [statusMessage, setStatusMessage] = React.useState<string>('');

  console.log('File', file);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const translationsPage = translations?.modalInfo || langUk.modalInfo;
  const [numberPhone, setNumberPhone] = React.useState('');

  React.useEffect(() => {
    setNumberPhone(translationsPage.numberPhone);
  }, [lang]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
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
      setFile(event.dataTransfer.files[0]);
    }
  };

  const handleFileRemove = () => {
    setNumberPhone('');
    setFile(null);
  };

  const handleFileSubmit = async () => {
    if (!file) {
      setStatusMessage('No file selected.');
      return;
    }

    const formData = new FormData();
    formData.append('token', '8355f5423b072c553809f09be3b7ca5fb0f7555c');
    formData.append('phone', numberPhone);
    formData.append('attachment', file);

    setStatusMessage('Sending file...');

    try {
      const response = await fetch('/mail.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatusMessage('File sent successfully!');
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

            {/* File drop area */}
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
              {file ? (
                <Typography variant="body2" color="textSecondary">
                  {translationsPage.fileName} {file.name}
                </Typography>
              ) : (
                <Typography variant="body2" color="textSecondary">
                  {translationsPage.fileName}
                </Typography>
              )}
              <input type="file" id="file-upload" style={{ display: 'none' }} onChange={handleFileChange} />
              <CustomButton
                className="mt-5 border p-2 hover:border-orange-500 hover:text-orange-500 transition-all duration-300 ease-in-out"
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                {translationsPage.descriptionBtn}
              </CustomButton>
            </Box>

            <Typography id="transition-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
              {translationsPage.limitation}
            </Typography>

            <TextField
              id="outlined-textarea"
              label={translationsPage.inputTitle}
              multiline
              className="w-full mt-5"
              sx={{ color: 'red', placeContent: 'red' }}
              value={numberPhone}
              onChange={(e) => setNumberPhone(e.target.value)}
            />

            {/* File actions */}
            <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
              {numberPhone.length > 8 && file ? (
                <div>
                  <CustomButton
                    className="border p-2 w-full  hover:border-orange-500 hover:text-orange-500 transition-all duration-300 ease-in-out"
                    onClick={handleFileSubmit}
                  >
                    {translationsPage.submitBtn}
                  </CustomButton>
                  <CustomButton
                    className="border p-2 w-full  hover:border-orange-500 hover:text-orange-500 mt-5 transition-all duration-300 ease-in-out"
                    onClick={handleFileRemove}
                  >
                    {translationsPage.removeBtn}
                  </CustomButton>
                </div>
              ) : (
                'Додайте файл та вкажіть мобільний номер телефону'
              )}
            </Box>

            {/* Status message */}
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
