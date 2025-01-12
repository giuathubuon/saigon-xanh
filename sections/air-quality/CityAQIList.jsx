import React from "react";

import CityAQI from "./CityAQI";
import { Flex } from "antd";

const CityAQIList = (props) => {
  let cityList = [];
  if (props.data) {
    cityList = props.data;
  }

  return (
    <Flex
      vertical
      style={{ height: "80vh", overflowY: "scroll", width: "50%" }}
    >
      {cityList.length > 0 ? (
        cityList.map((cityInfo, i) => (
          <li key={i}>
            <CityAQI cityInfo={cityInfo} />
          </li>
        ))
      ) : (
        <iv>nodata</iv>
      )}
    </Flex>
  );
};

export default CityAQIList;
