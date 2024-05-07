import { RootLayout } from "@/components";
import { withReduxWrapper } from "@/createStore";
import type { AppProps } from "next/app";

import "react-loading-skeleton/dist/skeleton.css";
import "@/scss/index.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
};

export default withReduxWrapper.withRedux(App);
