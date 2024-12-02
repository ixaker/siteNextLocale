export const handleDragOver = (
  event: React.DragEvent<HTMLDivElement>,
  setDrag: React.Dispatch<React.SetStateAction<boolean>>
) => {
  event.preventDefault();
  event.stopPropagation();
  setDrag(true);
};

export const handleDrop = (
  event: React.DragEvent<HTMLDivElement>,
  setFileList: React.Dispatch<React.SetStateAction<File[]>>,
  setDrag: React.Dispatch<React.SetStateAction<boolean>>
) => {
  event.preventDefault();
  event.stopPropagation();
  setDrag(false);
  if (event.dataTransfer.files.length > 0) {
    setFileList((prevFiles) => [...prevFiles, ...Array.from(event.dataTransfer.files)]);
  }
};

export const dragLeaveHandler = (
  event: React.DragEvent<HTMLDivElement>,
  setDrag: React.Dispatch<React.SetStateAction<boolean>>
) => {
  event.preventDefault();
  setDrag(false);
};
