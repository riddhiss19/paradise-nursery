import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';
import LandingPage from "./components/LandingPage";
import ProductSelectionPage from './components/ProductSelectionPage';
import CartPage from './components/CartPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router basename="/paradise-nursery">
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/product-listing" element={<ProductSelectionPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
