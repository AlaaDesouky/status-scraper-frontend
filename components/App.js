import React, { useContext } from "react";
import { ScraperContext } from "./ScraperContextController";

const App = () => {
  const [state, getData] = useContext(ScraperContext);
  // getData("g", "AlaaDesouky");
  return (
    <div>
      <p>From App</p>
      <p>{state.user}</p>
    </div>
  );
};

export default App;
