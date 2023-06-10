import ResponsiveAppBar from "@/components/AppBar";
import CardRow from "@/components/CardRow";
import CategoryCards from "@/components/CategoryCards";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      {/* <ResponsiveAppBar /> */}
      <Hero />
      <CategoryCards />
      <Box className="flex justify-center items-center mb-[50px]">
        <h1 className="text-[30px] text-text_black font-bold">TOP SELLERS</h1>
      </Box>
      <CardRow />
      <Box className="flex justify-center items-center">
        <h1 className="text-[30px] text-text_black font-bold">TESTIMONIALS</h1>
      </Box>
      <Testimonials />
      <Footer />
    </>
  );
}
