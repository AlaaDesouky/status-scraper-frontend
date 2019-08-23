import React, { useContext } from "react";
import { ScraperContext } from "./ScraperContextController";

import SearchInput from "./search/SearchInput";

const App = () => {
  const [state, getData] = useContext(ScraperContext);
  return (
    <div className="container">
      <SearchInput />
      <p>{state.user}</p>
    </div>
  );
};

export default App;
