import Navbar from './components/Navbar';
import ScrollHero from './components/ScrollHero';
import Services from './components/Services';

import WhyChooseUs from './components/WhyChooseUs';
import TrustAndBooking from './components/TrustAndBooking';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <main className="min-h-screen bg-surface-950">
      <Navbar />
      <ScrollHero />
      <Services />
      <WhyChooseUs />

      <TrustAndBooking />
      <FloatingContact />
    </main>
  );
}

export default App;
