import React from 'react';
import { Box } from '@mui/material';
import type { Technology } from '../../data/aboutData';
import { getTechnologyIcon } from '../../utils/iconMap';

interface TechnologyChipProps {
    technology: Technology;
}

const TechnologyChip: React.FC<TechnologyChipProps> = ({ technology }) => {
    return (
        <Box
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
                {getTechnologyIcon(technology.iconType, technology.iconColor)}
            </Box>
            {technology.name}
        </Box>
    );
};

export default TechnologyChip;
