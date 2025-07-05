import { useState } from "react";
import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { DEFAULT_TAB_LIST } from "./constant";
import "./index.scss";

export default function Index() {
  const [activeTab, setActiveTab] = useState(0);
  const innerStyle = {
    width: `${100 / DEFAULT_TAB_LIST.length}%`,
    transform: `translateX(${activeTab * 100}%)`,
  };

  useLoad(() => {
    console.log("Page loaded.");
  });

  const onChangeTab = (tab) => {
    console.log(`Tab changed to: ${tab}`);
    setActiveTab(tab);
  };

  return (
    <View className="index-container">
      <View className="top">
        <View className="tab-list">
          {DEFAULT_TAB_LIST.map((item) => (
            <View
              className={`tab-item ${activeTab === item.index ? "active" : ""}`}
              key={item.index}
              onClick={() => onChangeTab(item.index)}
            >
              {item.title}
            </View>
          ))}
        </View>
        <View className="scrollbar" style={innerStyle} />
      </View>
      {DEFAULT_TAB_LIST[activeTab]["tab"] === "flight" ? (
        <View className="content">111</View>
      ) : (
        <View className="content">222</View>
      )}
    </View>
  );
}
