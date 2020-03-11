import React, {Component} from 'react';

const withKaikeba=Comp=>{
    //获取name,name可以来自接口或其他手段
    const name="kaikeba"
    return class NewComp extends React.Component{
        componentDidMount() {
            console.log("do  something")
        }
        render() {
            return <Comp {...this.props} name={name}></Comp>;
        }
    }
}

//日志记录功能的高阶函数组件
const withLog=Comp=>{
    console.log(Comp.name+'渲染了')
    return props=><Comp {...props}></Comp>
}

//顺序是按照从上往下,并且高阶函数需要写到上面声明
@withLog
@withKaikeba
@withLog
class Kaikeba extends React.Component{
    render() {
        return <div>{this.props.stage}-{this.props.name}</div>;
    }
}

class Hoc extends Component {
    render() {
        return (
            <div>
               <Kaikeba stage='React11111111' />
            </div>
        );
    }
}
export default Hoc;
