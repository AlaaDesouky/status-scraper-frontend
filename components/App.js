import React, { useContext } from "react";
import { ScraperContext } from "./ScraperContextController";

import SearchInput from "./search/SearchInput";
import DisplayStatus from "./displayStatus/DisplayStatus";
import Spinner from "./common/Spinner";

const App = () => {
  const [state, getData] = useContext(ScraperContext);
  return (
    <div className="container">
      <SearchInput />
      <DisplayStatus />
      {/* <Spinner /> */}
    </div>
  );
};

export default App;
