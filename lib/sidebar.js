export const sidebarRoutes = (user) => [
  {
    name: "Trang chủ",
    icon: "eva:home-fill",
    route: "/",
  },
  {
    name: "Hồ sơ cá nhân",
    icon: "bi:person-fill",
    route: `/profile/${user?.id}`,
  },
  {
    name: "Tra cứu thời tiết",
    icon: "bi:cloud",
    route: `/weather`,
  },
  {
    name: "Chất lượng không khí",
    icon: "material-symbols:air",
    route: `/air-quality`,
  },
  {
    name: "Tìm kiếm",
    icon: "bi:search",
    route: `/facebook-group-search`,
  },
  {
    name: "Carbon Game",
    icon: "bi:controller",
    route: `/carbon-game`,
  },
  {
    name: "Nhắn tin",
    icon: "eva:message-circle-fill",
    route: "/messages",
  },
];
