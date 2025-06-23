import React from 'react';
import {
    Grid,
    Typography,
    Stack,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { technicalAreas } from '../../data/aboutData';
import TechnicalExpertiseCard from './TechnicalExpertiseCard';

const TechnicalExpertiseSection: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid size={{ xs: 12 }}>
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
                    <TechnicalExpertiseCard key={index} area={area} />
                ))}
            </Stack>
        </Grid>
    );
};

export default TechnicalExpertiseSection;
