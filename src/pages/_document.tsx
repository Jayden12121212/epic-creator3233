import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html database-url="/">
      <Head />
      <body>
        <div id="affiliateWrapper">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
};

export default Document;
