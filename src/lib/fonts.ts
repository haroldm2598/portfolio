import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({
  weight: ["400", "600", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export const loraSoftBold = localFont({
  src: "../assets/fonts/Laro Soft Black.otf",
});

export const loraSoftSemibold = localFont({
  src: "../assets/fonts/Laro Soft Semi Bold.otf",
});

export const loraSoftMedium = localFont({
  src: "../assets/fonts/Laro Soft Medium.otf",
});
