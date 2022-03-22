import logo from './logo.svg';
import './App.css';

import Header from './components/header/header.component';
import AboutPage from './pages/about/about.component'
import CheckoutPage from './pages/checkout/checkout.component'
import HomePage from './pages/homepage/homepage.component';
import StoreFront from './pages/storefront/storefront.component'
import Footer from './components/footer/footer';


import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route exact path="/:collectionId" element={<StoreFront/>} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
