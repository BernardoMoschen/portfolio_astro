import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';

interface SkillsSectionProps {
    skills: readonly string[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => (
    <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>
            Technologies I love
        </Typography>
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
            {skills.map((skill, index) => (
                <Chip
                    key={index}
                    label={skill}
                    variant="outlined"
                    sx={{
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'white',
                            transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                    }}
                />
            ))}
        </Stack>
    </Box>
);

export default SkillsSection;
