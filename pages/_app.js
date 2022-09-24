import "../styles/style.scss";
import Head from "next/head";
import { Provider } from "react-redux";
// import store from "../store/index";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Online Marketplace in Bangladesh: Walcart.com</title>
     
      </Head>
      {/* <Provider store={store}> */}
        <Component {...pageProps} />
      {/* </Provider> */}
    </>
  );
}

export default MyApp;
