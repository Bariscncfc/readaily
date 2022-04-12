
import './App.css';
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
      </body>
    </div>
  );
}

export default App;
