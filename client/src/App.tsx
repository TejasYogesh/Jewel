import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Intro from './Pages/Intro';
import CustomDesign from './Pages/CustomDesign';
import Nearby from './Pages/Nearby';
import Location from './Pages/Location';
import Login from './Pages/Login';
import Second from './Pages/Second';
import Collections from './Pages/Collections';
import Category from './Pages/Category';
import Parts from './Pages/Parts';
import Payment from './Pages/Payment';
import About from './Pages/About';
import YourOrders from './Pages/YourOrders';
import BuyNow from './Pages/BuyNow';
import BuySet from './Pages/BuySet';
import Success from './Pages/success';
import Register from './Pages/Register';
import RequireAuth from './Pages/RequireAuth';
import { Navigate } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root path to /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        } />
        {/* <Route path="/home" element={<Home />} /> Add this line */}
        <Route path="/intro" element={<Intro />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/customDesign" element={<CustomDesign />} />
        <Route path="/nearby" element={<Nearby />} />
        <Route path="/location" element={<Location />} />
        <Route path="/login" element={<Login />} />
        <Route path="/second" element={<Second />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/category" element={<Category />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/payment" element={<Payment />} />
        <Route path='/Contact' element={<About />} />
        <Route path='/yourorders' element={<YourOrders />} />
        <Route path="/buy/:id" element={<BuyNow />} />
        <Route path="/buyset/:id" element={<BuySet />} />
        <Route path="/success" element={<Success />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;