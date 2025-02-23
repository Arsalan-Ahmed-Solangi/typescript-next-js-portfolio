"use client";

import { Box, Typography, Container, Button, Link } from "@mui/material";
import Image from "next/image";
import themeColors from "@/theme/colors";

export default function NotFound() {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt={5}
      >
        <Image
          src="/images/err.png"
          alt="404 Not Found"
          width={400}
          height={400}
        />

        <Typography variant="h6" color={themeColors.main.white}>
          The page you are looking for does not exist.
        </Typography>
        <Link href={"/"}>
          <Button variant="contained">Back to home</Button>
        </Link>
      </Box>
    </Container>
  );
}
