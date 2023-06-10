import { Box } from "@mui/material";
import Card from "@/components/Card";

function CardRow() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flex: "1 1 200",
          gap: "5%",
          alignItems: "center",
          padding: "100px",
          width: "100%",
          height: "60vh",
          marginBottom: "100px",
        }}
      >
        <Box
          className="flex justify-center items-center"
          sx={{ width: "30%", height: "70%" }}
        >
          <Card />
        </Box>
        <Box
          className="flex justify-center items-center"
          sx={{ width: "30%", height: "70%" }}
        >
          <Card />
        </Box>
        <Box
          className="flex justify-center items-center"
          sx={{ width: "30%", height: "70%" }}
        >
          <Card />
        </Box>
      </Box>
    </>
  );
}

export default CardRow;
