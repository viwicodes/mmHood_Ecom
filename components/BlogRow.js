import { Box } from "@mui/material";
import BlogRowEach from "./BlogRowEach";

function BlogRow() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "5%",
          flexWrap: "wrap",
          flex: "1 1 200",
          alignItems: "center",
          width: "100%",
          height: "60vh",
          marginBottom: "100px",
        }}
      >
        <Box
          className="flex justify-center items-center"
          sx={{ width: "30%", height: "50vh" }}
        >
          <BlogRowEach />
        </Box>
        <Box
          className="flex justify-center items-center"
          sx={{ width: "30%", height: "50vh" }}
        >
          <BlogRowEach />
        </Box>
        <Box
          className="flex justify-center items-center"
          sx={{ width: "30%", height: "50vh" }}
        >
          <BlogRowEach />
        </Box>
        
      </Box>
      <br />
    </>
  );
}

export default BlogRow;
