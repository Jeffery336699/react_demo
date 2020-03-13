import React from 'react';
import logo from './logo.svg';
import './App.css';
import TiaoJian from "./component/TiaoJian";
import Lifecycle from "./component/Lifecycle";
import AndtTest from "./component/AndtTest";
import CommentList from "./component/CommentList";
import Hoc from "./component/Hoc";
import ComponentMul from "./component/ComponentMul";
import ComponentMul2 from "./component/ComponentMul2";
import HookTest from "./component/HookTest";

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
    {/*<CommentList></CommentList>*/}

    {/*高阶函数实践*/}
    {/*<Hoc></Hoc>*/}

    {/*复合组件*/}
    {/*<ComponentMul/>*/}

    {/*复合组件功能*/}
    {/*<ComponentMul2></ComponentMul2>*/}


    {/*  Hook*/}
    <HookTest/>


    </div>
  );
}

export default App;
