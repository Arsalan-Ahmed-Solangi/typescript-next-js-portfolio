import themeColors from "@/theme/colors";
import { Box } from "@mui/material";
import React from "react";

const HeaderSectionTwo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow: `0px 0px 2px 2px ${themeColors.main.secondary}`,
          width: 300,
          height: 300,
          justifyContent: "center",
        }}
      >
        <img
          src="/images/profile.png"
          alt="Profile"
          style={{
            width: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeaderSectionTwo;
