import { CookiesAlert } from '../components/Cookies';
import GlobalStyles from '../styles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <CookiesAlert />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
