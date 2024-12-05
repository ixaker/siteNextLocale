import { Backdrop, Box, Button, CircularProgress, Fade, Modal, Typography } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { PageProps } from '@/context/withStaticPathsAndProps';
import langUk from '../../../../locales/uk.json';
import { useEffect, useState } from 'react';
import { dragLeaveHandler, handleDragOver, handleDrop } from './utils/dragHandlers';
import { handleFileSubmit } from './utils/network';
import ListFiles from './ui/ListFiles';
import FileUploadForm from './ui/FileUploadForm';
import DisabledButton from './ui/DisabledButton';
import CustomizationAlert from './ui/CustomizationAlert';
import CloseIcon from '@mui/icons-material/Close';

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
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  const [overallSize, setOverallSize] = useState<number>(0);
  const calculateTotalSize = (fileList: File[]) => {
    const totalSize = fileList.reduce((total, file) => total + file.size, 0);
    setOverallSize(totalSize);
  };

  useEffect(() => {
    calculateTotalSize(fileList);
  }, [fileList]);

  const translationsPage = translations?.modalInfo || langUk.modalInfo;

  const handleClose = () => setOpen(false);

  useEffect(() => {
    setDrag(false);
  }, [fileList]);

  let message = null;

  function bytesToMegabytes(bytes: number) {
    if (typeof bytes !== 'number' || bytes < 0) {
      throw new Error('Input must be a non-negative number');
    }
    const megabytes = Math.round((bytes / (1024 * 1024)) * 100) / 100;
    return parseFloat(megabytes.toPrecision(2));
  }

  const resultSize = bytesToMegabytes(overallSize);

  if (statusMessage === 'ok') {
    message = <p className="text-green">Відправлено</p>;
  } else if (statusMessage === 'error') {
    message = <p className="text-[red]">Сталася помилка</p>;
  } else if (statusMessage === 'unknown error') {
    message = <p className="text-[red]">Сталася невідома помилка</p>;
  } else if (statusMessage === 'loading') {
    message = <CircularProgress sx={{ color: '#c43c1e' }} />;
  }
  return (
    <>
      <CustomizationAlert
        message={translations?.messageInformation}
        openAlert={openAlert}
        setOpenAlert={setOpenAlert}
      />
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
              <div className="absolute"></div>
              {translationsPage.title}
            </Typography>
            <button className="absolute top-[5px] right-[5px]" onClick={() => setOpen(false)}>
              <CloseIcon sx={{ color: 'black', fontSize: '30  px' }} />
            </button>
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
                {resultSize > 20.0 ? (
                  <Typography variant="body2" sx={{ color: 'red', marginTop: '20px' }}>
                    {fileList.length > 1
                      ? 'Розмір файлів перевищує максимальний ліміт у 20 Мб'
                      : 'Розмір файлу перевищує максимальний ліміт у 20 Мб.'}
                  </Typography>
                ) : (
                  ''
                )}
              </ul>
            )}
            <input
              type="tel"
              maxLength={16}
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
              {resultSize < 20.0 && numberPhone.length > 9 && fileList.length > 0 ? (
                <Button
                  onClick={() =>
                    handleFileSubmit(
                      fileList,
                      setStatusMessage,
                      setFileList,
                      numberPhone,
                      setOpen,
                      setOpenAlert
                    )
                  }
                  sx={{
                    color: '#fff',
                    fontWeight: '500',
                    backgroundColor: '#c43c1e',
                    width: '100%',
                    ':hover': { bgcolor: '#9e2a1f' },
                    transition: 'all 0.3s ease-in-out',
                  }}
                  variant="outlined"
                >
                  {translationsPage.submitBtn}
                </Button>
              ) : (
                <DisabledButton textBtn={translationsPage.submitBtn} />
              )}
            </Box>
            <div className="mt-4 flex justify-center items-center">{message}</div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalWindow;
