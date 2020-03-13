import React, {useContext} from 'react';
//1.创建Context
const MyContext=React.createContext();
//2.单独结构出来Provider,Consumer,并且必须是从同一Context中
const {Provider,Consumer}=MyContext
function Child (props){
    return (
        <div>
            {props.foo}
        </div>
    );
}

//从Hook中获取值
function Child2 (){
   const ctx=useContext(MyContext)
    return (
        <div>
            {ctx.foo}
        </div>
    );
}

//使用class指定静态contextType获取值
class Child3 extends React.Component{
   static contextType=MyContext;
    render() {
        return <div>
            {this.context.foo}
        </div>;
    }
}


function ContextTest (){
    return (
        <div>
            {/*3.Provider提供值*/}
            <Provider value={{foo:'123'}}>
               {/*4.1 消费方法1:Consumer中通过函数拿到值*/}
               <Consumer>
                   {value=><Child {...value}/>}
               </Consumer>

                {/*4.2 消费方法2:通过hook拿到值*/}
                <Child2/>

                {/*4.3 消费方法2:通过class contextType拿到值*/}
                <Child3/>

            </Provider>
        </div>
    );
}

export default ContextTest;
