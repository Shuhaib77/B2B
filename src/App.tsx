
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
    
      </div>
    </>
  )
}

export default App
