import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    LinearProgress,
    Avatar,
    Stack,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import {
    Code,
    Storage,
    Devices,
    Cloud,
    Speed,
    Security,
} from '@mui/icons-material';

const AboutSection: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const skills = [
        { name: 'Frontend Development', level: 90, icon: <Devices /> },
        { name: 'Backend Development', level: 85, icon: <Storage /> },
        { name: 'Database Design', level: 80, icon: <Storage /> },
        { name: 'Cloud Services', level: 75, icon: <Cloud /> },
        { name: 'Performance Optimization', level: 85, icon: <Speed /> },
        { name: 'Security Best Practices', level: 80, icon: <Security /> },
    ];

    const experiences = [
        {
            role: 'Full Stack Developer',
            company: 'Freelance Projects',
            period: '2024 - Present',
            description: 'Building modern web applications using React, Node.js, and TypeScript. Focus on creating responsive, user-friendly interfaces and robust backend systems.',
        },
        {
            role: 'Web Development Studies',
            company: 'Self-Directed Learning',
            period: '2023 - 2024',
            description: 'Intensive study of full-stack development including React, Node.js, databases, and modern development practices through online courses and personal projects.',
        },
        {
            role: 'Portfolio Development',
            company: 'Personal Projects',
            period: '2024',
            description: 'Created this portfolio website using Astro, React, and Material UI. Focused on performance optimization, responsive design, and modern development practices.',
        },
    ];

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
                    {/* About Content */}
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

                    {/* Skills */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 3,
                                color: 'primary.main',
                                fontSize: isMobile ? '1.3rem' : '1.5rem',
                            }}
                        >
                            Technical Skills
                        </Typography>

                        <Stack spacing={3}>
                            {skills.map((skill, index) => (
                                <Box key={index}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            mb: 1,
                                            gap: 1,
                                        }}
                                    >
                                        <Avatar
                                            sx={{
                                                width: 32,
                                                height: 32,
                                                backgroundColor: 'primary.main',
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: '1rem',
                                                },
                                            }}
                                        >
                                            {skill.icon}
                                        </Avatar>
                                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                            {skill.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ ml: 'auto', color: 'text.secondary' }}
                                        >
                                            {skill.level}%
                                        </Typography>
                                    </Box>
                                    <LinearProgress
                                        variant="determinate"
                                        value={skill.level}
                                        sx={{
                                            height: 8,
                                            borderRadius: 4,
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            '& .MuiLinearProgress-bar': {
                                                borderRadius: 4,
                                                background: 'linear-gradient(45deg, #3f51b5 30%, #f50057 90%)',
                                            },
                                        }}
                                    />
                                </Box>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>

                {/* Experience Timeline */}
                <Box sx={{ mt: 8 }}>
                    <Typography
                        variant="h4"
                        component="h3"
                        sx={{
                            textAlign: 'center',
                            mb: 6,
                            fontSize: isMobile ? '1.8rem' : '2rem',
                            fontWeight: 600,
                        }}
                    >
                        Professional Experience
                    </Typography>

                    <Grid container spacing={3}>
                        {experiences.map((exp, index) => (
                            <Grid size={{ xs: 12, md: 4 }} key={index}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        background: 'linear-gradient(135deg, rgba(63, 81, 181, 0.1) 0%, rgba(245, 0, 87, 0.05) 100%)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 10px 30px rgba(63, 81, 181, 0.2)',
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 600,
                                                mb: 1,
                                                color: 'primary.main',
                                            }}
                                        >
                                            {exp.role}
                                        </Typography>

                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                fontWeight: 500,
                                                mb: 1,
                                                color: 'secondary.main',
                                            }}
                                        >
                                            {exp.company}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            sx={{
                                                mb: 2,
                                                color: 'text.secondary',
                                                fontStyle: 'italic',
                                            }}
                                        >
                                            {exp.period}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            sx={{
                                                lineHeight: 1.6,
                                                color: 'text.secondary',
                                            }}
                                        >
                                            {exp.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default AboutSection;
