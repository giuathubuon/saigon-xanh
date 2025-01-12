"use client";

import "./ExtraData.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeightScale, faWind } from "@fortawesome/free-solid-svg-icons";

const ExtraData = ({ extraData }) => {
  return (
    <div className="extra-container">
      <div className="extra-data">
        <FontAwesomeIcon icon={faWeightScale} className="extra-data__icon" />
        <h3 className="data-type">Áp suất</h3>
        <h2 className="pressure-data">{extraData?.pressure} mb</h2>
      </div>

      <div className="extra-data">
        <FontAwesomeIcon icon={faWind} className="extra-data__icon" />
        <h3 className="data-type">Gió</h3>
        <h2 className="wind-data">{extraData?.wind} mph</h2>
      </div>
    </div>
  );
};

export default ExtraData;
