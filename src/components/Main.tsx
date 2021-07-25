import React, { FC } from "react";
import { Layout } from "antd";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import StatusList from "./StatusList/StatusList";
import "./Main.scss";

const { Content } = Layout;

const Main: FC<{}> = () => {
  return (
    <Layout className='layout' style={{ background: "none" }}>
      <Header />
      <Content style={{ background: "none" }}>
        <div className='main'>
          <div className='hero-wrapper'>
            <h1 className='hero-title'> www.Shadab.com</h1>
            <p className='hero-sub-title'>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='status-section'>
            <div className='status-wrapper'>
              <StatusList />
            </div>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default Main;
