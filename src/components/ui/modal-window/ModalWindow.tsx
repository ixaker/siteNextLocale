import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { PageProps } from '@/context/withStaticPathsAndProps';
import langUk from '../../../../locales/uk.json';
import { useEffect, useState } from 'react';
import { dragLeaveHandler, handleDragOver, handleDrop } from './utils/dragHandlers';
import { handleFileSubmit } from './utils/network';
import ListFiles from './ui/ListFiles';
import FileUploadForm from './ui/FileUploadForm';
import DisabledButton from './ui/DisabledButton';

interface ModalWindowProps {
  open: boolean;
  translations?: PageProps['translations'] | undefined;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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

const ModalWindow: React.FC<ModalWindowProps> = ({ open, translations, setOpen }) => {
  const [drag, setDrag] = useState(false);
  const [fileList, setFileList] = useState<File[]>([]);
  const [numberPhone, setNumberPhone] = useState('');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const translationsPage = translations?.modalInfo || langUk.modalInfo;

  const handleClose = () => setOpen(false);

  useEffect(() => {
    setDrag(false);
  }, [fileList]);

  return (
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
          <Typography id="transition-modal-description" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
            {translationsPage.title}
          </Typography>

          <div
            style={{
              border: drag ? '2px dashed #c43c1e' : '2px dashed #ccc',
              marginTop: '20px',
              textAlign: 'center',
              position: 'relative',
              zIndex: 99,
            }}
            onDragOver={(event) => handleDragOver(event, setDrag)}
            onDrop={(event) => handleDrop(event, setFileList, setDrag)}
          >
            {drag ? (
              <div onDragLeave={(e) => dragLeaveHandler(e, setDrag)} className="relative z-10">
                <div className="relative z-10 h-[144px]"></div>
                <CloudDownloadIcon className="size-[86px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[0] text-[#c43c1e]" />
              </div>
            ) : (
              <FileUploadForm
                limitation={translationsPage.limitation}
                setFileList={setFileList}
                title={translationsPage.dropFile}
                txtBtn={translationsPage.descriptionBtn}
              />
            )}
          </div>

          {fileList.length > 0 && (
            <ul className="mt-2">
              {fileList.map((file, index) => (
                <ListFiles
                  fileName={file.name}
                  fileSize={file.size}
                  index={index}
                  setFileList={setFileList}
                  key={index}
                />
              ))}
            </ul>
          )}
          <input
            type="number"
            value={numberPhone}
            onChange={(e) => setNumberPhone(e.target.value)}
            style={{
              backgroundColor: 'white',
              borderRadius: '5px',
              color: 'black',
            }}
            className="w-full mt-4 text-[16px] p-1.5 border"
            placeholder={translationsPage.inputTitle}
          />

          <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
            {numberPhone.length > 9 && fileList.length > 0 ? (
              <Button
                onClick={() => handleFileSubmit(fileList, setStatusMessage, setFileList, numberPhone)}
                sx={{
                  color: '#000',
                  fontWeight: '500',
                  backgroundColor: '#c43c1e',
                  width: '100%',
                  ':hover': { color: '#fff', bgcolor: '#9e2a1f' },
                  transition: 'all 0.3s ease-in-out',
                }}
                variant="outlined"
              >
                {translationsPage.submitBtn}
              </Button>
            ) : (
              <DisabledButton
                fileList={fileList}
                numberPhone={numberPhone}
                setFileList={setFileList}
                setStatusMessage={setStatusMessage}
                textBtn={translationsPage.submitBtn}
              />
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
  );
};

export default ModalWindow;
