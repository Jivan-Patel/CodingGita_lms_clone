import './App.css'
import LandingPage from './pages/LandingPage.jsx'
import Login from "./pages/Login.jsx";
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
