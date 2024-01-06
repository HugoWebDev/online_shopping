import React from "react";
import Routes from "./routes/index";
import { Box } from "@mui/material";
import { Header, Footer } from "./components";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: "#f5f5f5", py: 1 }}>
        <Header />
      </Box>
      <Routes />
      <Box>
        <Footer />
      </Box>
    </React.Fragment>
  );
};

export default App;
