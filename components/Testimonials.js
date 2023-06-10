import { Box } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

function Testimonials() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Left Arrow */}
        <Box
          sx={{
            width: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <ChevronLeftIcon />
        </Box>
        {/* Middle Content */}
        <Box
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {/* Image box */}
          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="rounded-3xl w-[70%]"
              src="/assets/testimonial1.jpg"
            />
          </Box>
          {/* Testimonial content */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* <Box className="flex w-[100%] p-0 m-0">
              <FormatQuoteIcon className="scale-[-1] text-[60px] text-lavender p-0 m-0" />
            </Box> */}
            <p className="text-[30px] text-text_black">
              I highly recommend this ecom website for anyone looking to buy
              toys for their kids. The user-friendly interface, extensive
              selection, and top-notch customer service make it a standout
              choice. My experience has been nothing short of fantastic!
            </p>
            <Box className="flex flex-col items-end w-[100%]">
              <h1 className="text-[30px] text-text_black font-bold">
                ANDGELINA, PARENT
              </h1>
            </Box>
          </Box>
        </Box>
        {/* Right Arrow */}
        <Box
          sx={{
            width: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <ChevronRightIcon />
        </Box>
      </Box>
    </>
  );
}

export default Testimonials;
