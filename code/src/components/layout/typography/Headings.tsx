import { Typography, TypographyProps } from "@mui/material";
import React from "react";

interface HeadingsProps extends TypographyProps {
  title: string;
  color: string;
}

const Headings: React.FC<HeadingsProps> = ({ title, color, ...props }) => {
  return (
    <Typography
      sx={{ textDecoration: "underline", textTransform: "upperCase" }}
      variant="h4"
      color={color}
      {...props}
    >
      {title}
    </Typography>
  );
};

export default Headings;
