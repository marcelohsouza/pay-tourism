import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Register from './components/Register'
import HomePage from './pages/home'
import AgencyDashboard from './pages/dashboard' 

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path='/dashboard' element={<AgencyDashboard/>} />
      </Routes>
    </Router>
  )
}

export default App
