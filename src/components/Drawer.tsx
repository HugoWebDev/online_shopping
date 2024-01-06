import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Link } from "react-router-dom";

type Anchor = "left";

const menuItems = [
  { label: "Home", to: "" },
  { label: "About", to: "about" },
  { label: "Products", to: "products" },
  { label: "Cart", to: "cart" },
  { label: "Login", to: "login" },
];

function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: 250,
        display: "flex",
        flexDirection: "column",
        padding: "5px",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {menuItems.map((menuItem, index) => (
        <Link
          to={menuItem.to}
          key={index}
          style={{ width: "100%", textDecoration: "none" }}
        >
          <Button
            variant="text"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              padding: "15px 5px",
            }}
          >
            {menuItem.label}
          </Button>
        </Link>
      ))}
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            sx={{ padding: "10px 0" }}
          >
            <MenuIcon sx={{ cursor: "pointer" }} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default SwipeableTemporaryDrawer;
