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
function App() {
  return (
    <Router>
      <Routes>
        {/* Define Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/customDesign" element={<CustomDesign />} />
        <Route path="/nearby" element={<Nearby />} />
        <Route path="/location" element={<Location />} />
        <Route path="/login" element={<Login />} />
        <Route path="/second" element={<Second />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/category" element={<Category />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/payment" element={<Payment />} />
        <Route path='/about' element={<About />} />
        <Route path='/yourorders' element={<YourOrders/>}/>
      </Routes>
    </Router>
  );
}

export default App;