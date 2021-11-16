import React, { useState } from "react";
import "../App.css";
import VideoList from "./VideoList";
import Main from "./Main";
import SearchBox from "./SearchBox";
import SideMenu from "./Menu";
import { Layout, Button } from "antd";

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, toggleCollapsed] = useState(true);
  return (
    <div className="App">
      <Layout>
        <Header>
          <SearchBox />
        </Header>
        <Layout>
          <Sider collapsed={collapsed}>
            <Button
              type="primary"
              onClick={() => toggleCollapsed(!collapsed)}
              style={{ marginBottom: 16 }}
            >
              open
            </Button>
            <SideMenu />
          </Sider>
          <Content>
            <Main />
          </Content>
          <Sider>
            <VideoList />
          </Sider>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
