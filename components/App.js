import React, { useContext } from "react";
import { ScraperContext } from "./ScraperContextController";

import SearchInput from "./search/SearchInput";
import DisplayStatus from "./displayStatus/DisplayStatus";
import Spinner from "./common/Spinner";
import Header from "./common/Header";
import Error from "./common/Error";
import Footer from "./common/Footer";

const App = () => {
  const [state, getData] = useContext(ScraperContext);
  return (
    <>
      <div style={{ height: "100vh" }} className="container">
        <Header />
        <div style={{ height: "70%" }}>
          <SearchInput />
          <div className="container">
            {state.isLoading ? <Spinner /> : <DisplayStatus />}
            {state.error.length > 0 && <Error error={state.error} />}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
