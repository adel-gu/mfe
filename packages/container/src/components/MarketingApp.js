import React, { useEffect, useRef } from 'react';
import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, [mount, ref]);

  return <div ref={ref} />;
};
export default MarketingApp;
