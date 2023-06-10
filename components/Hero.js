import { Box, Grid, Stack, Button } from "@mui/material";
import React from "react";

function Hero() {
  return (
    <>
      <Box
        className="bg-blue"
        sx={{
          height: "90vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {/* Hero Right Start */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // flexDirection: "column",
            width: "50%",
          }}
        >
          <Box className="flex flex-col w-[70%]">
            <p className="font-mont italic text-[30px] uppercase font-medium text-text_black pb-2">
              shipping all india
            </p>
            <h1 className="font-mont text-[50px] uppercase font-black text-text_black leading-[50px] pb-2">
              Discover the Perfect Toys for Your Little Ones!
            </h1>
            <p className="font-mont italic text-[30px] uppercase font-medium text-text_black pb-5">
              Ignite Their Imagination
            </p>
            {/* bg-[#FFD7A6] text-text_black  */}
            <Stack spacing={2} direction="row">
              <Box
                disableElevation
                className="font-mont font-semibold px-8 py-3 rounded-2xl"
                sx={{
                  backgroundColor:"#FFD7A6",
                  color:"#5F5E5E",
                  display: {
                    lg: "block",
                    md: "block",
                    sm: "none",
                    xs: "none",
                  },
                  ":hover": {
                    bgcolor: "pink",
                    color: "text_black",
                  },
                }}
                variant="contained"
              >
                Get Started
              </Box>
            </Stack>
          </Box>
        </Box>
        {/* Hero Right End */}

        {/* Right Hero start */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignIterm: "center",
            width: "50%",
            height: "100%",
          }}
        >
          <img src="/assets/main_hero.png" />
        </Box>
        {/* Right Hero End */}
      </Box>
    </>
  );
}

export default Hero;
