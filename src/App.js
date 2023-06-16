import Calculator from './components/calculator';
import Quotes from './components/displayQuotes';
import './styles/App.css';

const App = () => (
  <div className="App">
    <Quotes />
    <Calculator />
  </div>
);

export default App;
