import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header.component';
import AboutPage from './pages/about/about.component'
import CheckoutPage from './pages/checkout/checkout.component'
import HomePage from './pages/homepage/homepage.component';
import StoreFront from './pages/storefront/storefront.component'
import PaymentSuccess from './pages/payment-success/payment-success.component';
import Footer from './components/footer/footer';
import './App.css';

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
          <Route path="/success" element={<PaymentSuccess />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
