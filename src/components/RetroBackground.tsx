
import React from 'react';

const RetroBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden old-ui-pattern">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 opacity-70"></div>
      <div className="absolute -top-[50vh] -left-[50vh] w-[100vh] h-[100vh] rounded-full bg-blue-200/20 blur-3xl"></div>
      <div className="absolute -bottom-[50vh] -right-[50vh] w-[100vh] h-[100vh] rounded-full bg-gray-400/20 blur-3xl"></div>
    </div>
  );
};

export default RetroBackground;
