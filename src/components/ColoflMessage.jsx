import React from "react";

//props.childrenは呼び出し元のタグで囲った中身
export const ColofuleMessage = (props) => {
  console.log(props);
  const { color, children } = props; //分割代入
  const contentLedyStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentLedyStyle}>{children}</p>;
};

//export default ColofuleMessage;
