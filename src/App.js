import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddProductPage from "./pages/AddProductPage";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addproduct" element={<AddProductPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
