import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar.jsx";
import { Shop } from './pages/shop/shop'
import { Cart } from './pages/cart/cart'
import { ShopContextProvider } from "./context/shop-context";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";

function App() {
  return (
    <div className="App"> 
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  )
};

export default App;
