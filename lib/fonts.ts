import { Outfit, DM_Sans, Allura, Poppins, Urbanist } from "next/font/google";

export const poppins = Poppins({
  variable: "--font-poppins",
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const urbanist = Urbanist({
  variable: "--font-urbanist",
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const outfit = Outfit({
  variable: "--font-outfit",
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
