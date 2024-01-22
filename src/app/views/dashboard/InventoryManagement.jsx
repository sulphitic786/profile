import { styled, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import InventoryDashboard from "./shared/InventoryDashboard";
import RecentUpdates from "./shared/RecentUpdates";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const InventoryManagement = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Container className="analytics">
      <Tabs
        value={tabIndex}
        textColor="primary"
        indicatorColor="primary"
        onChange={(e, value) => setTabIndex(value)}
        sx={{ mt: 2, mb: 3 }}
      >
        {["Dashboard", "Recent Updates"].map((item, ind) => (
          <Tab
            key={ind}
            value={ind}
            label={item}
            sx={{ px: "35px", textTransform: "capitalize" }}
          />
        ))}
      </Tabs>

      {tabIndex === 0 && <InventoryDashboard />}
      {tabIndex === 1 && <RecentUpdates />}
    </Container>
  );
};

export default InventoryManagement;
