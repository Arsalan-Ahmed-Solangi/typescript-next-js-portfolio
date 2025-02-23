import { Box, Typography } from "@mui/material";
import TypingAnimation from "../animation/TypingAnimation";
import HeaderSectionOneSocialIcons from "./HeaderSectionOneSocialIcons";
import themeColors from "@/theme/colors";

export interface AboutData {
  name: string;
  contact_no: string;
  email: string;
  location: string;
  headLine: string;
  role: string[];
}

const aboutData: AboutData = {
  name: "Arsalan Ahmed",
  contact_no: "+923043059147",
  email: "ahmedsolangi347@gmail.com",
  location: "Lahore, Pakistan",
  headLine: `🔥 Full-Stack & Cloud Developer with 4+ Years of Excellence | BS Software Engineering Silver Medalist`,
  role: [
    "Software Engineer",
    "Full Stack Developer",
    "CEO SmartLearningApps",
    "Passionate Front-End Developer",
  ],
};

const HeaderSectionOne = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" color={themeColors.main.white}>
        Hi, I'm {aboutData.name}
      </Typography>
      <Typography variant="h6" fontWeight="bold" color={"orange"}>
        <TypingAnimation roles={aboutData.role} />
      </Typography>
      <Typography
        variant="body1"
        color={themeColors.main.white}
        px={10}
        sx={{
          maxWidth: 600,
          mx: "auto",

          fontSize: 14,
        }}
      >
        {aboutData.headLine}
      </Typography>
      <HeaderSectionOneSocialIcons />
    </Box>
  );
};

export default HeaderSectionOne;
