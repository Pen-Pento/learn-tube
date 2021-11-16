import React from "react";
import { Menu, Button } from "antd";

const { SubMenu } = Menu;

const SideMenu = () => {
  return (
    <>
      <Menu defaultSelectedKeys={["1"]} mode="inline" theme="dark">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </Menu>
    </>
  );
};

export default SideMenu;
