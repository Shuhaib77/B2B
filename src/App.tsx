
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Authentication'
import Dashboard from './pages/Dashboard'
import WholesailerHome from './pages/WholesailerHome'
import WholesailerProductView from './pages/WholesailerProductView'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Orders from './pages/Orders'


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
          <Route path='/productdetail' element={<ProductDetails/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/orders' element={<Orders/>}></Route>
        </Routes>

    
      </div>
    </>
  )
}

export default App
