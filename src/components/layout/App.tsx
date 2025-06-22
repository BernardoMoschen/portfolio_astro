import React from 'react';
import { ThemeContextProvider } from '../theme';
import Navigation from './Navigation';
import { HeroSection } from '../sections/Hero';
import { AboutSection } from '../sections/About';
import { ProjectsSection } from '../sections/Projects';
import { ContactSection } from '../sections/Contact';
import { FooterSection } from '../sections/Footer';

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
