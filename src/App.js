import React, { useEffect, useContext } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import Landing from "./pages/Landing";
import theme from "./Theme/theme";
import { jhucsse } from "./API/covidAPI";
import { DataContext } from "./Context/dataContext";

function App() {
  const { setInternationalData } = useContext(DataContext);

  useEffect(() => {
    jhucsse().then((response) => {
      setInternationalData(response.data);
    });
  }, [setInternationalData]);

  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
