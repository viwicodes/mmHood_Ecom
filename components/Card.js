import { Box, Rating } from "@mui/material";

function Card() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "column",
          border: "1px solid black",
          borderRadius: "30px",
        }}
      >
        <img className="rounded-[30px]" src="/assets/toy1.jpg" />
        <Box
          sx={{
            padding: "20px",
          }}
        >
          <h1 className="text-[30px] mb-[20px]">Awesome Toys for Kids</h1>
          <Rating
            value={3}
            name="read-only"
            size="large"
            className="mb-[20px] text-[40px]"
          />
          <h2 className="text-[25px]">2,500$</h2>
        </Box>
      </Box>
    </>
  );
}

export default Card;
