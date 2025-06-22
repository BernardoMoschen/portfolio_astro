import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Avatar,
    Stack,
    useTheme,
    useMediaQuery,
    Paper,
    ListItem,
    List,
} from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from '@mui/lab';
import {
    Storage,
    Devices,
    Cloud,
    Work,
    School,
    FolderSpecial,
} from '@mui/icons-material';
// Technology icons from react-icons
import {
    SiReact,
    SiTypescript,
    SiMui,
    SiJest,
    SiNextdotjs,
    SiNodedotjs,
    SiSharp,
    SiDotnet,
    SiGraphql,
    SiPostgresql,
    SiAmazon,
    SiSonarqube,
} from 'react-icons/si';
import { FaServer, FaDatabase } from 'react-icons/fa';

const AboutSection: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const technicalAreas = [
        {
            category: 'Frontend Excellence',
            icon: <Devices />,
            technologies: [
                { name: 'React', icon: <SiReact style={{ color: '#61DAFB' }} /> },
                { name: 'TypeScript', icon: <SiTypescript style={{ color: '#3178C6' }} /> },
                { name: 'Material UI', icon: <SiMui style={{ color: '#007FFF' }} /> },
                { name: 'Recoil', icon: <SiReact style={{ color: '#3578E5' }} /> },
                { name: 'Jest', icon: <SiJest style={{ color: '#C21325' }} /> },
                { name: 'Next.js', icon: <SiNextdotjs style={{ color: '#000000' }} /> },
            ],
            description: 'Building responsive, accessible user experiences with modern frameworks',
            highlight: 'Expert'
        },
        {
            category: 'Backend Architecture',
            icon: <Storage />,
            technologies: [
                { name: 'Node.js', icon: <SiNodedotjs style={{ color: '#339933' }} /> },
                { name: 'C#', icon: <SiSharp style={{ color: '#239120' }} /> },
                { name: '.NET', icon: <SiDotnet style={{ color: '#512BD4' }} /> },
                { name: 'GraphQL', icon: <SiGraphql style={{ color: '#E10098' }} /> },
                { name: 'REST APIs', icon: <FaServer style={{ color: '#FF6B6B' }} /> },
                { name: 'Microservices', icon: <FaServer style={{ color: '#4ECDC4' }} /> },
            ],
            description: 'Scalable server-side solutions and API design',
            highlight: 'Advanced'
        },
        {
            category: 'Database & Cloud',
            icon: <Cloud />,
            technologies: [
                { name: 'PostgreSQL', icon: <SiPostgresql style={{ color: '#336791' }} /> },
                { name: 'AWS', icon: <SiAmazon style={{ color: '#FF9900' }} /> },
                { name: 'Database Design', icon: <FaDatabase style={{ color: '#4285F4' }} /> },
                { name: 'SonarQube', icon: <SiSonarqube style={{ color: '#4E9BCD' }} /> },
                { name: 'CI/CD', icon: <FaServer style={{ color: '#2196F3' }} /> },
            ],
            description: 'Data architecture and cloud infrastructure management',
            highlight: 'Proficient'
        },
    ];

    const experiences = [
        {
            role: 'Senior Full Stack Developer',
            company: 'Paradise Mobile',
            companyUrl: 'https://www.linkedin.com/company/paradise-mobile/',
            period: '2034 - Present',
            description: [`Developed onboarding and self-service applications using React, Material UI, Recoil, and Jest,
            streamlining user experience and improving onboarding time by significantly reducing friction;`,
                'Built and maintained scalable REST APIs and midtier systems with Node.js, TypeScript, SonarQube, GraphQL and AWS, supporting formidable CRM interrelation;',
                'Led the creation of back - office support tools that significantly boosted revenue and lowered operational costs; ',
                'Integrated key external platforms such as Zapier, Webflow, Zendesk and headless Strapi to enhance customer support and automation; ',
                'Collaborated effectively within both Kanban and Scrum - based agile teams;',],
            icon: <Work />,
        },
        {
            role: 'Mid-level Full Stack Engineer',
            company: 'Grupo Tiradentes',
            companyUrl: 'https://www.linkedin.com/company/grupo-tiradentes/',
            period: '2022 - 2023',
            description: [`Developed a unified system for educational institutions, managing course offerings, student
contracts, financing requests and business reporting, ensuring robust functionality and code quality;`,
                'Designed and implemented scalable front-end interfaces with React.js and Typescript, enhancing user experience for the whole company staff and their students',
                'Engineered back-end systems and APIs with C#, .NET, and PostgreSQL, streamlining workflows for transactions and users daily;',
                'Collaborated in 100% SCRUM-based teams;'],
            icon: <Work />,
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

                    {/* Technical Expertise */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 3,
                                color: 'primary.main',
                                fontSize: isMobile ? '1.3rem' : '1.5rem',
                            }}
                        >
                            Technical Expertise
                        </Typography>

                        <Stack spacing={3}>
                            {technicalAreas.map((area, index) => (
                                <Card
                                    key={index}
                                    sx={{
                                        background: 'linear-gradient(135deg, rgba(63, 81, 181, 0.08) 0%, rgba(245, 0, 87, 0.03) 100%)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateX(5px)',
                                            boxShadow: '0 8px 25px rgba(63, 81, 181, 0.15)',
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                                            <Avatar
                                                sx={{
                                                    width: 48,
                                                    height: 48,
                                                    backgroundColor: 'primary.main',
                                                    mr: 2,
                                                    boxShadow: '0 4px 12px rgba(63, 81, 181, 0.3)',
                                                }}
                                            >
                                                {area.icon}
                                            </Avatar>
                                            <Box sx={{ flex: 1 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            fontWeight: 600,
                                                            color: 'text.primary',
                                                            mr: 2
                                                        }}
                                                    >
                                                        {area.category}
                                                    </Typography>
                                                    <Box
                                                        sx={{
                                                            px: 2,
                                                            py: 0.5,
                                                            borderRadius: 2,
                                                            backgroundColor: area.highlight === 'Expert' ? 'success.main'
                                                                : area.highlight === 'Advanced' ? 'warning.main'
                                                                    : 'info.main',
                                                            color: 'white',
                                                            fontSize: '0.75rem',
                                                            fontWeight: 600,
                                                            textTransform: 'uppercase',
                                                        }}
                                                    >
                                                        {area.highlight}
                                                    </Box>
                                                </Box>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: 'text.secondary',
                                                        mb: 2,
                                                        lineHeight: 1.5
                                                    }}
                                                >
                                                    {area.description}
                                                </Typography>
                                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                    {area.technologies.map((tech, techIndex) => (
                                                        <Box
                                                            key={techIndex}
                                                            sx={{
                                                                px: 1.5,
                                                                py: 0.8,
                                                                backgroundColor: 'rgba(63, 81, 181, 0.1)',
                                                                border: '1px solid rgba(63, 81, 181, 0.2)',
                                                                borderRadius: 1.5,
                                                                fontSize: '0.8rem',
                                                                fontWeight: 500,
                                                                color: 'primary.main',
                                                                transition: 'all 0.2s ease',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: 0.8,
                                                                '&:hover': {
                                                                    backgroundColor: 'rgba(63, 81, 181, 0.2)',
                                                                    transform: 'scale(1.05)',
                                                                    boxShadow: '0 2px 8px rgba(63, 81, 181, 0.2)',
                                                                },
                                                            }}
                                                        >
                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    fontSize: '1rem',
                                                                    '& svg': {
                                                                        width: '16px',
                                                                        height: '16px',
                                                                    }
                                                                }}
                                                            >
                                                                {tech.icon}
                                                            </Box>
                                                            {tech.name}
                                                        </Box>
                                                    ))}
                                                </Box>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
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

                    <Timeline
                        position={isMobile ? "right" : "alternate"}
                        sx={{
                            '& .MuiTimelineItem-root': {
                                '&:before': {
                                    content: isMobile ? 'none' : '""',
                                },
                            },
                        }}
                    >
                        {experiences.map((exp, index) => (
                            <TimelineItem key={index}>
                                {!isMobile && (
                                    <TimelineOppositeContent
                                        sx={{
                                            m: 'auto 0',
                                            variant: 'body2',
                                            color: 'text.secondary',
                                            fontWeight: 500,
                                        }}
                                        align={index % 2 === 0 ? "right" : "left"}
                                    >
                                        {exp.period}
                                    </TimelineOppositeContent>
                                )}

                                <TimelineSeparator>
                                    <TimelineDot
                                        sx={{
                                            backgroundColor: 'primary.main',
                                            width: 60,
                                            height: 60,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 4px 15px rgba(63, 81, 181, 0.3)',
                                        }}
                                    >
                                        {exp.icon}
                                    </TimelineDot>
                                    {index < experiences.length - 1 && (
                                        <TimelineConnector
                                            sx={{
                                                backgroundColor: 'rgba(63, 81, 181, 0.2)',
                                                width: 3,
                                            }}
                                        />
                                    )}
                                </TimelineSeparator>

                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            p: 3,
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

                                        {isMobile && (
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    mb: 2,
                                                    color: 'text.secondary',
                                                    fontStyle: 'italic',
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {exp.period}
                                            </Typography>
                                        )}
                                        <List sx={{ listStyleType: 'disc' }}>
                                            {exp.description.map((desc, descIndex) => (
                                                <ListItem sx={{ display: 'list-item' }} key={descIndex}>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            lineHeight: 1.6,
                                                            color: 'text.secondary',
                                                        }}
                                                    >
                                                        {desc}
                                                    </Typography>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </Box>
            </Container>
        </Box>
    );
};

export default AboutSection;
