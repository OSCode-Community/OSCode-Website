import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import Link from "next/link";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <Box sx={{ background: "black" }}>
        <AppBar position="fixed" className={classes.appBarBg}>
          <Toolbar>
            <Avatar
              src="/logo.jpeg"
              alt="oescode logo"
              sx={{
                width: "50px",
                height: "50px",
                marginRight: "12px",
              }}
            />
            <Link href="/">
              <Typography variant="h6" edge="start" flexGrow={1}>
                OS Code
              </Typography>
            </Link>
            <Link href="/">
              <Button
                color="inherit"
                edge="end"
                sx={{ mx: 1 }}
                className={classes.btn}
              >
                Home
              </Button>
            </Link>
            <Link href="/about">
              <Button
                color="inherit"
                edge="end"
                sx={{ mx: 1 }}
                className={classes.btn}
              >
                About Us
              </Button>
            </Link>
            <Link href="/events">
              <Button
                color="inherit"
                edge="end"
                sx={{ mx: 1 }}
                className={classes.btn}
              >
                Events
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
        <main style={{ paddingTop: "60px" }}>{props.children}</main>
      </Box>
    </>
  );
};

export default Layout;
