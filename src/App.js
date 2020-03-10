import React from 'react';
import logo from './logo.svg';
import './App.css';
import TiaoJian from "./component/TiaoJian";
import Lifecycle from "./component/Lifecycle";
import AndtTest from "./component/AndtTest";
import CommentList from "./component/CommentList";

function App() {
  return (
    <div className="App">
      {/*计数器*/}
      {/*<TiaoJian></TiaoJian>*/}
    {/*  生米周期*/}
    {/*<Lifecycle></Lifecycle>*/}

    {/*导入外部库*/}
    {/*<AndtTest></AndtTest>*/}
    {/*PureComponnet*/}
    <CommentList></CommentList>

    </div>
  );
}

export default App;
