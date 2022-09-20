import React from 'react'

type Props = {}

const Input = (props: Props) => {
  return (
    <div className='flex justify-center w-5/6 my-16'>
    <h1 className='text-3xl font-semibold mx-5'>Enter Your Task</h1>
        <input type={"text"} className="h-10 w-2/6 bg-slate-100 text-3xl mx-5"></input>
        <button className='h-10 w-32 bg-slate-300 mx-5'>Add</button>
    </div>
  )
}

export default Input