import React from "react";
import css from "@/styles/PopularTrends.module.css";
import { Alert, Avatar, Flex, Typography } from "antd";
import { mockTrends } from "@/mock/mockTrends";
import Iconify from "./Iconify";
import { getPopularTrends } from "@/actions/post";
import { QueryClient, useQuery } from "@tanstack/react-query";
const PopularTrends = async () => {
  const queryClient = new QueryClient();
  try {
    const { data } = await queryClient.fetchQuery({
      queryKey: ["trends"],
      queryFn: getPopularTrends,
      // stale time is 1 day
      staleTime: 1000 * 60 * 60 * 24,
    });
    return (
      <div className={css.wrapper}>
        <div className={css.bg} />
        {/* head */}
        <div className={css.container}>
          <Flex vertical>
            <Typography className="typoSubtitle2">TOP THỊNH HÀNH</Typography>
            <Typography className="typoH4">#Nổi bật</Typography>
          </Flex>

          <Flex vertical gap={15}>
            {data.map((trend, i) => (
              <Flex key={i} gap={"1rem"} align="center">
                {/* trend icon */}
                <Avatar
                  style={{ background: "#FF990047" }}
                  icon={
                    <Iconify
                      icon="mingcute:hashtag-fill"
                      color="var(--primary)"
                      width="18px"
                    />
                  }
                />
                {/* trend info */}
                <Flex vertical>
                  <Typography
                    className="typoSubtitle1"
                    style={{ fontWeight: "bold" }}
                  >
                    {trend.name}
                  </Typography>
                  <Typography
                    className="typoCaption"
                    style={{ fontWeight: "bold", color: "gray" }}
                  >
                    {trend?._count?.name} Bài viết
                  </Typography>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </div>
      </div>
    );
  } catch (err) {
    return (
      <Alert
        message="Error"
        description="Lỗi. Không tải được dữ liệu thịnh hành!"
        type="error"
        showIcon
      />
    );
  }
};

export default PopularTrends;
