import React, { useState, useEffect, useRef } from "react";

import { useAQIAPIs } from "./useAQIAPIs";

import { TOKEN, SEARCH_CITIES_BASE_URL } from "./AQIConst";

import CityAQIList from "./CityAQIList";

const SearchCities = () => {
  const [url, setUrl] = useState("");
  const [cities, loading, initial, error] = useAQIAPIs(url);
  const [searchText, setSearchText] = useState("");
  const searchInput = useRef(null);
  const keyInput = "vietname";

  useEffect(() => {
    setUrl(`${SEARCH_CITIES_BASE_URL}?token=${TOKEN}&keyword=${keyInput}`);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        justifyItems: "center",
      }}
    >
      {error}
      <h1
        style={{
          color: "#81d683",
          backgroundColor: "white",
          borderRadius: 10,
          padding: 10,
          width: "50%",
        }}
      >
        Chất lượng không khí tại Việt Nam
      </h1>

      {loading ? (
        <span>loading...</span>
      ) : (
        !initial && <CityAQIList data={cities.data} />
      )}
    </div>
  );
};

export default SearchCities;
