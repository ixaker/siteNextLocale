import { Box } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HeaderLogo = () => {
  const router = useRouter();
  const { asPath } = router;
  const currentLang = asPath.split('/')[1];
  return (
    <Link href={`/${currentLang}`}>
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
