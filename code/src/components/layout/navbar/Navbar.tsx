"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import themeColors from "@/theme/colors";
import MobileNavbar from "./MobileNavbar";

const LOGO_TEXT: string = " </>  ARSALAN";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 950px)");

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { text: "Home", link: "/" },
    { text: "Experience", link: "/experience" },
    { text: "Education", link: "/education" },
    { text: "Skills", link: "/skills" },
    { text: "Github Stats", link: "/github" },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "none",
        background: themeColors.main.primary,
        fontFamily: "var(--font-nunito)",
      }}
    >
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Link href="/" passHref style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              fontWeight={900}
              fontFamily={"var(--font-nunito)"}
              sx={{ color: themeColors.main.white, textDecoration: "none" }}
            >
              {LOGO_TEXT}
            </Typography>
          </Link>

          {/* Navigation Links */}
          {!isMobile && (
            <Box display="flex" gap={2}>
              {navItems.map((item) => (
                <Link key={item.text} href={item.link} passHref>
                  <Button sx={{ color: themeColors.main.white }}>
                    {item.text}
                  </Button>
                </Link>
              ))}
            </Box>
          )}
        </Box>

        {/* Mobile Menu */}
        {isMobile && (
          <MobileNavbar
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
            navItems={navItems}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
