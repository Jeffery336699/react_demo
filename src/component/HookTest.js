import React, {useState} from 'react';

export default function HookTest () {
    const [count,setCount] =useState(0)
    const [furst,setFurst]=useState(['apple','banana'])
    const [curFurst,setCurFurst]=useState("apple")
    const [input,setInput]=useState("")

    return (
        <div>
            <p>数量:{count}</p>
            <button onClick={()=>setCount(count+1)}>增加数量</button>
            <p>选中水果:{curFurst}</p>
            <input type='text' value={input} onChange={e=>setInput(e.target.value)}/>
            <button onClick={()=>{
                setFurst([...furst,input])
            }}>增加水果</button>
            <ul>
                {furst.map(item=>(<li key={item} onClick={()=>setCurFurst(item)}>{item}</li>))}
            </ul>
        </div>
    );
}
