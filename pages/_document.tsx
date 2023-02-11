import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ar">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="تعلم معنا. في منصة تعلم نقدم لك افضل الدورات في مختلف المجالات و من افضل المعلمين"
        />
      </Head>

      <body dir="rtl">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
