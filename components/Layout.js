import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import classes from "./Layout.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import { Drawer } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

const Layout = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const navItems = [
    {
      title: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      title: "About Us",
      icon: <InfoIcon />,
      path: "/about",
    },
    {
      title: "Events",
      icon: <EmojiEventsIcon />,
      path: "/events",
    },
  ];

  return (
    <>
      <Box sx={{ background: "black" }}>
        <AppBar position="fixed" className={classes.appBarBg}>
          <Toolbar>
            <Avatar
              src="/logo.jpeg"
              alt="oscode logo"
              sx={{
                width: { xs: "2rem", md: "3rem" },
                height: { xs: "2rem", md: "3rem" },
                marginRight: "12px",
              }}
            />
            <Link href="/">
              <Typography variant="h6" edge="start" flexGrow={1}>
                OS Code
              </Typography>
            </Link>

            <div className={classes.navItemsLg}>
              {navItems.map((item) => (
                <Link href={item.path} key={item.title}>
                  <Button
                    color="inherit"
                    edge="end"
                    sx={{ mx: 1 }}
                    className={classes.btn}
                  >
                    {item.title}
                  </Button>
                </Link>
              ))}
              <Link href="/contact">
                <Button edge="end" sx={{ mx: 1 }} variant="outlined">
                  {" "}
                  Contact Us{" "}
                </Button>
              </Link>
            </div>
            {/* Mobile Navigation */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              onClick={() => setIsDrawerOpen(true)}
              sx={{ display: { sx: "flex", lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              sx={{ display: { sx: "static", md: "none" } }}
            >
              <Box
                p={2}
                textAlign="center"
                width="280px"
                role="presentation"
                sx={{ flexDirection: "column" }}
              >
                <List>
                  {navItems.map((item) => (
                    <ListItem
                      button
                      key={item.title}
                      onClick={() => router.push(item.path)}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.title} sx= {{ alignItems: "center" }} />
                    </ListItem>
                  ))}
                </List>
                <Link href="/contact">
                  <Button edge="end" sx={{ mx: 1, my: 2 }} variant="outlined">
                    {" "}
                    Contact Us{" "}
                  </Button>
                </Link>
              </Box>
            </Drawer>
          </Toolbar>
        </AppBar>
        <main style={{ paddingTop: "60px", minHeight: "screen" }}>
          {props.children}
        </main>

        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            OS Code
          </Typography>
          <Typography variant="subtitle1" align="center" component="p">
            © {new Date().getFullYear()}, Made by Team OS Code
          </Typography>
        </footer>
      </Box>
    </>
  );
};

export default Layout;
