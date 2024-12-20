import CookieIcon from '@mui/icons-material/Cookie';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Translations } from '../../../../locales/types';
import langUk from '../../../../locales/uk.json';

interface UserAgreementSnackbarProps {
  translations: Translations;
  lang: string;
}

const UserAgreementSnackbar: React.FC<UserAgreementSnackbarProps> = ({ translations, lang }) => {
  const translationPage = translations?.userAgreement.userAgreementSnackbar || langUk.userAgreement.userAgreementSnackbar;
  const [pageLoaded, setPageLoaded] = useState(false);
  const [accepted, setAccepted] = useState(false);

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
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'accept_user_agreement', {
        event_category: 'User Agreement',
        event_label: 'User accepted the agreement',
      });
    }
  };

  return (
    <div
      style={{ background: '#f1f1f1', boxShadow: `rgb(45, 45, 45) 0px 10px 30px`, color: '#000' }}
      className={`fixed bottom-3 left-1/2 transform -translate-x-1/2 z-[99] p-4 rounded-lg transition-transform duration-500 w-[90%] max-w-[600px] ${
        pageLoaded ? 'translate-y-0' : 'translate-y-[150%]'
      } md:max-w-[600px]`}
    >
      <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
        <CookieIcon style={{ fontSize: '70px', color: '#b36602' }} />
        <div className="w-full">
          <p className="text-sm md:text-base">
            {translationPage.description}{' '}
            <Link href={`/${lang}/user-agreement/`}>
              <span className="underline text-blue-600">{translationPage.link}</span>
            </Link>
            .
          </p>
          <button
            onClick={handleAccept}
            className="mt-3 w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors"
          >
            {translationPage.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAgreementSnackbar;
