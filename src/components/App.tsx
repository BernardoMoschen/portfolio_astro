import React from 'react';
import { ThemeContextProvider } from './ThemeContext';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import FooterSection from './FooterSection';

const App: React.FC = () => {
    return (
        <ThemeContextProvider>
            <Navigation />
            <main>
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <FooterSection />
        </ThemeContextProvider>
    );
};

export default App;
