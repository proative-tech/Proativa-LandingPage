import Head from 'next/head';
import { Header } from '../components/Header';

import { Container, Wrapper, Content } from '../styles/pages/Blog';
import { Footer } from '../components/Footer';

export default function Index() {
  return (
    <>
      <Head>
        <title>Proative | Blog</title>
        <script src="https://cdn.privacytools.com.br/public_api/banner/autoblock/v2/W2lz812131.js?t=1" />
        <link
          rel="preload"
          href="https://cdn.privacytools.com.br/public_api/banner/style/W2lz812131.css?t=1"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://cdn.privacytools.com.br/public_api/banner/style/W2lz812131.css?t=1"
        />
        <script
          type="text/javascript"
          src="https://cdn.privacytools.com.br/public_api/banner/script/bottom/W2lz812131.js?t=1"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/images/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/images/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/images/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/images/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/images/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/images/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/images/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/images/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/images/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Wrapper>
        <Header noPaddingBottom noFixed bgColor="#fafafa" />
        <Content>
          <iframe src="https://blog.proativetec.com.br" title="Proative Blog" />
        </Content>
      </Wrapper>
      <Footer />
    </>
  );
}
