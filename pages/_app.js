// import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/globals.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <title>NodeJs</title>
        <metadata name="keywords" content="nodejs" />
      </Head> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
