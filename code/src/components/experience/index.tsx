"use client";
import {
  useMediaQuery,
  useTheme,
  Box,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import Headings from "../layout/typography/Headings";
import themeColors from "@/theme/colors";

const experiences = [
  {
    title: "Senior Software Engineer - Salesflo Pvt. Ltd.",
    date: "August 2023 - Present",
    description:
      "Senior Software Engineer at Salesflo with expertise in MERN Stack, Laravel, and AWS. Developed multi-stack solutions—including an award-winning AI-based GIS for enhanced data analysis.",
    url: "https://www.salesflo.com",
  },
  {
    title: "Associate Software Engineer - Salesflo Pvt. Ltd",
    date: "Aug 2022 - Aug 2023",
    description:
      "Associate Software Engineer skilled in Laravel—Innovate Award winner for an AI-powered GIS system.",
    url: "https://www.salesflo.com",
  },
  {
    title: "Full Stack Engineer - Multisyn Tech Pvt Ltd",
    date: "March 2022 - Aug 2022",
    description:
      "Full Stack Developer focusing on Laravel ecommerce, Node.js, React, and Next.js applications.",
    url: "https://www.linkedin.com/company/multisyn-tech/",
  },
  {
    title: "Trainee Consultant - Sapphire Consulting Services Ltd",
    date: "Aug 2021 - March 2022",
    description:
      "Junior PHP Developer using Laravel and CodeIgniter for secure and scalable web solutions.",
    url: "https://sapphire.co/",
  },
];

const ExperienceTimeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      mt={5}
      id="experience"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Headings title="Experience" color={themeColors.main.white} />

      <Box
        width="80%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}
        mt={3}
      >
        {experiences.map((exp, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              width: "100%",
              maxWidth: "600px",
              height: "12rem", // 12x12 size
              p: isMobile ? 1 : 2,
              bgcolor: themeColors.main.primary,
              color: themeColors.main.white,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              color="orange"
              fontSize={isMobile ? 10 : "inherit"}
            >
              <Link
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                underline="none"
              >
                {exp.title}
              </Link>
            </Typography>
            <Typography variant="subtitle2" fontSize={isMobile ? 8 : "inherit"}>
              {exp.date}
            </Typography>
            <Typography fontSize={isMobile ? 10 : 12}>
              {exp.description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default ExperienceTimeline;
