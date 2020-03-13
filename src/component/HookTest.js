import React, {useState,useEffect} from 'react';

// 自定义hook是一个函数，名称用“use"开头，函数内部可以调用其他钩子
function useAge() {
    const [age, setAge] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setAge(20);
        }, 2000);
    });
    return age;
}

export default function HookTest () {
    const [count,setCount] =useState(0)
    const [furst,setFurst]=useState(['apple','banana'])
    const [curFurst,setCurFurst]=useState("apple")
    const [input,setInput]=useState("")
    const age=useAge()

    useEffect(()=>{
        document.title=`点击了${count}次`;
        console.log("点击了```````````")
    },[count])

    useEffect(()=>{
        console.log(age)
    })

    return (
        <div>
            <p>数量:{count}</p>
            <p>年龄:{age?age:'loading...'}</p>
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
