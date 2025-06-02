import { Tabs } from "antd";
import React from "react";
import Tnc from "./Tnc";

const Tab: React.FC = () => {
  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Deskripsi" key="1">
            <div className="bg-white shadow-md rounded-lg p-5">
              Content of Tab Pane 1
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Fasilitas" key="2">
            <div className="bg-white shadow-md rounded-lg p-5">
              Content of Tab Pane 1
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Syarat dan Ketentuan" key="3">
            <Tnc />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </section>
  );
};

export default Tab;
