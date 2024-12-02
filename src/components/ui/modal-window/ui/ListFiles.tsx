import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Typography } from '@mui/material';
import CustomButton from '../../button/CustomButton';
import ClearIcon from '@mui/icons-material/Clear';
import { handleFileRemove } from '../utils/fileHandlers';

interface ListFilesProps {
  index: number;
  fileName: string;
  fileSize: number;
  setFileList: React.Dispatch<React.SetStateAction<File[]>>;
}

const ListFiles: React.FC<ListFilesProps> = ({ index, fileName, fileSize, setFileList }) => {
  function bytesToMegabytes(bytes: number) {
    if (typeof bytes !== 'number' || bytes < 0) {
      throw new Error('Input must be a non-negative number');
    }
    const megabytes = Math.round((bytes / (1024 * 1024)) * 100) / 100;
    return parseFloat(megabytes.toPrecision(3));
  }

  return (
    <li key={index} className="flex justify-between mt-1  items-center">
      <div className="flex items-center gap-2 w-full justify-between">
        <InsertDriveFileIcon />
        <Typography className="text-nowrap overflow-hidden w-1/2 text-ellipsis " variant="body2">
          {fileName}
        </Typography>
        <Typography variant="body2">{bytesToMegabytes(fileSize)} Mb</Typography>
        <CustomButton
          className="border p-1 text-sm hover:border-red-500 hover:text-red-500 transition-all duration-300 ease-in-out"
          onClick={() => handleFileRemove(index, setFileList)}
        >
          <ClearIcon />
        </CustomButton>
      </div>
    </li>
  );
};

export default ListFiles;
