import './App.css'
import LandingPage from './pages/LandingPage.jsx'
import Login from "./pages/Login.jsx";
import { Routes, Route } from 'react-router-dom'
import StudentDashboard from './pages/StudentDashboard.jsx';
import AttendancePage from './pages/AttendancePage.jsx';
import ChatPage from './pages/ChatPage.jsx';
import CalenderPage from './pages/CalenderPage.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/student' element={<StudentDashboard />} />
        <Route path='/student/attendance' element={<AttendancePage />} />
        <Route path='/student/chat-groups' element={<ChatPage />} />
        <Route path='/student/calendar' element={<CalenderPage />} />
      </Routes>
    </>
  )
}

export default App
