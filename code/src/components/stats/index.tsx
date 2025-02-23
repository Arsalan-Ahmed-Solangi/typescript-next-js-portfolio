import themeColors from "@/theme/colors";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import StatsBox from "./StatsBox";

function StatsComp() {
  return (
    <Box display="flex" justifyContent={"center"} sx={{ marginTop: 10 }}>
      <Box
        bgcolor={themeColors.main.secondary}
        width={"50%"}
        display={"flex"}
        justifyContent={"center"}
        p={1}
        borderRadius={10}
      >
        <StatsBox />
      </Box>
    </Box>
  );
}

export default StatsComp;
