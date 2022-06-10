import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Avatar,
} from "@mui/material";

const Layout = (props) => {
  return (
    <>
      <Box sx={{ background: "black" }}>
        <AppBar
          position="fixed"
          sx={{ background: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <Avatar
              src="/logo.jpeg"
              alt="oescode logo"
              sx={{
                width: "50px",
                height: "50px",
                marginRight: "12px",
                marginTop: "4px",
              }}
            />

            <Typography variant="h6" edge="start" flexGrow={1}>
              OS Code
            </Typography>
            <Button color="inherit" edge="end">
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <main style={{ paddingTop: "60px" }}>{props.children}</main>
      </Box>
    </>
  );
};

export default Layout;
