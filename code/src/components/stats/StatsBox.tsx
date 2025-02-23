"use client";
import themeColors from "@/theme/colors";
import {
  Download,
  PunchClock,
  Coffee,
  EmojiEventsTwoTone,
} from "@mui/icons-material";
import { Box, Typography, Grid, useMediaQuery, Divider } from "@mui/material";
import React from "react";

const StatsBox = ({
  icon: Icon,
  value,
  title,
}: {
  icon: any;
  value: string;
  title: string;
}) => {
  return (
    <Box textAlign="center" color={themeColors.main.white}>
      <Icon />
      <Typography variant="body1" fontWeight="bold">
        {value}
      </Typography>
      <Typography fontSize={12}>{title}</Typography>
    </Box>
  );
};

const StatsContainer = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const statsData = [
    { icon: PunchClock, value: "NAN", title: "Hours of Work" },
    { icon: Download, value: "50000+", title: "Lines of code" },
    { icon: EmojiEventsTwoTone, value: "5+", title: "Awards" },
    { icon: Coffee, value: "5/Day", title: "Cups of Coffee" },
  ];

  return isMobile ? (
    <Grid container spacing={2} justifyContent="center">
      {statsData.map((stat, index) => (
        <Grid item xs={12} key={index}>
          <StatsBox icon={stat.icon} value={stat.value} title={stat.title} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Box display="flex" justifyContent="center" alignItems="center" gap={5}>
      {statsData.map((stat, index) => (
        <React.Fragment key={index}>
          {index !== 0 && (
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: themeColors.main.white }}
            />
          )}
          <StatsBox icon={stat.icon} value={stat.value} title={stat.title} />
        </React.Fragment>
      ))}
    </Box>
  );
};

export default StatsContainer;
