import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Avatar,
    Chip,
    Stack,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import {
    GitHub,
    LinkedIn,
    Email,
    Download,
    KeyboardArrowDown,
} from '@mui/icons-material';

const HeroSection: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const skills = [
        'React', 'Node.js', 'TypeScript', 'Material UI',
        'Astro', 'Vite', 'Tailwind CSS', 'MongoDB', 'PostgreSQL'
    ];

    return (
        <Box
            component="section"
            id="hero"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background Pattern */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.1,
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
                    backgroundSize: '20px 20px',
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: 'center',
                        gap: 4,
                        textAlign: isMobile ? 'center' : 'left',
                    }}
                >
                    {/* Profile Image */}
                    <Box sx={{ mb: isMobile ? 2 : 0 }}>
                        <Avatar
                            sx={{
                                width: isMobile ? 150 : 200,
                                height: isMobile ? 150 : 200,
                                border: '4px solid',
                                borderColor: 'primary.main',
                                boxShadow: '0 8px 32px rgba(63, 81, 181, 0.3)',
                                mx: 'auto',
                            }}
                            src="/profile-placeholder.jpg" // You'll replace this with your actual photo
                            alt="Your Name"
                        >
                            YN
                        </Avatar>
                    </Box>

                    {/* Content */}
                    <Box sx={{ flex: 1 }}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: isMobile ? '2.5rem' : '3.5rem',
                                fontWeight: 700,
                                mb: 2,
                                background: 'linear-gradient(45deg, #fff 30%, #3f51b5 90%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Hi, I'm Your Name
                        </Typography>

                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: isMobile ? '1.5rem' : '2rem',
                                fontWeight: 400,
                                mb: 3,
                                color: 'secondary.main',
                            }}
                        >
                            Full Stack Developer
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: '1.1rem',
                                mb: 4,
                                maxWidth: 600,
                                lineHeight: 1.7,
                                color: 'text.secondary',
                            }}
                        >
                            I craft exceptional digital experiences using modern technologies like React, Node.js,
                            and TypeScript. Passionate about building scalable applications and solving complex problems.
                        </Typography>

                        {/* Skills */}
                        <Box sx={{ mb: 4 }}>
                            <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>
                                Technologies I love
                            </Typography>
                            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                                {skills.map((skill, index) => (
                                    <Chip
                                        key={index}
                                        label={skill}
                                        variant="outlined"
                                        sx={{
                                            borderColor: 'primary.main',
                                            color: 'primary.light',
                                            '&:hover': {
                                                backgroundColor: 'primary.main',
                                                color: 'white',
                                            },
                                            transition: 'all 0.3s ease',
                                        }}
                                    />
                                ))}
                            </Stack>
                        </Box>

                        {/* Action Buttons */}
                        <Stack
                            direction={isMobile ? 'column' : 'row'}
                            spacing={2}
                            sx={{ mb: 4 }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<Email />}
                                onClick={() => scrollToSection('contact')}
                                sx={{
                                    background: 'linear-gradient(45deg, #3f51b5 30%, #f50057 90%)',
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, #2c387e 30%, #c51162 90%)',
                                    },
                                }}
                            >
                                Get In Touch
                            </Button>

                            <Button
                                variant="outlined"
                                size="large"
                                startIcon={<Download />}
                                href="/resume.pdf" // You'll add your resume file
                                target="_blank"
                                sx={{
                                    borderColor: 'primary.main',
                                    color: 'primary.main',
                                    '&:hover': {
                                        borderColor: 'primary.light',
                                        backgroundColor: 'rgba(63, 81, 181, 0.1)',
                                    },
                                }}
                            >
                                Download Resume
                            </Button>
                        </Stack>

                        {/* Social Links */}
                        <Stack direction="row" spacing={2}>
                            <Button
                                variant="text"
                                startIcon={<GitHub />}
                                href="https://github.com/yourusername" // Replace with your GitHub
                                target="_blank"
                                sx={{ color: 'text.secondary' }}
                            >
                                GitHub
                            </Button>
                            <Button
                                variant="text"
                                startIcon={<LinkedIn />}
                                href="https://linkedin.com/in/yourusername" // Replace with your LinkedIn
                                target="_blank"
                                sx={{ color: 'text.secondary' }}
                            >
                                LinkedIn
                            </Button>
                        </Stack>
                    </Box>
                </Box>

                {/* Scroll Indicator */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 32,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        cursor: 'pointer',
                        animation: 'bounce 2s infinite',
                    }}
                    onClick={() => scrollToSection('about')}
                >
                    <KeyboardArrowDown sx={{ fontSize: 40, color: 'primary.main' }} />
                </Box>
            </Container>

            {/* Floating Elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, rgba(63, 81, 181, 0.1) 30%, rgba(245, 0, 87, 0.1) 90%)',
                    animation: 'float 6s ease-in-out infinite',
                    display: { xs: 'none', md: 'block' },
                }}
            />
        </Box>
    );
};

export default HeroSection;
