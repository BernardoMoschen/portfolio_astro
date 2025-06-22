import React from 'react';
import {
    Card,
    CardContent,
    Avatar,
    Box,
    Typography,
} from '@mui/material';
import type { TechnicalArea } from '../../data/aboutData';
import TechnologyChip from './TechnologyChip';
import { getCategoryIcon } from '../../utils/iconMap';

interface TechnicalExpertiseCardProps {
    area: TechnicalArea;
}

const TechnicalExpertiseCard: React.FC<TechnicalExpertiseCardProps> = ({ area }) => {
    const getHighlightColor = (highlight: string) => {
        switch (highlight) {
            case 'Expert':
                return 'success.main';
            case 'Advanced':
                return 'warning.main';
            default:
                return 'info.main';
        }
    };

    return (
        <Card
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
                        {getCategoryIcon(area.iconType)}
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
                                    backgroundColor: getHighlightColor(area.highlight),
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
                                <TechnologyChip key={techIndex} technology={tech} />
                            ))}
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default TechnicalExpertiseCard;
