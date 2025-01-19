import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import { Hero } from './components/sections/Hero';
import { TrustedBy } from './components/sections/TrustedBy';
import { PackageComparison } from './components/sections/PackageComparison';
import Stats from './components/sections/Stats/Stats';
import About from './components/sections/About/About';
import Support from './components/sections/Support/Support';
import Testimonials from './components/sections/Testimonials/Testimonials';
import FAQ from './components/sections/FAQ/FAQ';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/sections/Footer/Footer';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AGB from './pages/AGB';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-primary flex flex-col">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <TrustedBy/>
              <PackageComparison/>
              <Stats/>
              <About/>
              <Support/>
              <Testimonials/>
              <FAQ/>
              <Contact/>
            </main>
          } />
          <Route path="/kontakt" element={
            <main className="pt-20 px-4">
              <h1 className="text-4xl font-bold text-center">Kontakt</h1>
            </main>
          } />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;