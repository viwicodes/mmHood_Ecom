import { Box, Stack, Button } from "@mui/material";
import BlogRow from "./BlogRow";

function CommunityLanding() {
  return (
    <>
      <Box className="flex justify-center items-center my-[50px]">
        <h1 className="text-[30px] text-text_black font-bold uppercase">
          insight and advice from our experts
        </h1>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "10vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          spacing={2}
          direction="row"
          className="flex justify-between items-center flex-row w-[50%]"
        >
          <Button
            sx={{
              border: "2px solid #5F5E5E",
              color: "#5F5E5E",
            }}
            disableElevation
            className="uppercase"
          >
            All
          </Button>
          <Button
            sx={{
              border: "2px solid #5F5E5E",
              color: "#5F5E5E",
            }}
            disableElevation
            className="uppercase"
          >
            home learning
          </Button>
          <Button
            sx={{
              border: "2px solid #5F5E5E",
              color: "#5F5E5E",
            }}
            disableElevation
            className="uppercase"
          >
            activities
          </Button>
          <Button
            sx={{
              border: "2px solid #5F5E5E",
              color: "#5F5E5E",
            }}
            disableElevation
            className="uppercase"
          >
            parenting
          </Button>
          <Button
            sx={{
              border: "2px solid #5F5E5E",
              color: "#5F5E5E",
            }}
            disableElevation
            className="uppercase"
          >
            phonics
          </Button>
        </Stack>
      </Box>

      {/* Blog Space */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingX: "100px",
        }}
      >
        <BlogRow />
      </Box>
    </>
  );
}

export default CommunityLanding;
