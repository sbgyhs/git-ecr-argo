import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GlobalStyle from './global';
import Navbar from './components/Navbar/Navbar';

import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';
import SignIn from './pages/SigninPage';
import Payment from './pages/PaymentPage';
import Footer from './components/Footer/Footer';

function App() {
  return (      
    <Router>
      <div className="App">
        <div>skylo_project pages</div>
      </div>
      <GlobalStyle />
          
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/signin" element={<SignIn />} /> 
        <Route path="/payment" element={<Payment />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;