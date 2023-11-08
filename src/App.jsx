import React, { useEffect, useState } from "react";
//import ColofuleMessage from "./components/ColoflMessage"; //export defaultの場合
import { ColofuleMessage } from "./components/ColoflMessage"; //export constの場合（分割代入が必要）

//Reactのコンポーネント専用に「.jsx」という拡張子が用意されている。
//コンポーネント名は必ず大文字から始める。

//{}で囲むとその中身はJavaScriptとして認識される。
const App = () => {
  console.log("最初");
  //num変数
  //setNum関数
  const [num, setNum] = useState(0);
  const [faceShowFlag, setSaceShowFlag] = useState(true);

  const onClickButton = () => alert();
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setSaceShowFlag(!faceShowFlag);
  };

  //関心を分離する
  //useEffectの第2引数に配列をセットできる。[]を指定すると最初の1回だけ実行される。
  //[num]を指定するとnumが変更された時だけ実行される。
  useEffect(() => {
    console.log("useEffect");
    if (num % 3 === 0) {
      // 「||」は左辺がFalseの場合のみ実行される。
      faceShowFlag || setSaceShowFlag(true);
    } else {
      // 「&&」は左辺がTrueの場合のみ実行される。
      faceShowFlag && setSaceShowFlag(false);
    }
  }, [num]);

  //State、Propsを変更すると再レンダリングされる。
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColofuleMessage
        color="blue"
        message="コンポーネントに対してPropsを渡す"
      />
      <ColofuleMessage color="pink" message="元気です。" />
      <ColofuleMessage color="pink">チルドレン</ColofuleMessage>
      <button onClick={onClickButton}>ボタン</button>
      <br />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {faceShowFlag && <p>( ´∀｀)</p>}
    </>
  );
};

//他のファイルでも利用できるようにエクスポートする。
export default App;
