<<<<<<< HEAD
import Login from "./pages/login"
import Register from "./pages/register"
import Dashboard from "./pages/dashboard"
import Agents from "./pages/agents"
import Product from "./pages/product"
import Reward from "./pages/reward"
import History from "./pages/history"
import NotFound from "./pages/notFound"
=======
import Login from "./pages/Login/login"
import Register from "./pages/Register/register"
import Dashboard from "./pages/Dashboard/dashboard"
import Agents from "./pages/Agents/agents"
import Product from "./pages/Product/product"
import Reward from "./pages/Reward/reward"
import History from "./pages/History/history"
>>>>>>> 49b7a498f3d446760bca566e58dfb596e823d034

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
<<<<<<< HEAD
          <Route path="/notfound" exact element={<NotFound/>}></Route>
=======
>>>>>>> 49b7a498f3d446760bca566e58dfb596e823d034
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
