import React, {Component} from 'react';

const API = {
    getUser: {name: 'Jeffery', age: 20}
}

function Fetcher(props) {
    const user = API[props.name];
    console.log(user.name)
    return props.children(user);
}

export default function ComponentMul2() {
    return <div>
        <Fetcher name='getUser'>
            {({name, age}) => (<p>{name}--{age}</p>)}
        </Fetcher>
    </div>;
}
