import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
