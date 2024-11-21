import { Box } from '@mui/material';
import Link from 'next/link';

const HeaderLogo = () => {
  return (
    <Link href="/">
      <Box
        component="img"
        src="/logo.png"
        alt="Logo"
        sx={{
          width: {
            xs: '120px',
            sm: '130px',
            md: '160px',
            lg: '200px',
          },
          height: 'auto',
        }}
      />
    </Link>
  );
};

export default HeaderLogo;
