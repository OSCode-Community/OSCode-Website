import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import classes from "./Layout.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
import { useState } from "react";
import { Drawer } from "@mui/material";

const Layout = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Events",
      href: "/events",
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
                <Link href={item.href} key={item.title}>
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
            <IconButton size="large" edge="start" color="inherit" aria-label="logo" onClick={() => setIsDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              sx={{ display: { sx: "static", md: "none" }}}
            >
              <Box p={2} textAlign="center" width='280px' role="presentation" sx={{ flexDirection: "column"}}>
                {navItems.map((item) => (
                  <Link href={item.href} key={item.title}>
                    <Button
                      color="inherit"
                      edge="end"
                      sx={{ mx: 1 }}
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
              </Box>
            </Drawer>
          </Toolbar>
        </AppBar>
        <main style={{ paddingTop: "60px" }}>{props.children}</main>

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
