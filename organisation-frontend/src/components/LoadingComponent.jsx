import React from "react";
import ReactLoading from 'react-loading';

const LoadingComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <ReactLoading type="bars" color="red" />
    </div>
  );
};

export default LoadingComponent;
