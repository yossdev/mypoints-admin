import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import Login from './components/pages/Login'
import Register from './components/pages/Register'

import Dashboard from './components/pages/Dashboard'
import Agent from './components/pages/Agents'
import Product from './components/pages/Product'
import Reward from './components/pages/Reward'

import Profile from './components/pages/Profile'

// import PrivateRoute from './components/private/PrivateRoute'

import NotFound from './components/pages/NotFound'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Private */}
        {/* <Route element={<PrivateRoute />}> */}
        {/* <Route element={<DashboardLayout />}> */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="agent" element={<Agent />} />
        <Route path="product" element={<Product />} />
        <Route path="reward" element={<Reward />} />
        <Route path="profile" element={<Profile />} />
        {/* </Route> */}
        {/* </Route> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
