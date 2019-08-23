import React, { useState, useContext } from "react";
import { ScraperContext } from "../ScraperContextController";

import SelectSocialMedia from "./SelectSocialMedia";

const SearchInput = () => {
  // Initialize state
  const [input, setInput] = useState({
    userInput: "",
    socialMedia: "",
    error: ""
  });
  const { userInput, error, socialMedia } = input;

  const [state, getData] = useContext(ScraperContext);

  // handle input change
  const handleInputChange = e => {
    setInput({ ...input, error: "", userInput: e.target.value });
  };

  // handle social media select
  const handleMedialSelect = e => {
    setInput({ ...input, error: "", socialMedia: e.target.value });
  };

  // dynamic classes
  let classname =
    error.length > 0
      ? "form-control is-invalid col-md-8 mb-3"
      : "form-control col-md-8 mb-3";

  // handle submit
  const handleSubmit = e => {
    e.preventDefault();
    if (userInput.length === 0) {
      setInput({ ...input, error: "Please enter a username" });
    } else if (socialMedia.length === 0) {
      setInput({ ...input, error: "Please select a social media platform" });
    } else {
      // get user status
      getData(socialMedia, userInput);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            onChange={handleInputChange}
            type="text"
            className={classname}
            placeholder="Enter username..."
          />
          <input type="submit" value="Find User" className="col-md-2 mb-3" />
          {error.length > 0 && <div className="invalid-feedback">{error}</div>}
        </div>
        {/* social media check */}
        <SelectSocialMedia
          onChange={handleMedialSelect}
          id="twitter"
          value="t"
          lable="Twitter"
        />
        <SelectSocialMedia
          onChange={handleMedialSelect}
          id="instagram"
          value="i"
          lable="Instagram"
        />
        <SelectSocialMedia
          onChange={handleMedialSelect}
          id="reddit"
          value="r"
          lable="Reddit"
        />
        <SelectSocialMedia
          onChange={handleMedialSelect}
          id="github"
          value="g"
          lable="Github"
        />
        <SelectSocialMedia
          onChange={handleMedialSelect}
          id="behance"
          value="b"
          lable="Behance"
        />
        <SelectSocialMedia
          onChange={handleMedialSelect}
          id="quora"
          value="q"
          lable="Quora"
        />
      </form>
    </>
  );
};

export default SearchInput;
