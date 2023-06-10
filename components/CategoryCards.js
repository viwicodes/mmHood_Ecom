import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


function CategoryCards() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "100px",
        width: "100%",
        height: "60vh",
      }}
    >
      <Box
        className="bg-pink flex justify-center items-center"
        sx={{ width: "30%", height: "70%" }}
      >
        <h1 className="text-[30px] text-text_black font-bold">TOYS</h1>
      </Box>
      <Box
        className="bg-green flex justify-center items-center"
        sx={{ width: "30%", height: "70%" }}
      >
        <h1 className="text-[30px] text-text_black font-bold">COURSES</h1>
      </Box>
      <Box
        className="bg-yellow flex justify-center items-center"
        sx={{ width: "30%", height: "70%" }}
      >
        <h1 className="text-[30px] text-text_black font-bold">BLOGS</h1>
      </Box>
    </Box>
  );
}

export default CategoryCards;
