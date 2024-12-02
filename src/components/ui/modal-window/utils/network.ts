export const handleFileSubmit = async (
  fileList: File[],
  setStatusMessage: React.Dispatch<React.SetStateAction<string>>,
  setFileList: React.Dispatch<React.SetStateAction<File[]>>,
  numberPhone: string
) => {
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
