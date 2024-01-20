import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Privacy from './pages/PrivacyPolicy/Privacy';
import TermsAndService from './pages/PrivacyPolicy/TermsAndService';
import Refund from './pages/PrivacyPolicy/Refund';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <>

      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/privacy-policy" element={<Privacy />} />
        <Route exact path="/terms-and-condition" element={<TermsAndService />} />
        <Route exact path="/refund-and-cancellation" element={<Refund />} />


        <Route exact path="/contact-us" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
