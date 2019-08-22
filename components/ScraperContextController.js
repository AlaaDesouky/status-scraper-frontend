import React, { useEffect } from "react";
import axios from "axios";

export const ScraperContext = React.createContext();

let initialState = {};

// Custom hook
function useScrape() {
  async function fetchData() {
    let response = await axios.get("http://localhost:3000/");
    console.log(response);
  }

  useEffect(() => {
    fetchData();
  }, []);
}

export const ContextController = ({ children }) => {
  useScrape();
  return (
    <ScraperContext.Provider value={initialState}>
      {children}
    </ScraperContext.Provider>
  );
};
