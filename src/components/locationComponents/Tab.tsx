import { Tabs } from "antd";
import React from "react";
import Tnc from "./Tnc";
import Facility from "./Facility";
import Description from "./Description";
import { Import } from "lucide-react";

interface TabProps {
  id?: string;
}

const Tab: React.FC<TabProps> = ({id}) => {
  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Deskripsi" key="1">
            <div className="bg-white shadow-md rounded-lg p-5">
              <Description  id={id}/>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Fasilitas" key="2">
            <div className="bg-white shadow-md rounded-lg p-5">
              <Facility />
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Syarat dan Ketentuan" key="3">
            <div className="bg-white shadow-md rounded-lg p-5">
              <Tnc />
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </section>
  );
};

export default Tab;
