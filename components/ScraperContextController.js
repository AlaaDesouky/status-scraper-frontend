import React, { useState } from "react";
import { useScrape } from "../actions/useScrape";

export const ScraperContext = React.createContext();

// Initializing state
let initialState = { user: "", userStatus: [], error: "" };

export const ContextController = ({ children }) => {
  const [state, setState] = useState(initialState);

  const getData = async (route, userName) => {
    // get data from api
    const { user, status, message } = await useScrape(route, userName);

    // populate state
    if (message !== undefined) {
      setState({ ...state, error: message });
    } else {
      setState({ ...state, user, userStatus: [status] });
    }
  };

  return (
    <ScraperContext.Provider value={[state, getData]}>
      {children}
    </ScraperContext.Provider>
  );
};
