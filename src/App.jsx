import "./App.css";
import Products from "./Products";
import Product from "./Product";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </main>
  );
}

export default App;
