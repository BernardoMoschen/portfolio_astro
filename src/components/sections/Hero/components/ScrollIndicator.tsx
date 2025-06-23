import React from 'react';
import { Box } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

interface ScrollIndicatorProps {
    onScrollClick: () => void;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ onScrollClick }) => (
    <Box
        sx={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
            animation: 'bounce 2s infinite',
        }}
        onClick={onScrollClick}
    >
        <KeyboardArrowDown sx={{ fontSize: 40, color: 'primary.main' }} />
    </Box>
);

export default ScrollIndicator;
