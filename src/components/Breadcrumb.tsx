import * as React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Container, Typography } from "@mui/material";

type Props = {
  route: string;
};

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const BasicBreadcrumbs: React.FC<Props> = ({ route }) => {
  const capitalizedRoute = capitalizeFirstLetter(route);

  return (
    <div role="presentation" style={{ backgroundColor: "#eaded7" }}>
      <Container>
        <Breadcrumbs sx={{ padding: "40px 0" }} aria-label="breadcrumb">
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Home
          </Link>
          <Typography
            style={{
              textDecoration: "none",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            {capitalizedRoute}
          </Typography>
        </Breadcrumbs>
      </Container>
    </div>
  );
};

export default BasicBreadcrumbs;
