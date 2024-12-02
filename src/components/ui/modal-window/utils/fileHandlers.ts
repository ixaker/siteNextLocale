export const handleFileChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setFileList: React.Dispatch<React.SetStateAction<File[]>>
) => {
  const files = event.target.files;
  if (files) {
    setFileList((prevFiles) => [...prevFiles, ...Array.from(files)]);
  } else {
    console.error('No files selected or input is invalid.');
  }
};

export const handleFileRemove = (
  index: number,
  setFileList: React.Dispatch<React.SetStateAction<File[]>>
) => {
  setFileList((prevFiles) => prevFiles.filter((_, i) => i !== index));
};

export const bytesToMegabytes = (bytes: number) => {
  if (typeof bytes !== 'number' || bytes < 0) {
    throw new Error('Input must be a non-negative number');
  }
  return parseFloat((bytes / (1024 * 1024)).toFixed(2));
};
