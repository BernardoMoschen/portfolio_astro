import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useTheme,
    useMediaQuery,
    useScrollTrigger,
    Fab,
    Fade,
} from '@mui/material';
import {
    Menu as MenuIcon,
    Close as CloseIcon,
    KeyboardArrowUp,
} from '@mui/icons-material';
import ThemeToggle from './ThemeToggle';

const Navigation: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const menuItems = [
        { label: 'Home', href: '#hero' },
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId.replace('#', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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

    const drawer = (
        <Box sx={{ width: 250, backgroundColor: 'background.paper', height: '100%' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 2,
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Portfolio
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ThemeToggle size="small" />
                    <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </Box>
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            onClick={() => scrollToSection(item.href)}
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'rgba(63, 81, 181, 0.1)',
                                },
                                backgroundColor: activeSection === item.href.replace('#', '')
                                    ? 'rgba(63, 81, 181, 0.1)'
                                    : 'transparent',
                            }}
                        >
                            <ListItemText
                                primary={item.label}
                                sx={{
                                    '& .MuiTypography-root': {
                                        color: activeSection === item.href.replace('#', '')
                                            ? 'primary.main'
                                            : 'text.primary',
                                        fontWeight: activeSection === item.href.replace('#', '') ? 600 : 400,
                                    },
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: trigger
                        ? 'rgba(10, 10, 10, 0.95)'
                        : 'transparent',
                    backdropFilter: trigger ? 'blur(10px)' : 'none',
                    boxShadow: trigger
                        ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                        : 'none',
                    transition: 'all 0.3s ease',
                    border: trigger
                        ? '1px solid rgba(255, 255, 255, 0.1)'
                        : 'none',
                }}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            fontWeight: 700,
                            color: 'primary.main',
                            cursor: 'pointer',
                        }}
                        onClick={() => scrollToSection('#hero')}
                    >
                        Portfolio
                    </Typography>

                    {isMobile ? (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <ThemeToggle />
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ color: 'text.primary' }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    ) : (
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            {menuItems.map((item) => (
                                <Button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.href)}
                                    sx={{
                                        color: activeSection === item.href.replace('#', '')
                                            ? 'primary.main'
                                            : 'text.primary',
                                        fontWeight: activeSection === item.href.replace('#', '') ? 600 : 400,
                                        position: 'relative',
                                        '&:hover': {
                                            color: 'primary.main',
                                            backgroundColor: 'rgba(63, 81, 181, 0.1)',
                                        },
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 0,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: activeSection === item.href.replace('#', '') ? '80%' : '0%',
                                            height: 2,
                                            backgroundColor: 'primary.main',
                                            transition: 'width 0.3s ease',
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                            <ThemeToggle />
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better mobile performance
                }}
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: 'background.paper',
                        backgroundImage: 'none',
                    },
                }}
            >
                {drawer}
            </Drawer>

            {/* Scroll to Top Button */}
            <Fade in={trigger}>
                <Fab
                    size="small"
                    aria-label="scroll back to top"
                    onClick={scrollToTop}
                    sx={{
                        position: 'fixed',
                        bottom: 24,
                        right: 24,
                        backgroundColor: 'primary.main',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'primary.dark',
                        },
                        zIndex: 1000,
                    }}
                >
                    <KeyboardArrowUp />
                </Fab>
            </Fade>
        </>
    );
};

export default Navigation;
