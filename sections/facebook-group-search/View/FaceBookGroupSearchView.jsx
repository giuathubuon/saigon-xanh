"use client";

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// {
//   /* <script async src="https://cse.google.com/cse.js?cx=5700f5a536175402c">
// </script>
// <div class="gcse-search"></div> */
// }

// const FacebookGroupSearchView = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://cse.google.com/cse.js?cx=5700f5a536175402c"; // Thay YOUR_CSE_ID bằng mã CX của bạn
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);

//   return (
//     <div>
//       <div className="gcse-search"></div>
//     </div>
//   );
// };

// export default FacebookGroupSearchView;

import React, { useState } from "react";
import { Input, Button, List, Typography, Spin } from "antd";
import axios from "axios";

const { Search } = Input;
const { Text } = Typography;

const FacebookGroupSearchView = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (value) => {
    if (!value) return;
    setLoading(true);
    setResults([]);

    const API_KEY = "AIzaSyDRqgzulbfcSiykOidMdrPx7rchrS5zrLc";
    const CX_ID = "5700f5a536175402c";
    const url = `https://www.googleapis.com/customsearch/v1?q=${value}&key=${API_KEY}&cx=${CX_ID}`;

    try {
      const response = await axios.get(url);
      setResults(response.data.items || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        height: "80vh",
        overflowY: "auto",
        margin: "0 auto",
        zIndex: "1000",
        position: "relative",
      }}
    >
      {/* <h1 style={{ color: "#81d683" }}>Tìm kiếm nhóm</h1> */}
      <Search
        placeholder="Enter your search query"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={handleSearch}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          position: "sticky",
          // zIndex: "999",
          // backgroundColor: "white",
        }}
      />
      {loading && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Spin size="large" />
        </div>
      )}
      <List
        style={{ marginTop: "20px" }}
        bordered
        dataSource={results}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              }
              description={item.snippet}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default FacebookGroupSearchView;
