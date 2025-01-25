import { mount } from "marketing/marketingBootstrap";
import React, { useRef, useEffect } from "react";

export const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
