import { Button, Typography } from '@mui/material';
import { handleFileChange } from '../utils/fileHandlers';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface FileUploadFormProps {
  title: string;
  setFileList: React.Dispatch<React.SetStateAction<File[]>>;
  txtBtn: string;
  limitation: string;
}

const FileUploadForm: React.FC<FileUploadFormProps> = ({ title, setFileList, txtBtn, limitation }) => {
  return (
    <div className="p-4">
      <Typography variant="body2" color="textSecondary">
        {title}
      </Typography>
      <input
        type="file"
        id="file-upload"
        style={{ display: 'none' }}
        multiple
        onChange={(event) => handleFileChange(event, setFileList)}
      />
      <Button
        className="text-[white]"
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        sx={{
          bgcolor: '#c43c1e',
          ':hover': { bgcolor: '#9e2a1f' },
          transition: 'all 0.3s ease-in-out',
          marginTop: '16px',
          color: 'white',
        }}
        onClick={() => document.getElementById('file-upload')?.click()}
      >
        {txtBtn}
      </Button>

      <Typography id="transition-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
        {limitation}
      </Typography>
    </div>
  );
};

export default FileUploadForm;
