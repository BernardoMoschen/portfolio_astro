import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    useTheme,
    useMediaQuery,
    useScrollTrigger,
} from '@mui/material';

import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';
import BrandLogo from './BrandLogo';
import ScrollToTopButton from './ScrollToTopButton';
import { menuItems, scrollToSection, scrollToTop } from './utils';

const NavigationContainer: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleMenuClick = (sectionId: string) => {
        scrollToSection(sectionId);
        setMobileOpen(false);
    };

    const handleBrandClick = () => {
        scrollToSection('#hero');
    };

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: trigger
                        ? theme.palette.mode === 'dark'
                            ? `${theme.palette.background.default}F0`
                            : `${theme.palette.background.default}F0`
                        : 'transparent',
                    backdropFilter: trigger ? 'blur(15px)' : 'none',
                    boxShadow: trigger
                        ? theme.palette.mode === 'dark'
                            ? `0 8px 32px ${theme.palette.primary.main}30, 0 2px 8px rgba(0, 0, 0, 0.4)`
                            : `0 8px 32px ${theme.palette.primary.main}20, 0 2px 8px rgba(0, 0, 0, 0.1)`
                        : 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: trigger
                        ? `1px solid ${theme.palette.mode === 'dark' ? theme.palette.primary.main + '30' : theme.palette.primary.main + '20'}`
                        : 'none',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: trigger
                            ? `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.primary.main} 100%)`
                            : 'transparent',
                        opacity: trigger ? 1 : 0,
                        transition: 'opacity 0.4s ease',
                    },
                }}
            >
                <Toolbar sx={{ minHeight: { xs: 64, sm: 72 } }}>
                    <BrandLogo trigger={trigger} onClick={handleBrandClick} />
                    
                    {isMobile ? (
                        <MobileNavigation
                            open={mobileOpen}
                            onToggle={handleDrawerToggle}
                            onMenuClick={handleMenuClick}
                            activeSection={activeSection}
                        />
                    ) : (
                        <DesktopNavigation
                            menuItems={menuItems}
                            activeSection={activeSection}
                            onMenuClick={handleMenuClick}
                        />
                    )}
                </Toolbar>
            </AppBar>

            <ScrollToTopButton show={trigger} onClick={scrollToTop} />
        </>
    );
};

export default NavigationContainer;
