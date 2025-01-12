"use client";
import React from "react";
import Box from "./Box";
import css from "@/styles/FollowSuggestions.module.css";
import { Alert, Avatar, Flex, Skeleton, Typography } from "antd";
import UserBox from "./UserBox";
import { getFollowSuggestions } from "@/actions/user";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
const FollowSuggestions = () => {
  const { user: currentUser } = useUser();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user", "followSuggestions"],
    queryFn: () => getFollowSuggestions(),
    enabled: !!currentUser,
    staleTime: 1000 * 60 * 20,
  });

  return (
    <div className={css.wrapper}>
      <Box>
        <div className={css.container}>
          <div className={css.title}>
            <Typography className={"typoSubtitle1"}>
              Có thể bạn sẽ quan tâm!
            </Typography>
          </div>

          {isLoading && (
            // skelton
            <Flex vertical gap={"1rem"}>
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <Flex key={i} gap={"1rem"}>
                    <Avatar size={40} />
                    <Flex vertical>
                      <Typography.Text className={"typoBody2"} strong>
                        <Skeleton.Input active size={"small"} />
                      </Typography.Text>
                      <Typography.Text
                        className={"typoCaption"}
                        strong
                        type="secondary"
                      >
                        <Skeleton.Input
                          active
                          size={"small"}
                          style={{ height: ".5rem", marginTop: ".4rem" }}
                        />
                      </Typography.Text>
                    </Flex>
                  </Flex>
                ))}
            </Flex>
          )}

          {isError && (
            <Alert
              message="Error"
              description="Lỗi. Vui lòng thử lại sau!"
              type="error"
              showIcon
            />
          )}

          {/* suggestions*/}
          {!isLoading && !isError && data?.length > 0
            ? data?.map((user) => (
                <UserBox
                  loggedInUserData={currentUser}
                  key={user.id}
                  data={{
                    follower: user,
                  }}
                  type={"follower"}
                  
                />
              ))
            : !isLoading &&
              !isError &&
              data?.length === 0 && (
                <Typography.Text type="secondary">
                  Không có gợi ý nào!
                </Typography.Text>
              )}
        </div>
      </Box>
    </div>
  );
};

export default FollowSuggestions;
