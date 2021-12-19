import Login from "./pages/login"
import Register from "./pages/register"
import Dashboard from "./pages/dashboard"
import Agents from "./pages/agents"
import Product from "./pages/product"
import Reward from "./pages/reward"
import History from "./pages/history"
import NotFound from "./pages/notFound"

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
          <Route path="/notfound" exact element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
