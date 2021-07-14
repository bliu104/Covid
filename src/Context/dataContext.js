import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  // -------------------Hooks stuff----------------
  const [internationalData, setInternationalData] = useState();

  return (
    <DataContext.Provider value={{ internationalData, setInternationalData }}>
      {children}
    </DataContext.Provider>
  );
};

DataContextProvider.propTypes = {
  children: PropTypes.node,
};

export default DataContextProvider;
