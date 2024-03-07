import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Space_Mono } from "next/font/google";
const spaceMono = Space_Mono({subsets:['latin'],weight:'400'})
export default function App({ Component, pageProps }: AppProps) {
  return <main className={spaceMono.className}><Component {...pageProps} /></main>;
}
