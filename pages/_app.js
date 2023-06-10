import "@/styles/globals.css";
import ResponsiveAppBar from "@/components/AppBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ResponsiveAppBar />
      <Component {...pageProps} />
    </>
  );
}
