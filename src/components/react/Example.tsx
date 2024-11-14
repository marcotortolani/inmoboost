import { useState } from 'react'

export default function Example() {
  const [count, setCount] = useState(0)
  console.log(count);
  
  return (
    <div className=" bg-sky-200 flex items-center gap-10">
      Example
      <button
        className=" bg-red-400 active:bg-red-600 p-2 active:scale-90 hover:scale-105"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Count
      </button>
      <p>Cuenta: {count}</p>
    </div>
  )
}
