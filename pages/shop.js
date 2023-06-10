import CardRow from "@/components/CardRow";
import Footer from "@/components/Footer";
import ShopHero from "@/components/ShopHero";
import { Box } from "@mui/material";

function shop() {
  return (
    <>
      <ShopHero />
      <Box className="flex justify-center items-center my-[50px]">
        <h1 className="text-[30px] text-text_black font-bold">TOP SELLERS</h1>
      </Box>
      <CardRow />
      <CardRow />
      <Footer />
    </>
  );
}

export default shop;
