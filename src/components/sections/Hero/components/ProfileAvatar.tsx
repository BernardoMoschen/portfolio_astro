import React from 'react';
import { Box, Avatar, useTheme } from '@mui/material';

interface ProfileAvatarProps {
    isMobile: boolean;
    profileImage: string;
    name: string;
    initials: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
    isMobile,
    profileImage,
    name,
    initials
}) => {
    const theme = useTheme();

    return (
        <Box sx={{ mb: isMobile ? 2 : 0 }}>
            <Avatar
                sx={{
                    width: isMobile ? 150 : 200,
                    height: isMobile ? 150 : 200,
                    border: '4px solid',
                    borderColor: 'primary.main',
                    boxShadow: theme.palette.mode === 'dark'
                        ? '0 8px 32px rgba(139, 90, 60, 0.4)'
                        : '0 8px 32px rgba(139, 90, 60, 0.3)',
                    mx: 'auto',
                }}
                src={profileImage}
                alt={name}
            >
                {initials}
            </Avatar>
        </Box>
    );
};

export default ProfileAvatar;
