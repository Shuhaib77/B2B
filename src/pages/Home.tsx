import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function Home() {
  return (
    <div className='flex'>
         <div>
            <Sidebar/>
        </div>
        <div>
            <Header/>
        </div>
    </div>
  )
}

export default Home