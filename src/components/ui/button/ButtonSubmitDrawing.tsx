'use client';

import * as React from 'react';
import CustomButton from './CustomButton';
import { PageProps } from '@/context/withStaticPathsAndProps';
import ModalWindow from '../modal-window/ModalWindow';

interface ButtonSubmitDrawingProps {
  className?: string;
  translations?: PageProps['translations'];
  lang?: PageProps['lang'];
}

const ButtonSubmitDrawing: React.FC<ButtonSubmitDrawingProps> = ({ translations, className }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <div>
      <CustomButton className={className} variant="send-btn" onClick={handleOpen}>
        {translations?.btnSend}
      </CustomButton>
      <ModalWindow open={open} setOpen={setOpen} translations={translations} />
    </div>
  );
};

export default ButtonSubmitDrawing;
