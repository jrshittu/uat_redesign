import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Tutoring from './components/Tutoring';
import HireInstructors from './components/HireInstructor';
import Footer from './components/Footer';
import Mission from './components/Mission';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import ContactForm from './components/Contact';
import Etutor from './components/Etutor';
import StudyAbroadPage from './components/StudyAbroadPage';
import TravelAbroadPage from './components/TravelAbroadPage';
import BusinessHero from './components/BusinessCareer';

const App = () => {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Stats />
              <Services />
              <Mission />
              <Tutoring />
              <Testimonial />
              <ContactForm />
            </>
          } />
          <Route path="/etutor" element={<Etutor />} />
          <Route path="/business-career" element={<BusinessHero />} />
          <Route path="/travel-abroad" element={<TravelAbroadPage />} />
          <Route path="/study-abroad" element={<StudyAbroadPage />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;