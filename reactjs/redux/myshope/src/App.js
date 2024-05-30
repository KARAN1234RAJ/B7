import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productid" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
