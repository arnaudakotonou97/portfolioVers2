import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Femi </title>
        <meta charSet="utf-8"/>
        <meta name="google-site-verification" content="XjjGg1wH-mQBt186CmOXy-kpQGFhwAF2bLsqtMq3eps" />
        <meta name="robots" content="index,follow" />
        <meta name="description" content="Hey, I'm Femi AKOTONOU. I'm a Frontend Developer and a UX Designer" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@FemiAkt"/>
        <meta name="twitter:creator" content="@FemiAkt"/>
        <meta property="og:title" content="Femi AKOTONOU"/>
        <meta property="og:description" content="Hey, I'm Femi AKOTONOU. I'm a Frontend Developer and a UX Designer"/>
        <meta property="og:url" content="https://femidev.com"/>
        <meta property="og:image" content="https://femidev.com/femi.PNG"/>
        <meta property="og:image:alt" content="Femi Dev"/>
        <meta property="og:image:secure_url" content="https://femidev.com/femi.PNG"/>
        <meta property="og:image:type" content="image/jpeg"/>
        <meta property="og:site_name" content="Femi AKOTONOU | FrontEnd Engineer"/>
        <link rel="canonical" href="https://femidev.com"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
