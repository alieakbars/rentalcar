import { Tabs } from "antd";
import React from "react";

const Description: React.FC = () => {
  const popularLocations = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Miami",
    "Las Vegas",
    "Orlando",
    "San Francisco",
    "Denver",
  ];
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
          <Tabs.TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </Tabs.TabPane>
        </Tabs>
      </div>
    </section>
  );
};

export default Description;
