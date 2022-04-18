import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState("");

  //Search - get data from spacex-api
  useEffect(() => {
    const search = async () => {
      const data = await axios.get("https://api.spacexdata.com/v3/", {});

      setResults(data);
    };
    search();
  }, [term]);

  //Search bar
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search here</label>
          <input value={term} onChange={(e) => setTerm(e.target.value)}></input>
        </div>
      </div>
    </div>
  );
};

export default Search;
