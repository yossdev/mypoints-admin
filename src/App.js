import { BrowserRouter,Routes, Route } from "react-router-dom"

import Login from "./components/pages/login"
import Register from "./components/pages/register"
import Dashboard from "./components/pages/dashboard"
import Agents from "./components/pages/agents"
import Product from "./components/pages/product"
import Reward from "./components/pages/reward"
import History from "./components/pages/history"
import NotFound from "./components/pages/notFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="login" element={<Login/>}></Route>
          <Route path="register" element={<Register/>}></Route>
          <Route path="dashboard" element={<Dashboard/>}></Route>
          <Route path="agents" element={<Agents/>}></Route>
          <Route path="product" element={<Product/>}></Route>
          <Route path="reward" element={<Reward/>}></Route>
          <Route path="history" element={<History/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
          
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
