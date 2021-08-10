import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { CookiesAlert } from '../components/Cookies';
import { FloatButton } from '../components/FloatButton';
import GlobalStyles from '../styles';

function MyApp({ Component, pageProps }) {
  const [isFloatActive, setIsFloatActive] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (router.asPath.indexOf('blog') === -1) {
      setIsFloatActive(true);
    } else {
      setIsFloatActive(false);
    }
  }, [router.asPath]);

  return (
    <>
      <Component {...pageProps} />
      {isFloatActive && <FloatButton />}
      <CookiesAlert />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
