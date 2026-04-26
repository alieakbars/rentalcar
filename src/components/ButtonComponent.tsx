import React, { useState } from "react";
import { Radio, Space, Button } from "antd";
import type { RadioChangeEvent } from "antd";

interface ButtonComponentProps {
  label: string;
  type: string;
  val: string | string[];
  size: "small" | "middle" | "large";
  onChange?: (value: string, index: number) => void;
  onClick?: () => void;
  // 1. Tambahkan prop disabled di interface
  disabled?: boolean; 
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  label,
  type,
  val,
  size,
  onChange,
  onClick,
  disabled, // 2. Ambil dari props
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
        {/* 3. Tambahkan disabled ke Radio.Group agar semua pilihan mati */}
        <Radio.Group 
          value={picked} 
          onChange={handleChange} 
          size={size} 
          disabled={disabled}
        >
          {(val as string[]).map((elem, index) => (
            <Radio.Button key={index} value={elem}>
              {elem}
            </Radio.Button>
          ))}
        </Radio.Group>
      </Space>
    );
  } else if (type === "primary") {
    // 4. Tambahkan disabled ke Button Ant Design
    tipe = (
      <Button 
        type="primary" 
        onClick={onClick} 
        size={size} 
        disabled={disabled}
      >
        {label}
      </Button>
    );
  }

  return tipe;
};

export default ButtonComponent;