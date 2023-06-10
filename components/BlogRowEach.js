import { Box } from "@mui/material";

function BlogRowEach() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "column",
          border: "1px solid black",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <img src="/assets/toy1.jpg" />
        </Box>
        <h1 className="text-[20px] uppercase text-dark pt-[20px]">
          what are cvc words?
        </h1>
        <p className="text-[15px] uppercase text-text_black pt-[20px]">
          priyanka | author | 4mins
        </p>
      </Box>
    </>
  );
}

export default BlogRowEach;
