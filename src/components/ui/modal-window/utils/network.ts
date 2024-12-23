export const handleFileSubmit = async (
  fileList: File[],
  setStatusMessage: React.Dispatch<React.SetStateAction<string>>,
  setFileList: React.Dispatch<React.SetStateAction<File[]>>,
  numberPhone: string,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const formData = new FormData();
  formData.append('token', '8355f5423b072c553809f09be3b7ca5fb0f7555c');
  formData.append('phone', numberPhone);

  fileList.forEach((file, index) => {
    formData.append(`attachment[${index}]`, file);
    window.gtag('event', `Прикреплен файл:${file.name}, размер фалйла:${file.size}`, { event_category: 'Button' });
  });

  setStatusMessage('loading');

  if (typeof window.gtag === 'function') {
    window.gtag('event', `conversion`, { send_to: 'AW-16815849182/UepdCK6LzfUZEN79tdI-', value: 1.0, currency: 'UAH' });
  }

  try {
    const response = await fetch('/mail.php', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (response.ok && result.success) {
      setStatusMessage('ок');
      setFileList([]);
      setOpen(false);
      setOpenAlert(true);
    } else {
      setStatusMessage(`error'}`);
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      setStatusMessage(`error`);
    } else {
      setStatusMessage('unknown error');
    }
  }
};
