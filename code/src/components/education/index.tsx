import themeColors from "@/theme/colors";
import { Box, Typography, Grid, Container } from "@mui/material";
import React from "react";
import Headings from "../layout/typography/Headings";
import Image from "../layout/image/Image";

const EducationComp = () => {
  return (
    <Box py={5}>
      <Container maxWidth="md">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Headings
            textAlign="center"
            title="Education"
            color={themeColors.main.white}
          />
        </Box>

        <Grid xs={12}>
          <Grid xs={12}>
            <Box
              flex={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image src="/images/education.jpeg" alt="Education Image" />
            </Box>
          </Grid>
          <Grid xs={12}>
            <Box mt={5} color={themeColors.main.white} textAlign="center">
              <Typography variant="h4" fontWeight="bold" color="orange">
                BS Software Engineering
              </Typography>
              <Typography variant="h6" gutterBottom>
                1st position with silver medalist
              </Typography>
              <Typography variant="body2">
                Embark on a transformative journey in Software Engineering at
                the University of Sindh, where rigorous academic training and
                hands-on projects converge to build exceptional technical
                expertise. Our environment seamlessly integrates cutting-edge
                technologies with precise problem-solving skills, nurturing
                innovative pioneers who excel at overcoming complex challenges
                and driving digital transformation.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EducationComp;
