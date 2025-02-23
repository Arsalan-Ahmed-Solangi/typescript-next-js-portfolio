import themeColors from "@/theme/colors";
import { JSX } from "@emotion/react/jsx-runtime";
import {
  Download,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import { Box, Button, IconButton } from "@mui/material";

export interface SocialLinkData {
  [key: string]: string;
}

const socialLinkData: SocialLinkData = {
  github: "https://github.com/Arsalan-Ahmed-Solangi",
  linkedIn: "https://www.linkedin.com/in/arsalan-ahmed-6b5536172/",
  whatsApp: `https://wa.me/+923043059147`,
  instagram: "https://www.instagram.com/solangi_arsalan/",
  facebook: "https://web.facebook.com/Arsolangi786/",
};

const iconMapping: { [key: string]: any } = {
  github: <GitHub />,
  linkedIn: <LinkedIn />,
  whatsApp: <WhatsApp />,
  twitter: <Twitter />,
  instagram: <Instagram />,
  facebook: <Facebook />,
};

const HeaderSectionOneSocialIcons = () => {
  return (
    <>
      <Box>
        {Object.keys(socialLinkData).map((key) => (
          <IconButton
            key={key}
            href={socialLinkData[key]}
            target="_blank"
            sx={{ color: themeColors.main.white }}
          >
            {iconMapping[key]}
          </IconButton>
        ))}
      </Box>

      <Box display={"flex"} mt={2} justifyContent={"center"} gap={1 / 2}>
        <Box>
          <Button
            variant="contained"
            target="_blank"
            href="/files/cv.pdf"
            download="Arsalan-Ahmed.pdf"
            startIcon={<Download />}
          >
            Download CV
          </Button>
        </Box>

        <Box>
          <Button
            variant="contained"
            href={socialLinkData["whatsApp"]}
            target="_blank"
            startIcon={<WhatsApp />}
          >
            Ping via WhatsApp
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default HeaderSectionOneSocialIcons;
