import { Box } from '@mui/material';

const HeaderLogo = () => {
  return (
    <Box
      component="img"
      src="/logo.png"
      alt="Logo"
      sx={{
        width: {
          xs: '120px',
          sm: '130px',
          md: '150px',
          lg: '180px',
        },
        height: 'auto',
      }}
    />
  );
};

export default HeaderLogo;
