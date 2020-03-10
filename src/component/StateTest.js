import React, {Component} from 'react';
class StateTest extends Component {
    state = {
        count: 1
    }
    componentDidMount() {
        //这样批量执行OK
        this.setState(preState=>{
            return {count: preState.count + 1}
        })
        this.setState(preState=>{
            return {count: preState.count + 1}
        })
        this.setState(preState=>{
            return {count: preState.count + 1}
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.count}</h3>
            </div>
        );
    }
}
export default StateTest;
