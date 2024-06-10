import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Main from "./components/Main";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Product from "./pages/Product";

function App() {
  return (
    <main className="">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />}>
            <Route path="/products/:product" element={<Product />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
