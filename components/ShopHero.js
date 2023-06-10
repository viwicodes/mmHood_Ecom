import { Box } from "@mui/material";

function ShopHero() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "60vh",
          backgroundColor: "pink",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            width: "50%",
            height: "100%",
          }}
        >
          <img
            src="/assets/shop_hero.png"
          />
        </Box>
      </Box>
    </>
  );
}

export default ShopHero;
