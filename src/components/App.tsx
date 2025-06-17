import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navigation />
            <main>
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <ContactSection />
            </main>
        </ThemeProvider>
    );
};

export default App;
