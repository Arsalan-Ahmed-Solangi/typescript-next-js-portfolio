import React from "react";
import Box from "@mui/material/Box";
import themeColors from "@/theme/colors";

const Image = ({
  src = "/images/profile.png",
  alt = "Profile",
  size = 200,
}) => {
  return (
    <Box
      sx={{
        margin: 2,
        borderRadius: "50%",
        overflow: "hidden",
        boxShadow: `0px 0px 2px 2px ${themeColors.main.secondary}`,
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          objectFit: "contain",
        }}
      />
    </Box>
  );
};

export default Image;
