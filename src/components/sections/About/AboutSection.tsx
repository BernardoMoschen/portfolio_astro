import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    useTheme,
    useMediaQuery,
    Paper,
    Chip,
    Stack,
} from '@mui/material';
import {
    Person,
    Code,
    Timeline,
    AutoAwesome,
} from '@mui/icons-material';
import { experiences } from '../../data/aboutData';
import AboutContent from './AboutContent';
import TechnicalExpertiseSection from '../Technical/TechnicalExpertiseSection';
import ExperienceTimeline from './ExperienceTimeline';

const AboutSection: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            component="section"
            id="about"
            sx={{
                py: { xs: 8, md: 12 },
                background: theme.palette.mode === 'dark'
                    ? `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.dark}08 30%, ${theme.palette.secondary.dark}12 70%, ${theme.palette.background.default} 100%)`
                    : `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.light}08 30%, ${theme.palette.secondary.light}12 70%, ${theme.palette.background.default} 100%)`,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background decorative elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.1,
                    backgroundImage: theme.palette.mode === 'dark'
                        ? `radial-gradient(circle at 25% 25%, ${theme.palette.primary.main} 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, ${theme.palette.secondary.main} 1px, transparent 1px)`
                        : `radial-gradient(circle at 25% 25%, ${theme.palette.primary.main} 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, ${theme.palette.secondary.main} 1px, transparent 1px)`,
                    backgroundSize: '50px 50px, 30px 30px',
                    backgroundPosition: '0 0, 25px 25px',
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Enhanced Header Section */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    {/* Section Badge */}
                    <Chip
                        icon={<Person />}
                        label="About Me"
                        variant="outlined"
                        sx={{
                            mb: 3,
                            borderColor: 'primary.main',
                            color: 'primary.main',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            px: 2,
                            py: 0.5,
                            '& .MuiChip-icon': {
                                color: 'primary.main',
                            },
                        }}
                    />

                    {/* Main Title */}
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontSize: isMobile ? '2.5rem' : '3.5rem',
                            fontWeight: 800,
                            mb: 2,
                            background: theme.palette.mode === 'dark'
                                ? `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`
                                : `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: 'none',
                            position: 'relative',
                        }}
                    >
                        Get to Know Me
                    </Typography>

                    {/* Subtitle */}
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: 600,
                            mx: 'auto',
                            fontWeight: 400,
                            lineHeight: 1.6,
                            mb: 4,
                        }}
                    >
                        I like to build useful stuff, break things on purpose, and obsess over clean code and clever UIs.
                    </Typography>

                    {/* Quick Stats */}
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                        sx={{ mb: 2 }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Code sx={{ color: 'primary.main', fontSize: 20 }} />
                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                                5+ Years Experience
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <AutoAwesome sx={{ color: 'secondary.main', fontSize: 20 }} />
                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                                Full-Stack Engineer
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Timeline sx={{ color: 'primary.main', fontSize: 20 }} />
                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                                Continuous Learner
                            </Typography>
                        </Box>
                    </Stack>
                </Box>

                {/* Content Grid with Enhanced Styling */}
                <Paper
                    elevation={0}
                    sx={{
                        background: theme.palette.mode === 'dark'
                            ? 'linear-gradient(135deg, rgba(22, 27, 34, 0.6) 0%, rgba(127, 176, 105, 0.05) 100%)'
                            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(74, 103, 65, 0.03) 100%)',
                        backdropFilter: 'blur(12px)',
                        border: theme.palette.mode === 'dark'
                            ? `1px solid ${theme.palette.primary.main}20`
                            : `1px solid ${theme.palette.primary.main}15`,
                        borderRadius: 3,
                        p: { xs: 3, md: 4 },
                        mb: 6,
                        boxShadow: theme.palette.mode === 'dark'
                            ? `0 20px 40px ${theme.palette.primary.main}15`
                            : `0 20px 40px ${theme.palette.primary.main}10`,
                    }}
                >
                    <Grid container >
                        <AboutContent />
                        <TechnicalExpertiseSection />
                    </Grid>
                </Paper>

                {/* Experience Timeline */}
                <ExperienceTimeline experiences={experiences} />
            </Container>
        </Box>
    );
};

export default AboutSection;
