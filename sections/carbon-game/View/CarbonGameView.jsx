"use client";

import React, { useState } from "react";
import { Input, Button, Form, Card, Row, Col } from "antd";

const CarbonGameView = () => {
  const [carbonOutput, setCarbonOutput] = useState(0);
  const [treesNeeded, setTreesNeeded] = useState(0);

  const calculateCarbon = (values) => {
    const { electricity, water, transport, waste } = values;

    // Đơn vị tính carbon cho từng hoạt động
    const carbonFromElectricity = electricity * 0.67; // kWh * hệ số phát thải
    //http://www.dcc.gov.vn/van-ban-phap-luat/1110/He-so-phat-thai-luoi-dien-Viet-Nam-2022.html
    //1kWh = 0.67kg CO2

    const carbonFromWater = water * 0.3; // m³ * hệ số phát thải
    //https://www.vietnamplus.vn/he-so-phat-thai-co2-cua-nganh-nuoc-va-nuoc-thai/697579.vnp
    //1000 lit nước = 0.3kg CO2

    const carbonFromTransport = transport * 0.048; // km * hệ số phát thải
    //https://vnce.vn/he-so-phat-thai-co2-khi-nha-kinh
    //1000 lit xang thai 2,4kg CO2, 1 lit xang = di chuyen 50km => 1km = 0.048kg CO2

    const carbonFromWaste = waste * 0.4; // kg rác * hệ số phát thải
    //https://www.vietnamplus.vn/he-so-phat-thai-co2-cua-nganh-nuoc-va-nuoc-thai/697579.vnp
    //1kg rác = 0.4kg CO2

    // Tổng lượng carbon thải ra
    const totalCarbon = (
      carbonFromElectricity +
      carbonFromWater +
      carbonFromTransport +
      carbonFromWaste
    ).toFixed(2);

    //https://kienviet.net/2015/4/23/nhung-thong-tin-thu-vi-ve-cay-xanh
    // Quy đổi lượng cây xanh cần trồng (1 cây hấp thụ 22,7kg CO2/năm)
    const totalTrees = Math.ceil(totalCarbon / 22.7);

    setCarbonOutput(totalCarbon);
    setTreesNeeded(totalTrees);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <Card
        title="Quy đổi lượng Carbon bạn thải ra bằng số cây xanh phải trồng để cân bằng khí hậu"
        style={{ textAlign: "center" }}
      >
        <Form layout="vertical" onFinish={calculateCarbon}>
          <Form.Item
            label="Điện tiêu thụ trong tháng (kWh)"
            name="electricity"
            rules={[
              { required: true, message: "Hãy nhập số kWh điện tiêu thụ!" },
            ]}
          >
            <Input
              type="number"
              style={{ height: "50px" }}
              placeholder="Nhập số kWh"
            />
          </Form.Item>
          <Form.Item
            label="Lượng nước sử dụng (m³)"
            name="water"
            rules={[
              { required: true, message: "Hãy nhập lượng nước đã sử dụng!" },
            ]}
          >
            <Input
              type="number"
              style={{ height: "50px" }}
              placeholder="Nhập số m³"
            />
          </Form.Item>
          <Form.Item
            label="Khoảng cách đi lại (km)"
            name="transport"
            rules={[
              { required: true, message: "Hãy nhập khoảng cách di chuyển!" },
            ]}
          >
            <Input
              type="number"
              style={{ height: "50px" }}
              placeholder="Nhập số km"
            />
          </Form.Item>
          <Form.Item
            label="Lượng rác thải (kg)"
            name="waste"
            rules={[{ required: true, message: "Hãy nhập lượng rác thải!" }]}
          >
            <Input
              type="number"
              style={{ height: "50px" }}
              placeholder="Nhập số kg"
            />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{ height: "50px" }}
          >
            Tính lượng carbon
          </Button>
        </Form>

        {carbonOutput > 0 && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <p>
              <b>Lượng carbon thải ra:</b> {carbonOutput} kg CO2
            </p>
            <p>
              <b>Số cây xanh cần trồng:</b> {treesNeeded} cây
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default CarbonGameView;
