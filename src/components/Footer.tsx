import * as React from "react";
import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          {"© "} {new Date().getFullYear()}{" "}
          <Link
            color="inherit"
            sx={{ textDecoration: "none" }}
            href="https://your-website.com/"
          >
            ComfySloth All Rights Reserved
          </Link>{" "}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
