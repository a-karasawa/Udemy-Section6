import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// const App = () => {
//   return (
//     //JSX記法のルール
//     //リターンするHTMLは1つのタグで囲まないといけない

//     //<React.Fragment>⇒タグを1つにしたいときに利用
//     //<>でも<React.Fragment>と同じ意味を持つ
//     <>
//       <h1>こんにちは</h1>
//       <p>お元気ですか？</p>
//     </>
//   );
// };

ReactDom.render(<App />, document.getElementById("root"));
