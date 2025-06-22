import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    useTheme,
    useMediaQuery,
} from '@mui/material';
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
                py: 8,
                backgroundColor: 'background.default',
                position: 'relative',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        textAlign: 'center',
                        mb: 6,
                        fontSize: isMobile ? '2rem' : '2.5rem',
                        fontWeight: 600,
                    }}
                >
                    About Me
                </Typography>

                <Grid container spacing={4}>
                    <AboutContent />
                    <TechnicalExpertiseSection />
                </Grid>

                <ExperienceTimeline experiences={experiences} />
            </Container>
        </Box>
    );
};

export default AboutSection;
