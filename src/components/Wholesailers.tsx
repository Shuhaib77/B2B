import React from 'react'
import { useNavigate } from 'react-router-dom'

function Wholesailers() {
  const navigate=useNavigate()
  return (
    <div>
        <div className=' w-[70vw] shadow-2xl mt-10  h-[200px] rounded-3xl '>
            <div className='flex justify-around items-center h-full '>
                <h1>neeww whlesiler</h1>
                <div>
                    <button className='bg-blue-600 rounded pl-4 pr-4 p-3' onClick={()=>{
                      navigate("/wholesailerh")
                    }}>explore</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Wholesailers