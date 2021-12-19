import Login from "./pages/Login/login"
import Register from "./pages/Register/register"
import Dashboard from "./pages/Dashboard/dashboard"
import Agents from "./pages/Agents/agents"
import Product from "./pages/Product/product"
import Reward from "./pages/Reward/reward"
import History from "./pages/History/history"

import { BrowserRouter,Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/login" exact element={<Login/>}></Route>
          <Route path="/register" exact element={<Register/>}></Route>
          <Route path="/" exact element={<Dashboard/>}></Route>
          <Route path="/agents" exact element={<Agents/>}></Route>
          <Route path="/product" exact element={<Product/>}></Route>
          <Route path="/reward" exact element={<Reward/>}></Route>
          <Route path="/history" exact element={<History/>}></Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
