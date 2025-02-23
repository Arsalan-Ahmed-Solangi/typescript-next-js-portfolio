import themeColors from "@/theme/colors";
import { MenuOutlined } from "@mui/icons-material";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const MobileNavbar = ({
  handleDrawerToggle,
  mobileOpen,
  navItems,
}: {
  handleDrawerToggle: any;
  mobileOpen: any;
  navItems: any;
}) => {
  return (
    <>
      <IconButton
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerToggle}
      >
        <MenuOutlined />
      </IconButton>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 220,
            backgroundColor: themeColors.main.primary,
            color: themeColors.main.white,
            padding: "10px",
          },
        }}
      >
        <List>
          {navItems.map((item: any) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component="a" href={`${item.link}`}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default MobileNavbar;
