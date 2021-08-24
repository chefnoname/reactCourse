import React from "react";

const DemoOutput = (props) => {
  console.log("DemoOutput running");

  console.log("lets see if it executes again");
  return <p>{props.show ? "Why does React make this laptop so slow?" : ""}</p>;
};

export default React.memo(DemoOutput);
