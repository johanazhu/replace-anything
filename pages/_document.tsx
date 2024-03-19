import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest"></link>
          <meta
            name="title"
            content="ReplaceAnything as you want: Ultra-high quality content replacement" />
          <meta
            name="description"
            content="replace-anything.fun is a free-to-use AI system. Use it for engaging conversations, gain insights, automate tasks, and witness the future of AI, all in one place." />
          <meta
            name="keywords"
            content="ai image editing, image element replacement, online photo editor, custom image processing, background removal tool, creative photo editing, advanced image technology, user-friendly editing platform, photo personalization, fast image processing, ReplaceAnything, AI photo customization, digital image editor, photo editor online, image editing software" />
          <link rel="canonical" href="https://replace-anything.fun/" />
          <meta name="robots" content="index, follow" />
          <meta
            property="og:description"
            content="A conversational AI system that listens, learns, and challenges" />
          <meta
            property="og:description"
            content="Replace you anything in seconds use AI."
          />
          <meta property="og:title" content="Replace Anything" />
          <meta
            name="twitter:description"
            content="Replace you anything in seconds use AI."
          />
          <meta
            property="og:image"
            content="https://www.replace-anything.fun/og-image.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@JOJOhanbo" />
          <meta name="twitter:title" content="Replace Anything" />
          <meta name="twitter:description" content="Replace you anything in seconds use AI" />
          <meta name="twitter:image" content="https://www.replace-anything.fun/og-image.png" />
          {
            process.env.NODE_ENV === 'production' && (
              <>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-FKCCWR6NB5"></script>
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FKCCWR6NB5');
          `,
                  }}
                />
                <script
                  async src="https://analytics.azhubaby.com/script.js"
                  data-website-id="eb36916b-0291-41fa-a57d-c26cb13c46e1"></script>
              </>
            )
          }

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
