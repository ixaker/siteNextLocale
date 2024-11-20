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
          sm: '150px',
          md: '200px',
          lg: '250px',
        },
        height: 'auto',
      }}
    />
  );
};

export default HeaderLogo;
