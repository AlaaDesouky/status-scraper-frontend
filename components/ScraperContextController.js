import React, { useState } from "react";
import { useScrape } from "../actions/useScrape";

export const ScraperContext = React.createContext();

// Initializing state
let initialState = { user: "", userStatus: [], isLoading: false, error: "" };

export const ContextController = ({ children }) => {
  const [state, setState] = useState(initialState);

  const getData = async (route, userName) => {
    setState({ ...initialState, isLoading: true });
    // get data from api
    const { user, status, message } = await useScrape(route, userName);

    // populate state
    if (message !== undefined) {
      setState({ ...initialState, error: message });
    } else {
      setState({
        ...initialState,
        user,
        userStatus: [status],
        isLoading: false
      });
    }
  };

  return (
    <ScraperContext.Provider value={[state, getData]}>
      {children}
    </ScraperContext.Provider>
  );
};
