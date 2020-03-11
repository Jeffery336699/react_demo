import React, {Component} from 'react';

const API = {
    getUser: {name: 'Jeffery', age: 20}
}

function Fetcher(props) {
    const user = API[props.name];
    console.log(user.name)
    return props.children(user);
}

function Filter({ children, type }) {
    return (
        <div>
            {React.Children.map(children, child => {
                if (child.type !== type) {
                    return;
                }
                return child;
            })}
        </div>
    );
}

// 修改children
function RadioGroup(props) {
    return (
        <div>
            {React.Children.map(props.children, child => {
                //   vdom不可更改，克隆一个新的去改才行
                return React.cloneElement(child, { name: props.name });
            })}
        </div>
    );
}

//...rest表示props中除了children后剩余的属性
function Radio({children, ...rest}) {
    let value = rest.value;
    console.log("value-"+value)
    return (
        <label>
            <input type="radio" {...rest} />
            {children}
        </label>
    );
}


export default function ComponentMul2() {
    return <div>
        {/*<Fetcher name='getUser'>*/}
        {/*    {({name, age}) => (<p>{name}--{age}</p>)}*/}
        {/*</Fetcher>*/}


        {/* 过滤器，可以过滤出指定标签类型 */}
        {/*<Filter type="p">*/}
        {/*    <h1>react</h1>*/}
        {/*    <p>react很不错</p>*/}
        {/*    <h1>vue</h1>*/}
        {/*    <p>vue很不错</p>*/}
        {/*</Filter>*/}

        <RadioGroup name="mvvm">
            <Radio value="vue">vue</Radio>
            <Radio value="react">react</Radio>
            <Radio value="react">angular</Radio>
        </RadioGroup>
    </div>;
}
