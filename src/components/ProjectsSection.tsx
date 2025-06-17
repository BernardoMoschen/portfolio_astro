import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Button,
    Chip,
    Stack,
    IconButton,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import {
    GitHub,
    Launch,
    Code,
    Star,
} from '@mui/icons-material';

const ProjectsSection: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.',
            image: '/project1-placeholder.jpg',
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Material UI'],
            githubUrl: 'https://github.com/yourusername/ecommerce-platform',
            liveUrl: 'https://your-ecommerce-demo.com',
            featured: true,
        },
        {
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
            image: '/project2-placeholder.jpg',
            technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
            githubUrl: 'https://github.com/yourusername/task-manager',
            liveUrl: 'https://your-task-manager.com',
            featured: true,
        },
        {
            title: 'Weather Dashboard',
            description: 'A responsive weather application that provides detailed weather information, forecasts, and interactive maps using OpenWeatherMap API.',
            image: '/project3-placeholder.jpg',
            technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeatherMap API'],
            githubUrl: 'https://github.com/yourusername/weather-dashboard',
            liveUrl: 'https://your-weather-app.com',
            featured: false,
        },
        {
            title: 'Social Media API',
            description: 'RESTful API for a social media platform with user authentication, post management, real-time notifications, and comprehensive testing.',
            image: '/project4-placeholder.jpg',
            technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Jest'],
            githubUrl: 'https://github.com/yourusername/social-api',
            liveUrl: '',
            featured: false,
        },
        {
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website built with Astro and Material UI, featuring smooth animations and optimized performance.',
            image: '/project5-placeholder.jpg',
            technologies: ['Astro', 'React', 'Material UI', 'TypeScript'],
            githubUrl: 'https://github.com/yourusername/portfolio',
            liveUrl: 'https://your-portfolio.com',
            featured: false,
        },
        {
            title: 'Real Estate Platform',
            description: 'A comprehensive real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.',
            image: '/project6-placeholder.jpg',
            technologies: ['Vue.js', 'Node.js', 'MySQL', 'AWS S3', 'Mapbox'],
            githubUrl: 'https://github.com/yourusername/real-estate',
            liveUrl: 'https://your-real-estate.com',
            featured: false,
        },
    ];

    const featuredProjects = projects.filter(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);

    return (
        <Box
            component="section"
            id="projects"
            sx={{
                py: 8,
                backgroundColor: 'background.paper',
                position: 'relative',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        textAlign: 'center',
                        mb: 2,
                        fontSize: isMobile ? '2rem' : '2.5rem',
                        fontWeight: 600,
                    }}
                >
                    Featured Projects
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        textAlign: 'center',
                        mb: 6,
                        color: 'text.secondary',
                        fontSize: '1.1rem',
                        maxWidth: 600,
                        mx: 'auto',
                    }}
                >
                    Here are some of my recent projects that showcase my skills and experience
                    in full-stack development.
                </Typography>

                {/* Featured Projects */}
                <Grid container spacing={4} sx={{ mb: 8 }}>
                    {featuredProjects.map((project, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    background: 'linear-gradient(135deg, rgba(63, 81, 181, 0.1) 0%, rgba(245, 0, 87, 0.05) 100%)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        boxShadow: '0 20px 40px rgba(63, 81, 181, 0.2)',
                                    },
                                }}
                            >
                                <Box sx={{ position: 'relative' }}>
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            height: 200,
                                            backgroundColor: 'rgba(63, 81, 181, 0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                        }}
                                    >
                                        <Code sx={{ fontSize: 60, color: 'primary.main', opacity: 0.7 }} />
                                    </CardMedia>
                                    <Chip
                                        icon={<Star />}
                                        label="Featured"
                                        size="small"
                                        sx={{
                                            position: 'absolute',
                                            top: 8,
                                            right: 8,
                                            backgroundColor: 'secondary.main',
                                            color: 'white',
                                        }}
                                    />
                                </Box>

                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    <Typography
                                        variant="h5"
                                        component="h3"
                                        sx={{
                                            fontWeight: 600,
                                            mb: 2,
                                            color: 'primary.main',
                                        }}
                                    >
                                        {project.title}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            mb: 3,
                                            lineHeight: 1.6,
                                            color: 'text.secondary',
                                        }}
                                    >
                                        {project.description}
                                    </Typography>

                                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, mb: 3 }}>
                                        {project.technologies.map((tech, techIndex) => (
                                            <Chip
                                                key={techIndex}
                                                label={tech}
                                                size="small"
                                                variant="outlined"
                                                sx={{
                                                    borderColor: 'primary.main',
                                                    color: 'primary.light',
                                                    fontSize: '0.75rem',
                                                }}
                                            />
                                        ))}
                                    </Stack>
                                </CardContent>

                                <CardActions sx={{ p: 3, pt: 0 }}>
                                    <Button
                                        size="small"
                                        startIcon={<GitHub />}
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ color: 'text.secondary' }}
                                    >
                                        Code
                                    </Button>
                                    {project.liveUrl && (
                                        <Button
                                            size="small"
                                            startIcon={<Launch />}
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{ color: 'primary.main' }}
                                        >
                                            Live Demo
                                        </Button>
                                    )}
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Other Projects */}
                <Typography
                    variant="h3"
                    component="h3"
                    sx={{
                        textAlign: 'center',
                        mb: 4,
                        fontSize: isMobile ? '1.8rem' : '2rem',
                        fontWeight: 600,
                    }}
                >
                    Other Projects
                </Typography>

                <Grid container spacing={3}>
                    {otherProjects.map((project, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    backgroundColor: 'background.default',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                                    },
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                        <Typography
                                            variant="h6"
                                            component="h4"
                                            sx={{
                                                fontWeight: 600,
                                                color: 'primary.main',
                                            }}
                                        >
                                            {project.title}
                                        </Typography>
                                        <Box>
                                            <IconButton
                                                size="small"
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: 'text.secondary' }}
                                            >
                                                <GitHub fontSize="small" />
                                            </IconButton>
                                            {project.liveUrl && (
                                                <IconButton
                                                    size="small"
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    sx={{ color: 'primary.main' }}
                                                >
                                                    <Launch fontSize="small" />
                                                </IconButton>
                                            )}
                                        </Box>
                                    </Box>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            mb: 3,
                                            lineHeight: 1.6,
                                            color: 'text.secondary',
                                        }}
                                    >
                                        {project.description}
                                    </Typography>

                                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                            <Chip
                                                key={techIndex}
                                                label={tech}
                                                size="small"
                                                variant="outlined"
                                                sx={{
                                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                                    color: 'text.secondary',
                                                    fontSize: '0.7rem',
                                                }}
                                            />
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <Chip
                                                label={`+${project.technologies.length - 3}`}
                                                size="small"
                                                variant="outlined"
                                                sx={{
                                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                                    color: 'text.secondary',
                                                    fontSize: '0.7rem',
                                                }}
                                            />
                                        )}
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* GitHub CTA */}
                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Typography
                        variant="body1"
                        sx={{
                            mb: 3,
                            color: 'text.secondary',
                        }}
                    >
                        Want to see more? Check out my GitHub for additional projects and contributions.
                    </Typography>
                    <Button
                        variant="outlined"
                        size="large"
                        startIcon={<GitHub />}
                        href="https://github.com/yourusername" // Replace with your GitHub
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            borderColor: 'primary.main',
                            color: 'primary.main',
                            '&:hover': {
                                borderColor: 'primary.light',
                                backgroundColor: 'rgba(63, 81, 181, 0.1)',
                            },
                        }}
                    >
                        View GitHub Profile
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default ProjectsSection;
