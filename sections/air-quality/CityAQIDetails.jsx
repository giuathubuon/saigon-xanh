import React from "react";
import { useAQIAPIs } from "./useAQIAPIs";
import { Card, List, Spin, Typography } from "antd";
import { TOKEN, FEED_AQI_BASE_URL } from "./AQIConst";

const CityAQIDetails = (props) => {
  console.log({ props });
  const [info, error] = useAQIAPIs(
    `${FEED_AQI_BASE_URL}${props.uid}/?token=${TOKEN}`
  );

  const names = {
    pm25: "Bụi mịn 2.5 (PM 2.5)",
    pm10: "Bụi mịn 10 (PM 10)",
    o3: "Ozon",
    no2: "Nitơ điôxít",
    so2: "Lưu huỳnh điôxít",
    co: "Cacbon monoxit",
    t: "Nhiệt độ",
    w: "Gió",
    r: "Mưa (lượng mưa)",
    h: "Độ ẩm tương đối",
    d: "Điểm sương",
    p: "Áp suất khí quyển",
    dew: "Điểm hóa sương",
  };

  const getSpectrum = (iaqi) => {
    let ret = [];
    Object.entries(iaqi).map(function (item) {
      let obj = {};
      let key = names[item[0]] ? names[item[0]] : item[0];
      obj["key"] = key;
      obj["value"] = item[1].v;
      ret.push(obj);
    });
    return ret;
  };

  const colorize = (name, value) => {
    if (
      [
        "particulate matter 2.5(pm 2.5)",
        "particulate matter 10(pm 10)",
        "Ozone",
        "Nitrogen Dioxide",
        "Sulphur Dioxide",
        "Carbon Monoxyde",
      ].indexOf(name) < 0
    ) {
      return "";
    }
    if (value >= 0 && value <= 50) {
      return "good";
    } else if (value >= 51 && value <= 100) {
      return "moderate";
    } else if (value >= 101 && value <= 150) {
      return "unhealthy-sentitive";
    } else if (value >= 151 && value <= 200) {
      return "unhealthy";
    } else if (value >= 201 && value <= 300) {
      return "very-unhealthy";
    } else if (value >= 301) {
      return "hazardous";
    }
  };

  return (
    <React.Fragment>
      {error}
      {info.data ? (
        <Card title="Chi tiết chất lượng không khí">
          <span>
            Chất gây ô nhiễm nổi bật: <b>{names[info.data.dominentpol]}</b>
          </span>
          <hr />
          <List
            dataSource={getSpectrum(info.data.iaqi)}
            renderItem={(spectrum, i) => (
              <List.Item key={i}>
                <span
                  className={`dot ${colorize(spectrum.key, spectrum.value)}`}
                ></span>
                <span>
                  {spectrum.key}: {spectrum.value}
                </span>
              </List.Item>
            )}
          />
        </Card>
      ) : (
        <Spin tip="Loading..." /> // Use Ant Design's Spin component for loading
      )}
    </React.Fragment>
  );
};

export default CityAQIDetails;
