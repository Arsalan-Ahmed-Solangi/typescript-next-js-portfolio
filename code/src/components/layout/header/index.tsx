import { Box, Grid } from "@mui/material";
import HeaderSectionOne from "./HeaderSectionOne";
import HeaderSectionTwo from "./HeaderSectionTwo";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        mt: 2,
        px: 2,
      }}
    >
      <Grid container spacing={3} alignItems="center" justifyContent={"center"}>
        <Grid item xs={12} md={6}>
          <HeaderSectionOne />
        </Grid>
        <Grid item xs={12} md={6}>
          <HeaderSectionTwo />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
