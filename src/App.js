import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Privacy from './screens/Privacy';
import TermsAndService from './screens/TermsAndService';
import Refund from './screens/Refund';


function App() {
  return (
    <>

      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/privacy-policy" element={<Privacy />} />
        <Route exact path="/terms-and-condition" element={<TermsAndService />} />
        <Route exact path="/refund-and-cancellation" element={<Refund />} />
      </Routes>
    </>
  );
}

export default App;
