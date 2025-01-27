import { mount } from "dashboard/dashboardBootstrap";
import React, { useRef, useEffect } from "react";

export const DashboardApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default DashboardApp;