
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Authentication'
import Dashboard from './pages/Dashboard'
import WholesailerHome from './pages/WholesailerHome'
import WholesailerProductView from './pages/WholesailerProductView'


function App() {
  return (
    <>
      <div>
        <Routes>

          <Route path='/login' element={<Login/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/dashboard/:url/:id' element={<Dashboard/>}></Route>
          <Route path='/wholesailerh' element={<WholesailerHome/>}></Route>
          <Route path='/allproduct' element={<WholesailerProductView/>}></Route>
        </Routes>

    
      </div>
    </>
  )
}

export default App
