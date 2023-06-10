import FavoriteIcon from "@mui/icons-material/Favorite";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Box } from "@mui/material";

function Footer() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding:"100px",
          width: "100%",
        }}
      >
        <h1 className="text-text_black text-[20px] capitalize flex justify-center items-center">
          developed with <FavoriteIcon className="mx-1" /> by
          <span className="uppercase text-[20px] text-blue font-black mx-1">
            viwstudios
          </span>{" "}
          {/* <span className="font-black text-[20px]"> © </span> */}
          <CopyrightIcon />
          <span className="uppercase text-[20px] text-blue font-black mx-1">
            millennial mommyhood
          </span>
          . All rights reserved.
        </h1>
      </Box>
    </>
  );
}

export default Footer;
