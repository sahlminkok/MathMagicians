import { Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Quotes from './components/displayQuotes';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quotes" element={<Quotes />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  </>
);

export default App;
