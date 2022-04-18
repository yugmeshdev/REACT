import React,{useState} from 'react'

function HookCounter() {
    //array destructuring
   const [count,setCount]= useState(0);

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>count {count}</button>
    </div>
  )
}

export default HookCounter