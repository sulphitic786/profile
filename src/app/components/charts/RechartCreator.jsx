import { ResponsiveContainer } from "recharts";
import React from "react";

const RechartCreator = ({ height = "320px", width = "100%", children }) => {
  return (
    <div style={{ height, width }}>
      <ResponsiveContainer>{children}</ResponsiveContainer>
    </div>
  );
};

export default RechartCreator;
