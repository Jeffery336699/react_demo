import React, {Component} from 'react';
import Lifecycle from "./Lifecycle";

class TiaoJian extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            goods: [
                {id: 1, name: 'Android工程师'},
                {id: 2, name: 'Python工程师'},
                {id: 3, name: 'Java工程师'},
            ],
            cart: [],
            prop:"some thing"
        }
        //2.1采用绑定函数方式
        this.addGood = this.addGood.bind(this)
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                prop:"prop change~~~"
            })
        },2000)

        setTimeout(()=>{
            this.setState({
                prop:''
            })
        },4000)
    }

    render() {
        //条件语句三元判断
        const title = this.props.title ? <h1>{this.props.title}</h1> : null

        return (
            <div>
                {title}
                {/*上面条件语句简写*/}
                {this.props.title && <h1>{this.props.title}</h1>}
                {/*列表渲染*/}
                <ul>
                    {this.state.goods.map((item) =>
                        <li key={item.id}>
                            {item.name}
                            <button onClick={() => {
                                this.goodToCart(item)
                            }}>加购
                            </button>
                        </li>)}
                </ul>
                <input type='text' value={this.state.text} onChange={this.textChange}/>
                <button onClick={this.addGood}>添加商品</button>
                <Cart data={this.state.cart} add={this.add} minus={this.minus}></Cart>
                <hr/>
                {this.state.prop && <Lifecycle prop={this.state.prop}></Lifecycle>}

            </div>
        );
    }

    //购物车商品增加
    add= item => {
        //1.新建一个购物车
        let newCart = [...this.state.cart]
        //2.判读购物车里是否有原来的商品
        let number = newCart.findIndex(good => good.id === item.id);
        let newCartElement = newCart[number];
        //3.删除原来,在新增原来(只改数值+1)
            //4.只修改原来的item的数量加+1
        newCart.splice(number, 1, {...newCartElement, count: newCartElement.count + 1})
        //5.更新cart的值
        this.setState({cart: newCart})
    }

    //购物车商品减少
    minus= item => {
        //1.新建一个购物车
        let newCart = [...this.state.cart]
        //2.判读购物车里是否有原来的商品
        let number = newCart.findIndex(good => good.id === item.id);
        let newCartElement = newCart[number];
        //3.删除原来,在新增原来(只改数值+1)
        //4.只修改原来的item的数量加-1
        newCart.splice(number, 1, {...newCartElement, count: newCartElement.count - 1})
        //5.更新cart的值
        this.setState({cart: newCart})
    }



    //1.采用箭头函数 方式
    textChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    //2.采用绑定方式
    addGood() {
        this.setState(preState => {
            return {goods: [...preState.goods, {id: preState.goods.length + 1, name: preState.text}]}
        })
    }

    //商品添加到购物车
    goodToCart = item => {
        //1.新建一个购物车
        let newCart = [...this.state.cart]
        //2.判读购物车里是否有原来的商品
        let number = newCart.findIndex(good => good.id === item.id);
        let newCartElement = newCart[number];
        //3.删除原来,在新增原来(只改数值+1)
        if (newCartElement) {
            //4.只修改原来的item的数量加+1
            newCart.splice(number, 1, {...newCartElement, count: newCartElement.count + 1})
        } else {
            newCart.push({...item,count:1})
        }
        //5.更新cart的值
        this.setState({cart: newCart})
    }

}

export default TiaoJian;

//{data}解构只关心Cart中data的属性
function Cart({data,add,minus}) {
    return <div>
        <table>
            <tbody>
            {data.map(item => <tr key={item.id}>
                <td>{item.name}</td>
                    <button onClick={()=>minus(item)}>-</button>
                        <td>{item.count}</td>
                    <button onClick={()=>add(item)}>+</button>
                <td>"id:" {item.id}</td>
            </tr>)}
            </tbody>
        </table>
    </div>
}


