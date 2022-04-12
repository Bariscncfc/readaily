
import './App.css';
import HeroSection from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body>
        <HeroSection />
      </body>
    </div>
  );
}

export default App;
