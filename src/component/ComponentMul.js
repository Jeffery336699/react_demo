import React, {Component} from 'react';

//职责分离,Dialog这里只做样式相关的处理
function Dialog(props) {
    //动态使用props中的color属性,如果传递了就用,没传递就是用默认blue
    //props.children表示 <Dialog>下面的子元素集
    return <div style={{border: `4px solid ${props.color || 'blue'}`}}>{props.children}
            {/*引入具名插槽,因为属性也可以传递jsx*/}
            {props.footer}
    </div>
}

//WelcomeDialog只做内容相关的处理
function WelcomeDialog(props) {
    return <Dialog {...props}>
        <h1>欢迎光临</h1>
        <p>希望您下次继续光顾</p>
    </Dialog>
}

export default function ComponentMul() {
    const footer=<button onClick={()=>alert('你好呀,Jeffery')}>按钮</button>
    return <WelcomeDialog color='red' footer={footer}></WelcomeDialog>
}
