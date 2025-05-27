import React, { useState } from "react";
import { Radio, Space } from "antd";
import type { RadioChangeEvent } from 'antd';

interface ButtonComponentProps {
  label: string;
  type: string;
  val: string | string[];
  size: "small" | "middle" | "large";
  onChange?: (value: string, index: number) => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  label,
  type,
  val,
  size,
  onChange,
}) => {
  const options = Array.isArray(val) ? val : [val];
  const [picked, setPick] = useState<string>(options[0]);

  const handleChange = (e: RadioChangeEvent) => {
    const selectedValue = e.target.value;
    setPick(selectedValue);

    if (onChange) {
      const index = options.indexOf(selectedValue);
      onChange(selectedValue, index);
    }
  };

  let tipe = null;

  if (type === "radio") {
    tipe = (
      <Space>
        <Radio.Group value={picked} onChange={handleChange} size={size}>
          {(val as string[]).map((elem, index) => (
            <Radio.Button key={index} value={elem}>
              {elem}
            </Radio.Button>
          ))}
        </Radio.Group>
      </Space>
    );
  }

  return tipe;
};

export default ButtonComponent;
