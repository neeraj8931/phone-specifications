import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Brands from './components/Brands';

function App() {
  return (
    <div className='container mx-auto bg-green-100'>
          <Hero />
          <Brands />
    </div>
  );
}

export default App;
