import localFont from "next/font/local";

/** Poppins Font */
const Poppins = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Poppins/Poppins-Regular.ttf",
      weight: "100",
      style: "thin",
    },
    {
      path: "../../public/assets/fonts/Poppins/Poppins-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/assets/fonts/Poppins/Poppins-Medium.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../../public/assets/fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "semi bold",
    },
    {
      path: "../../public/assets/fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-Poppins",
});

export { Poppins };
