import React from 'react';
import {
    Box,
    Typography,
    Paper,
    List,
    ListItem,
    useTheme,
    useMediaQuery,
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
import type { Experience } from '../../data/aboutData';
import { getCategoryIcon } from '../../utils/iconMap';

interface ExperienceTimelineProps {
    experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
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
                                {getCategoryIcon(exp.iconType)}
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
    );
};

export default ExperienceTimeline;
