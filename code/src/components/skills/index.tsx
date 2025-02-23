import themeColors from "@/theme/colors";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Headings from "../layout/typography/Headings";

const skills = [
  { label: "Html/CSS" },
  { label: "Javascript" },
  { label: "React" },
  { label: "Next JS" },
  { label: "Node JS" },
  { label: "Express JS" },
  { label: "Mern Stack" },
  { label: "Typescript" },
  { label: "Mongo DB" },
  { label: "Firebase" },
  { label: "Google Map API" },
  { label: "3rd Party API Integration" },

  { label: "CI/CD Pipeline" },

  { label: "Android Native" },
  { label: "PHP Laravel" },
  { label: "AWS Cloud" },
  { label: "Docker" },
  { label: "Kubernetes" },
];

const SkillsComp = () => {
  return (
    <Box mt={5} id="stats">
      <Headings
        textAlign="center"
        title="Skills"
        color={themeColors.main.white}
      />
      <Box sx={{ p: 2 }}>
        <Grid container spacing={1}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={2} key={index}>
              <Paper
                elevation={1}
                sx={{
                  textAlign: "center",
                  background: themeColors.main.primary,
                  borderRadius: "1rem",
                }}
              >
                <Typography
                  color={themeColors.main.white}
                  variant="subtitle1"
                  sx={{ mt: 1 }}
                >
                  {skill.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SkillsComp;
