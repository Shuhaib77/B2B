import React from 'react'

function Header({setOpen,open}) {
  return (
    <div>
        <div className='flex justify-between h-[50px] bg-[#7942af70] items-center '>
           <h1 onClick={()=>{
          open === false?setOpen(true):setOpen(false)
            
           }}>MENU</h1>
             <h1>hii</h1>
            <h1>hii</h1>
            <h1>hii</h1>
            <h1>hii</h1>
            <h1>hii</h1>
        </div>
    </div>
  )
}

export default Header