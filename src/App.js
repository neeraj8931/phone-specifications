import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Latest from './components/Latest';

function App() {
  return (<>
    <Header />
    <div className='container mx-auto '>
      
           <Hero />
          <Latest urlToFetch="https://api-mobilespecs.azharimm.site/v2/latest" />
          <Latest urlToFetch="https://api-mobilespecs.azharimm.site/v2/top-by-interest" />
          <Latest urlToFetch="https://api-mobilespecs.azharimm.site/v2/top-by-fans" />
          <Footer />
    </div>
    </>
  );
}

export default App;
