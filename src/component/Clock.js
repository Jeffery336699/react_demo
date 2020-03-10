import React, {Component} from 'react';

class Clock extends Component {

    state={
        date:new Date()
    }

    //组件挂载上去时候的生命周期函数
    componentDidMount() {
      this.timer=  setInterval(()=>{
          //采用setState()来更新状态
            this.setState({
                date:new Date()
            })
        },1000)
    }

    //组件没有挂载上去时需要销毁计时器
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}

export default Clock;
