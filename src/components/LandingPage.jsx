import React from 'react'
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {

  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/product-listing');
  };
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/paradise-nursery/bg.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 text-center text-white px-6 md:px-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Welcome to<br />Paradise Nusrey</h1>
        <p className="text-md md:text-lg mb-8 text-white-400">where green meets serenty!</p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          onClick={handleGetStarted}>Get Started</button>
      </div>
      <div className="z-10 max-w-3xl text-white text-center mt-8 px-4 md:px-4">
        <p className="text-md md:text-lg mb-4">
        With only a few clicks, the Paradise Nursery Online Shop offers a large selection of plants, trees, and gardening supplies, bringing the beauty of nature right to your door. The online store is made to accommodate gardeners of all skill levels, whether they are searching for speciality trees, indoor plants, or outdoor shrubs. Finding exactly what you need is made simple by Paradise Nursery's online platform, which offers thorough plant descriptions, maintenance recommendations, and professional guidance. Your one-stop shop for turning your area into a verdant haven is Paradise Nursery Online Shop, which offers easy delivery choices and a constantly growing catalogue.
        </p>
        
      </div>
    </div>
  )
}

export default LandingPage;
