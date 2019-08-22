import React from "react";
import { useScrape } from "../actions/useScrape";

export const ScraperContext = React.createContext();

let initialState = {};

async function getData() {
  const data = await useScrape("i", "caseyneistat");
  console.log(data);
}

export const ContextController = ({ children }) => {
  getData();
  return (
    <ScraperContext.Provider value={initialState}>
      {children}
    </ScraperContext.Provider>
  );
};
