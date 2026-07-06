import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { CosmicAtmosphereProvider } from './context/CosmicAtmosphereContext';
import GlobalCosmicEnvironment from './components/background/GlobalCosmicEnvironment';
import Preloader from './components/effects/Preloader';
import CustomCursor from './components/effects/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import FeaturedProject from './components/sections/FeaturedProject';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <CosmicAtmosphereProvider>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(5, 8, 22, 0.92)',
            color: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.875rem',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          },
          success: {
            iconTheme: { primary: '#4A7BF7', secondary: '#050816' },
          },
          error: {
            iconTheme: { primary: '#7C6AE8', secondary: '#050816' },
          },
        }}
      />

      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {!loading && <GlobalCosmicEnvironment />}

      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Navbar />
            <main className="relative z-[1]">
              <Hero />
              <About />
              <Education />
              <FeaturedProject />
              <Skills />
              <Experience />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </CosmicAtmosphereProvider>
  );
}
