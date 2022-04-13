
import './App.css';
import Pricing from './components/Pricing';
import Discover from './components/Discover';
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
        <Discover />
        <Pricing/>
      </body>
    </div>
  );
}

export default App;
