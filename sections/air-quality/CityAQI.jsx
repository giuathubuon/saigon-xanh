import React, { useState } from "react";
import moment from "moment";
import {
  Progress,
  Card,
  Tag,
  Tooltip,
  Typography,
  Space,
  Alert,
  Button,
} from "antd";
import {
  //   ClockCircleOutlined,
  //   LocationOutlined,
  //   DashboardOutlined
  ClockCircleOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

import CityAQIDetails from "./CityAQIDetails";

const { Text } = Typography;

const CityAQI = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const aqi = props.cityInfo.aqi;
  const placeName = props.cityInfo.station.name;
  const atTime = props.cityInfo.time.stime;
  const uid = props.cityInfo.uid;

  const getCategorizedAQI = (aqi) => {
    const categories = [
      {
        range: [0, 50],
        impact: "Tốt",
        className: "good",
        color: "#52c41a",
        level: "Rất an toàn",
      },
      {
        range: [51, 100],
        impact: "Trung bình",
        className: "moderate",
        color: "#faad14",
        level: "Chấp nhận được",
      },
      {
        range: [101, 150],
        impact: "Không tốt cho nhóm người nhạy cảm",
        className: "unhealthy-sensitive",
        color: "#fa8c16",
        level: "Cảnh báo",
      },
      {
        range: [151, 200],
        impact: "Không tốt",
        className: "unhealthy",
        color: "#f5222d",
        level: "Nguy hiểm",
      },
      {
        range: [201, 300],
        impact: "Khá nguy hiểm",
        className: "very-unhealthy",
        color: "#722ed1",
        level: "Rất nguy hiểm",
      },
      {
        range: [301, Infinity],
        impact: "Nguy hiểm",
        className: "hazardous",
        color: "#262626",
        level: "Cực kỳ nguy hiểm",
      },
    ];

    const category =
      categories.find((cat) => aqi >= cat.range[0] && aqi <= cat.range[1]) ||
      categories[0];

    return category;
  };

  const getAtTimeFormatted = (time) => {
    return moment(time).format("HH:mm:ss DD/MM/YYYY");
  };

  const categorizedAQI = getCategorizedAQI(aqi);

  return (
    <Card
      hoverable
      onClick={() => !showDetails && setShowDetails(true)}
      style={{
        borderColor: categorizedAQI.color,
        marginBottom: 16,
      }}
    >
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        {/* Thông tin địa điểm và thời gian */}
        <Space>
          {/* <Tooltip title="Địa điểm">
            <LocationOutlined style={{ color: categorizedAQI.color }} />
          </Tooltip> */}
          <Text strong>{placeName}</Text>

          <Tooltip title="Thời gian">
            <ClockCircleOutlined style={{ color: categorizedAQI.color }} />
          </Tooltip>
          <Text type="secondary">{getAtTimeFormatted(atTime)}</Text>
        </Space>

        {/* Hiển thị AQI */}
        <Space
          direction="horizontal"
          style={{
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Tooltip title="Chỉ số chất lượng không khí">
            <Progress
              type="circle"
              percent={Math.min(aqi, 400) / 2}
              strokeColor={categorizedAQI.color}
              trailColor="#e9ecef"
              size={40}
              format={() => (
                <div>
                  <DashboardOutlined style={{ fontSize: 10 }} />
                  <div style={{ marginTop: 8 }}>{aqi}</div>
                </div>
              )}
            />
          </Tooltip>
        </Space>

        {/* Nhãn mức độ */}
        <Space
          direction="vertical"
          style={{ width: "100%", alignItems: "center" }}
        >
          <Tag color={categorizedAQI.color} style={{ fontSize: 14 }}>
            {categorizedAQI.impact}
          </Tag>
          <Alert
            message={categorizedAQI.level}
            type={
              categorizedAQI.className === "good"
                ? "success"
                : categorizedAQI.className === "moderate"
                ? "warning"
                : "error"
            }
            showIcon
          />
        </Space>
        {/* Chi tiết (nếu được chọn) */}
        {showDetails && <CityAQIDetails uid={uid} />}
        {showDetails && (
          <Button onClick={() => setShowDetails(false)}>Đóng</Button>
        )}
      </Space>
    </Card>
  );
};

export default CityAQI;
