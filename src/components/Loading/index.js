import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ type, color }) => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "lightgray",
      width: 100,
      height: 100,
      borderRadius: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <ReactLoading
      type={type}
      color={color || "#777b74"}
      //   height={667}
      //   width={375}
    />
  </div>
);

export default Loading;
