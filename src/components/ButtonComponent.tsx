import React, { useState } from "react";
import { Radio, Space } from "antd";

interface ButtonComponentProps {
  label: string;
  type: string;
  val: string | string[];
  size: "small" | "middle" | "large";
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  label,
  type,
  val,
  size,
}) => {
  const [picked, setPick] = useState<string | string[]>(
    Array.isArray(val) ? val[0] : val
  );
  console.log(val);

  let tipe = null;

  if (type === "radio") {
    tipe = (
      <Space>
        <Radio.Group
          value={picked}
          onChange={(e) => setPick(e.target.value)}
          size={size}
        >
          {(val as string[]).map((elem) => (
            <Radio.Button value={elem}>{elem}</Radio.Button>
          ))}
        </Radio.Group>
      </Space>
    );
  }

  return tipe;
};

export default ButtonComponent;
