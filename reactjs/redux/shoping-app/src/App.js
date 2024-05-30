import { Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/product/:productid" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
