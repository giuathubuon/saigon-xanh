import AirQualityView from "@/sections/air-quality/View/AirQualityView";
import React from "react";

export const metadata = (params) => {
  return {
    title: "Chất lượng không khí",
    description: "Chất lượng không khí",
  };
};

const AirQuality = () => {
  return <AirQualityView/>;
};

export default AirQuality;
