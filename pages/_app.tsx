import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import '../styles/globals.css'


//레이아웃을 위한 _app.tsx
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Zutomayo</title>
        <meta charSet="utf-8" />
        <meta name="description" content="ZutomayoCloneCoding" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
