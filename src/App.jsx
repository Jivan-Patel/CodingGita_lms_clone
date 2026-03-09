import './App.css'
import LandingPage from './pages/LandingPage.jsx'
import Login from "./pages/Login.jsx";
import { Routes, Route } from 'react-router-dom'
import StudentDashboard from './pages/StudentDashboard.jsx';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/student' element={<StudentDashboard />} />
      </Routes>
    </>
  )
}

export default App
