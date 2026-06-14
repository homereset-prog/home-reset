import Header from './components/Header';
import Hero from './components/Hero';
import Explanation from './components/Explanation';
import Services from './components/Services';
import ControlTrust from './components/ControlTrust';
import HowItWorks from './components/HowItWorks';
import GoodFit from './components/GoodFit';
import About from './components/About';
import RequestForm from './components/RequestForm';
import ServiceArea from './components/ServiceArea';
import Connect from './components/Connect';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-100">
      <Header />
      <main>
        <Hero />
        <Explanation />
        <Services />
        <ControlTrust />
        <HowItWorks />
        <GoodFit />
        <About />
        <RequestForm />
        <ServiceArea />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
