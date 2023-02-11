import Navbar from "../components/Navbar";
import "../styles/index.scss";
import { Cairo } from "@next/font/google";

const cairo = Cairo({ subsets: ["latin"] });

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <main className={cairo.className}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
