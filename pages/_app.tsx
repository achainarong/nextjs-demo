import "../styles/globals.css";
import type { AppProps } from "next/app";
import PlausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider
      domain="demo.achainarong.com"
      selfHosted=true
      customDomain="https://analytics.achainarong.com"
    >
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp;
