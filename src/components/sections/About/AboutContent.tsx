import React from 'react';
import {
    Grid,
    Box,
    Typography,
    useTheme,
    useMediaQuery,
} from '@mui/material';

const AboutContent: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: 4 }}>
                <Typography
                    variant="h4"
                    sx={{
                        mb: 3,
                        color: 'primary.main',
                        fontSize: isMobile ? '1.5rem' : '2rem',
                    }}
                >
                    Passionate Developer & Problem Solver
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        mb: 3,
                        lineHeight: 1.8,
                        color: 'text.secondary',
                        fontSize: '1.1rem',
                    }}
                >
                    I'm a dedicated full-stack developer passionate about creating modern web applications
                    that solve real-world problems. My journey in tech began with curiosity and has evolved
                    into a love for building scalable, user-focused solutions using cutting-edge technologies.
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        mb: 3,
                        lineHeight: 1.8,
                        color: 'text.secondary',
                        fontSize: '1.1rem',
                    }}
                >
                    I believe in writing clean, maintainable code and following industry best practices.
                    Whether I'm architecting backend APIs or crafting intuitive user interfaces,
                    I approach every project with attention to detail and a focus on performance and accessibility.
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        lineHeight: 1.8,
                        color: 'text.secondary',
                        fontSize: '1.1rem',
                    }}
                >
                    When I'm not coding, you can find me exploring new technologies, contributing to
                    open source projects, or learning about the latest developments in web development.
                    I'm always excited about collaborating on innovative projects and bringing ideas to life.
                </Typography>
            </Box>
        </Grid>
    );
};

export default AboutContent;
