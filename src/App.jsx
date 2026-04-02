import './App.css'
import LandingPage from './pages/LandingPage.jsx'
import Login from "./pages/Login.jsx";
import { Routes, Route } from 'react-router-dom'
import StudentDashboard from './pages/StudentDashboard.jsx';
import AttendancePage from './pages/AttendancePage.jsx';
import ChatPage from './pages/ChatPage.jsx';
import CalenderPage from './pages/CalenderPage.jsx';
import ApplyLeave from './pages/ApplyLeave.jsx';
import WeeklyFeedback from './pages/WeeklyFeedback.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import FeedbackPage from './pages/feedbackPage.jsx';

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
        <Route path='/student/apply-leave' element={<ApplyLeave />} />
        <Route path='/student/weekly-subject-feedback' element={<WeeklyFeedback />} />
        <Route path='/student/profile' element={<ProfilePage />} />
        <Route path='/student/feedback' element={<FeedbackPage />} />
      </Routes>
    </>
  )
}

export default App
