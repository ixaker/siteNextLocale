import CookieIcon from '@mui/icons-material/Cookie';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PageProps } from '@/context/withStaticPathsAndProps';

const UserAgreementSnackbar: React.FC<PageProps> = (pageProps) => {
  const translationPage = pageProps.translations?.userAgreement.userAgreementSnackbar || '';
  const [pageLoaded, setPageLoaded] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const lang = pageProps.lang;

  useEffect(() => {
    setAccepted(localStorage.getItem('userAgreementAccepted') === 'true');
    if (!accepted) {
      const timeoutId = setTimeout(() => {
        setPageLoaded(true);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [accepted]);

  const handleAccept = () => {
    setPageLoaded(false);
    localStorage.setItem('userAgreementAccepted', 'true');
  };

  return (
    <div
      className={`text-black fixed bottom-3 left-1/2 transform -translate-x-1/2 max-w-[600px] z-[99] bg-[#fce4ec] shadow-lg p-4 rounded-lg border transition-transform duration-500 ${
        pageLoaded ? 'translate-y-0' : 'translate-y-[150%]'
      }`}
    >
      <div className="flex items-center gap-4">
        <CookieIcon fontSize="large" />
        <div>
          <p className="text-sm">
            {translationPage.description}{' '}
            <Link href={`/${lang}/user-agreement/`} className="underline text-blue-600">
              {translationPage.link}
            </Link>
            .
          </p>
          <button onClick={handleAccept} className="mt-3 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors">
            {translationPage.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAgreementSnackbar;
