import React from "react";
import "../assets/styles/Header.scss";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { styled } from "@mui/material/styles";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { SwipeableTemporaryDrawer } from "../components";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Container, Button, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -5,
    top: 1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0",
  },
}));

type Props = {};

const Header: React.FC = (props: Props) => {
  return (
    <Container>
      <header>
        <Link to={"/"}>
          <img src={logo} alt="logo" height={"auto"} width={175} />
        </Link>
        <nav className="d-md-none">
          <ul>
            <Link to="">
              <li>Home</li>
            </Link>
            <Link to="about">
              <li>About</li>
            </Link>
            <Link to="products">
              <li>Products</li>
            </Link>
          </ul>
        </nav>
        <div className="d-md-none">
          <Link to="cart">
            <Button variant="text" sx={{ padding: "0 10px" }}>
              Cart{" "}
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={1} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Button>
          </Link>
          <Link to={"login"}>
            <Button variant="text" sx={{ padding: "9px 15px" }}>
              Login <PersonAddIcon sx={{ marginLeft: "5px" }} />
            </Button>
          </Link>
        </div>
        <div className="d-md-block">
          <SwipeableTemporaryDrawer />
        </div>
      </header>
    </Container>
  );
};

export default Header;
