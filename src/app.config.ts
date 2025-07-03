export default defineAppConfig({
  pages: ["pages/index/index", "pages/order/order"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#666",
    selectedColor: "#333",
    backgroundColor: "#fff",
    list: [
      {
        pagePath: "pages/index/index",
        selectedIconPath: "assets/images/index-selected.png",
        iconPath: "assets/images/index-unselected.png",
        text: "首页",
      },
      {
        pagePath: "pages/order/order",
        selectedIconPath: "assets/images/order-selected.png",
        iconPath: "assets/images/order-unselected.png",
        text: "订单",
      },
    ],
  },
});
