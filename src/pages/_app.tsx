import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Sora, SoraBold, SoraExtraBold} from '@/font'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        /* :root {
          --Sora-font: ${Sora.style.fontFamily};
          --Sora-bold-font: ${SoraBold.style.fontFamily}
          --Sora-ExtraBold-font: ${SoraExtraBold.style.fontFamily};
        } */
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
