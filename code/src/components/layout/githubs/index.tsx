import React from "react";
import { Container, Grid, Box } from "@mui/material";

const GithubStats = () => {
  return (
    <Container maxWidth="md" sx={{ padding: 4 }} id="github">
      <Grid container spacing={4} justifyContent="center">
        {/* GitHub Stats */}
        <Grid item xs={12}>
          <Box
            component="img"
            src="https://github-readme-stats.vercel.app/api?username=Arsalan-Ahmed-Solangi&theme=react&hide_border=false&include_all_commits=true&count_private=false&card_width=400"
            alt="GitHub Stats"
            sx={{ width: "100%", height: "auto", display: "block", mx: "auto" }}
          />
        </Grid>

        {/* Top Languages and GitHub Streak Side by Side */}
        <Grid container item xs={12} spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} display="flex" justifyContent="center">
            <Box
              component="img"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Arsalan-Ahmed-Solangi&theme=react&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
              alt="Top Languages"
              sx={{ width: "100%", maxWidth: 400, height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} display="flex" justifyContent="center">
            <Box
              component="img"
              src="https://streak-stats.demolab.com/?user=Arsalan-Ahmed-Solangi&theme=react&hide_border=false&card_width=400"
              alt="GitHub Streak"
              sx={{ width: "110%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GithubStats;
