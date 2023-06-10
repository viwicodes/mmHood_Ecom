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
            disableElevation
            className="border-2 border-solid border-text_black text-text_black uppercase"
          >
            All
          </Button>
          <Button
            disableElevation
            className="border-2 border-solid border-text_black text-text_black uppercase"
          >
            Home Learning
          </Button>
          <Button
            disableElevation
            className="border-2 border-solid border-text_black text-text_black uppercase"
          >
            Activities
          </Button>
          <Button
            disableElevation
            className="border-2 border-solid border-text_black text-text_black uppercase"
          >
            Parenting
          </Button>
          <Button
            disableElevation
            className="border-2 border-solid border-text_black text-text_black uppercase"
          >
            Phonics
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
