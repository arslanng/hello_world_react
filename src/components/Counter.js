import React, { useEffect, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    useEffect(()=>{
      console.log('count state update')
    },[count])
    useEffect(()=>{
      console.log('componet mounted')
       const interval = setInterval(()=>{
        setCount((n) => n+1
        )}, 1000);

      return () => clearInterval(interval)
    },[])

    const increase = () => {
        setCount(count-1)
    }

    const decrease = () => {
        setCount(count+1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={decrease}>Decrease</button>
        <button onClick={increase}>Increase</button>
    </div>
  )
}

export default Counter