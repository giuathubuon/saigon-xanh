import CarbonGameView from "@/sections/carbon-game/View/CarbonGameView";
import React from "react";

export const metadata = (params) => {
  return {
    title: "Carbon Game",
    description: "Tính lượng carbon thải ra",
  };
};

const CarbonGame = () => {
  return <CarbonGameView />;
};

export default CarbonGame;
