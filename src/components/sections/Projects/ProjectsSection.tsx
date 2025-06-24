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
    CheckCircle,
    Build,
    Schedule,
} from '@mui/icons-material';

// Helper function to get status information
const getStatusInfo = (status: string) => {
    switch (status) {
        case 'completed':
            return {
                label: 'Completed',
                color: 'success' as const,
                icon: <CheckCircle />,
            };
        case 'wip':
            return {
                label: 'In Progress',
                color: 'warning' as const,
                icon: <Build />,
            };
        case 'planning':
            return {
                label: 'Coming Soon',
                color: 'info' as const,
                icon: <Schedule />,
            };
        default:
            return {
                label: 'Completed',
                color: 'success' as const,
                icon: <CheckCircle />,
            };
    }
};

const ProjectsSection: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const projects = [
        {
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website built with Astro, React, and Material UI. Features dark theme, smooth animations, responsive design, and optimized performance.',
            image: '/project-portfolio.jpg',
            technologies: ['Astro', 'React', 'Material UI', 'TypeScript'],
            githubUrl: 'https://github.com/BernardoMoschen/portfolio_astro',
            liveUrl: 'https://bernardomoschen.dev', // Update with your actual domain
            featured: true,
            status: 'completed'
        },
        {
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution with user authentication, payment processing, inventory management, and admin dashboard. Currently in development.',
            image: '/project-placeholder.jpg',
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Material UI'],
            githubUrl: '',
            liveUrl: '',
            featured: true,
            status: 'wip'
        },
        {
            title: 'Task Management App',
            description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
            image: '/project-placeholder.jpg',
            technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
            githubUrl: '',
            liveUrl: '',
            featured: false,
            status: 'planning'
        },
        {
            title: 'Weather Dashboard',
            description: 'Responsive weather application with detailed forecasts, interactive maps, and data visualization using modern APIs.',
            image: '/project-placeholder.jpg',
            technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeatherMap API'],
            githubUrl: '',
            liveUrl: '',
            featured: false,
            status: 'planning'
        },
        {
            title: 'Social Media API',
            description: 'RESTful API for social media platform with authentication, real-time notifications, and comprehensive testing suite.',
            image: '/project-placeholder.jpg',
            technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Jest'],
            githubUrl: '',
            liveUrl: '',
            featured: false,
            status: 'planning'
        },
        {
            title: 'Real Estate Platform',
            description: 'Comprehensive real estate platform with property listings, virtual tours, and mortgage calculator.',
            image: '/project-placeholder.jpg',
            technologies: ['Vue.js', 'Node.js', 'MySQL', 'AWS S3', 'Mapbox'],
            githubUrl: '',
            liveUrl: '',
            featured: false,
            status: 'planning'
        },
    ];

    const featuredProjects = projects.filter(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);

    return (
        <Box
            component="section"
            id="projects"
            sx={{
                py: { xs: 8, md: 12 },
                background: theme.palette.mode === 'dark'
                    ? `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.dark}12 25%, ${theme.palette.secondary.dark}18 75%, ${theme.palette.background.paper} 100%)`
                    : `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.light}08 25%, ${theme.palette.secondary.light}12 75%, ${theme.palette.background.paper} 100%)`,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background decorative elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '20%',
                    right: '-10%',
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: theme.palette.mode === 'dark'
                        ? `radial-gradient(circle, ${theme.palette.primary.dark}15 0%, transparent 70%)`
                        : `radial-gradient(circle, ${theme.palette.primary.light}10 0%, transparent 70%)`,
                    filter: 'blur(40px)',
                    animation: 'float 6s ease-in-out infinite',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '-5%',
                    width: 250,
                    height: 250,
                    borderRadius: '50%',
                    background: theme.palette.mode === 'dark'
                        ? `radial-gradient(circle, ${theme.palette.secondary.dark}15 0%, transparent 70%)`
                        : `radial-gradient(circle, ${theme.palette.secondary.light}10 0%, transparent 70%)`,
                    filter: 'blur(40px)',
                    animation: 'float 8s ease-in-out infinite reverse',
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Section badge */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <Chip
                        icon={<Code />}
                        label="FEATURED WORK"
                        sx={{
                            backgroundColor: theme.palette.mode === 'dark'
                                ? theme.palette.primary.dark + '40'
                                : theme.palette.primary.light + '20',
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                            letterSpacing: '0.5px',
                            border: `1px solid ${theme.palette.primary.main}40`,
                        }}
                    />
                </Box>

                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        textAlign: 'center',
                        mb: 2,
                        fontSize: isMobile ? '2.5rem' : '3.5rem',
                        fontWeight: 700,
                        background: theme.palette.mode === 'dark'
                            ? `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`
                            : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: theme.palette.mode === 'dark' ? 'none' : '0 2px 4px rgba(0,0,0,0.1)',
                    }}
                >
                    Featured Projects
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        textAlign: 'center',
                        mb: 8,
                        color: theme.palette.text.secondary,
                        fontSize: '1.2rem',
                        maxWidth: 700,
                        mx: 'auto',
                        lineHeight: 1.6,
                        fontWeight: 400,
                    }}
                >
                    Here are some of my recent projects that showcase my skills and experience
                    in full-stack development.
                </Typography>

                {/* Featured Projects */}
                <Grid container spacing={4} sx={{ mb: 10 }}>
                    {featuredProjects.map((project, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    background: theme.palette.mode === 'dark'
                                        ? `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.dark}15 50%, ${theme.palette.secondary.dark}10 100%)`
                                        : `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.light}08 50%, ${theme.palette.secondary.light}05 100%)`,
                                    backdropFilter: 'blur(20px)',
                                    border: theme.palette.mode === 'dark'
                                        ? `1px solid ${theme.palette.primary.main}30`
                                        : `1px solid ${theme.palette.primary.main}20`,
                                    borderRadius: 3,
                                    boxShadow: theme.palette.mode === 'dark'
                                        ? `0 8px 32px ${theme.palette.primary.dark}25`
                                        : `0 8px 32px ${theme.palette.primary.main}15`,
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: theme.palette.mode === 'dark'
                                            ? `0 20px 40px ${theme.palette.primary.dark}35`
                                            : `0 20px 40px ${theme.palette.primary.main}25`,
                                        borderColor: theme.palette.mode === 'dark'
                                            ? theme.palette.primary.main + '50'
                                            : theme.palette.primary.main + '40',
                                    },
                                }}
                            >
                                <Box sx={{ position: 'relative' }}>
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            height: 220,
                                            background: theme.palette.mode === 'dark'
                                                ? `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.dark}20 100%)`
                                                : `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.light}15 100%)`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: theme.palette.mode === 'dark'
                                                ? `1px solid ${theme.palette.primary.main}20`
                                                : `1px solid ${theme.palette.primary.main}15`,
                                            borderTopLeftRadius: 12,
                                            borderTopRightRadius: 12,
                                            position: 'relative',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {/* Animated background pattern */}
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: theme.palette.mode === 'dark'
                                                    ? `radial-gradient(circle at 30% 20%, ${theme.palette.primary.dark}30 0%, transparent 50%), radial-gradient(circle at 70% 80%, ${theme.palette.secondary.dark}25 0%, transparent 50%)`
                                                    : `radial-gradient(circle at 30% 20%, ${theme.palette.primary.light}20 0%, transparent 50%), radial-gradient(circle at 70% 80%, ${theme.palette.secondary.light}15 0%, transparent 50%)`,
                                                animation: 'pulse 4s ease-in-out infinite',
                                            }}
                                        />
                                        <Code
                                            sx={{
                                                fontSize: 60,
                                                color: theme.palette.primary.main,
                                                opacity: 0.8,
                                                zIndex: 1,
                                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                                            }}
                                        />
                                    </CardMedia>

                                    {/* Status and Featured Chips */}
                                    <Box sx={{ position: 'absolute', top: 12, right: 12, display: 'flex', gap: 1, flexDirection: 'column' }}>
                                        <Chip
                                            icon={<Star />}
                                            label="Featured"
                                            size="small"
                                            sx={{
                                                backgroundColor: theme.palette.secondary.main,
                                                color: theme.palette.secondary.contrastText,
                                                fontWeight: 600,
                                                boxShadow: `0 2px 8px ${theme.palette.secondary.main}40`,
                                            }}
                                        />
                                        <Chip
                                            icon={getStatusInfo(project.status).icon}
                                            label={getStatusInfo(project.status).label}
                                            size="small"
                                            color={getStatusInfo(project.status).color}
                                            variant="filled"
                                            sx={{
                                                fontWeight: 600,
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                            }}
                                        />
                                    </Box>
                                </Box>

                                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                                    <Typography
                                        variant="h5"
                                        component="h3"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 2,
                                            color: theme.palette.primary.main,
                                            fontSize: '1.4rem',
                                        }}
                                    >
                                        {project.title}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            mb: 3,
                                            lineHeight: 1.7,
                                            color: theme.palette.text.secondary,
                                            fontSize: '1rem',
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
                                                    borderColor: theme.palette.primary.main + '60',
                                                    color: theme.palette.primary.main,
                                                    fontSize: '0.8rem',
                                                    fontWeight: 500,
                                                    backgroundColor: theme.palette.mode === 'dark'
                                                        ? theme.palette.primary.dark + '20'
                                                        : theme.palette.primary.light + '15',
                                                    '&:hover': {
                                                        borderColor: theme.palette.primary.main,
                                                        backgroundColor: theme.palette.mode === 'dark'
                                                            ? theme.palette.primary.dark + '30'
                                                            : theme.palette.primary.light + '25',
                                                    },
                                                }}
                                            />
                                        ))}
                                    </Stack>
                                </CardContent>

                                <CardActions sx={{ p: 4, pt: 0, gap: 1 }}>
                                    {project.githubUrl ? (
                                        <Button
                                            size="medium"
                                            startIcon={<GitHub />}
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variant="outlined"
                                            sx={{
                                                color: theme.palette.text.secondary,
                                                borderColor: theme.palette.text.secondary + '60',
                                                '&:hover': {
                                                    borderColor: theme.palette.text.secondary,
                                                    backgroundColor: theme.palette.text.secondary + '10',
                                                },
                                            }}
                                        >
                                            Code
                                        </Button>
                                    ) : (
                                        <Button
                                            size="medium"
                                            startIcon={getStatusInfo(project.status).icon}
                                            disabled
                                            sx={{ color: theme.palette.text.disabled }}
                                        >
                                            {project.status === 'wip' ? 'In Development' : 'Coming Soon'}
                                        </Button>
                                    )}
                                    {project.liveUrl && (
                                        <Button
                                            size="medium"
                                            startIcon={<Launch />}
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variant="contained"
                                            sx={{
                                                backgroundColor: theme.palette.primary.main,
                                                color: theme.palette.primary.contrastText,
                                                '&:hover': {
                                                    backgroundColor: theme.palette.primary.dark,
                                                },
                                            }}
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
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        variant="h3"
                        component="h3"
                        sx={{
                            fontSize: isMobile ? '2rem' : '2.5rem',
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            mb: 2,
                        }}
                    >
                        Other Projects
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: theme.palette.text.secondary,
                            fontSize: '1.1rem',
                            maxWidth: 600,
                            mx: 'auto',
                        }}
                    >
                        Additional projects and experiments showcasing various technologies and concepts.
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    {otherProjects.map((project, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    background: theme.palette.mode === 'dark'
                                        ? `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.dark}08 100%)`
                                        : `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.light}05 100%)`,
                                    border: theme.palette.mode === 'dark'
                                        ? `1px solid ${theme.palette.primary.main}20`
                                        : `1px solid ${theme.palette.primary.main}15`,
                                    borderRadius: 2,
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: theme.palette.mode === 'dark'
                                            ? `0 12px 24px ${theme.palette.primary.dark}30`
                                            : `0 12px 24px ${theme.palette.primary.main}20`,
                                        borderColor: theme.palette.mode === 'dark'
                                            ? theme.palette.primary.main + '40'
                                            : theme.palette.primary.main + '30',
                                    },
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                                            <Typography
                                                variant="h6"
                                                component="h4"
                                                sx={{
                                                    fontWeight: 600,
                                                    color: theme.palette.primary.main,
                                                }}
                                            >
                                                {project.title}
                                            </Typography>
                                            <Chip
                                                icon={getStatusInfo(project.status).icon}
                                                label={getStatusInfo(project.status).label}
                                                size="small"
                                                color={getStatusInfo(project.status).color}
                                                variant="outlined"
                                                sx={{ fontSize: '0.75rem' }}
                                            />
                                        </Box>
                                        <Box>
                                            {project.githubUrl ? (
                                                <IconButton
                                                    size="small"
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    sx={{
                                                        color: theme.palette.text.secondary,
                                                        '&:hover': {
                                                            color: theme.palette.primary.main,
                                                        },
                                                    }}
                                                >
                                                    <GitHub fontSize="small" />
                                                </IconButton>
                                            ) : (
                                                <IconButton
                                                    size="small"
                                                    disabled
                                                    sx={{ color: theme.palette.text.disabled }}
                                                >
                                                    <GitHub fontSize="small" />
                                                </IconButton>
                                            )}
                                            {project.liveUrl && (
                                                <IconButton
                                                    size="small"
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    sx={{
                                                        color: theme.palette.primary.main,
                                                        '&:hover': {
                                                            color: theme.palette.primary.dark,
                                                        },
                                                    }}
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
                                            color: theme.palette.text.secondary,
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
                                                    borderColor: theme.palette.mode === 'dark'
                                                        ? theme.palette.primary.main + '40'
                                                        : theme.palette.primary.main + '30',
                                                    color: theme.palette.text.secondary,
                                                    fontSize: '0.7rem',
                                                    backgroundColor: theme.palette.mode === 'dark'
                                                        ? theme.palette.primary.dark + '10'
                                                        : theme.palette.primary.light + '08',
                                                }}
                                            />
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <Chip
                                                label={`+${project.technologies.length - 3}`}
                                                size="small"
                                                variant="outlined"
                                                sx={{
                                                    borderColor: theme.palette.mode === 'dark'
                                                        ? theme.palette.secondary.main + '40'
                                                        : theme.palette.secondary.main + '30',
                                                    color: theme.palette.secondary.main,
                                                    fontSize: '0.7rem',
                                                    backgroundColor: theme.palette.mode === 'dark'
                                                        ? theme.palette.secondary.dark + '10'
                                                        : theme.palette.secondary.light + '08',
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
                <Box sx={{ textAlign: 'center', mt: 8 }}>
                    <Typography
                        variant="body1"
                        sx={{
                            mb: 3,
                            color: theme.palette.text.secondary,
                            fontSize: '1.1rem',
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
                            borderColor: theme.palette.primary.main,
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                            px: 4,
                            py: 1.5,
                            borderRadius: 2,
                            '&:hover': {
                                borderColor: theme.palette.primary.dark,
                                backgroundColor: theme.palette.mode === 'dark'
                                    ? theme.palette.primary.dark + '15'
                                    : theme.palette.primary.light + '10',
                                transform: 'translateY(-2px)',
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
