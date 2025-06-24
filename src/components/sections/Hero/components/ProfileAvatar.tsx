import React from 'react';
import { Box, Avatar, useTheme, Typography, Card, CardContent, Rating, Chip } from '@mui/material';
import { Code, Star, ArrowUpward, ArrowDownward } from '@mui/icons-material';

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
        <Box 
            sx={{ 
                mb: isMobile ? 2 : 0,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 400,
                width: '100%',
                maxWidth: 500,
            }}
        >
            {/* Background decorative circles */}
            <Box
                sx={{
                    position: 'absolute',
                    width: 350,
                    height: 350,
                    borderRadius: '50%',
                    border: `3px dashed ${theme.palette.primary.main}`,
                    opacity: 0.3,
                    animation: 'rotate 20s linear infinite',
                    '@keyframes rotate': {
                        '0%': { transform: 'rotate(0deg)' },
                        '100%': { transform: 'rotate(360deg)' },
                    },
                }}
            />
            
            {/* Inner decorative circle */}
            <Box
                sx={{
                    position: 'absolute',
                    width: 280,
                    height: 280,
                    borderRadius: '50%',
                    background: theme.palette.mode === 'dark'
                        ? `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}30)`
                        : `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}15)`,
                    opacity: 0.7,
                }}
            />

            {/* Years of Experience Badge */}
            <Box
                sx={{
                    position: 'absolute',
                    left: isMobile ? -20 : -40,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    textAlign: 'center',
                    zIndex: 2,
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 800,
                        color: 'primary.main',
                        fontSize: isMobile ? '2.5rem' : '3.5rem',
                        lineHeight: 1,
                        textShadow: `2px 2px 4px ${theme.palette.primary.main}40`,
                    }}
                >
                    05
                </Typography>
                <Typography
                    variant="caption"
                    sx={{
                        color: 'text.secondary',
                        fontWeight: 600,
                        fontSize: '0.7rem',
                        lineHeight: 1.2,
                        display: 'block',
                        transform: 'rotate(-90deg)',
                        transformOrigin: 'center',
                        whiteSpace: 'nowrap',
                        mt: 1,
                    }}
                >
                    YEARS
                </Typography>
                <Typography
                    variant="caption"
                    sx={{
                        color: 'text.secondary',
                        fontWeight: 600,
                        fontSize: '0.7rem',
                        lineHeight: 1.2,
                        display: 'block',
                        transform: 'rotate(-90deg)',
                        transformOrigin: 'center',
                        whiteSpace: 'nowrap',
                    }}
                >
                    EXPERIENCE
                </Typography>
            </Box>

            {/* Main Avatar */}
            <Avatar
                sx={{
                    width: isMobile ? 180 : 220,
                    height: isMobile ? 180 : 220,
                    border: `5px solid ${theme.palette.background.paper}`,
                    boxShadow: theme.palette.mode === 'dark'
                        ? `0 20px 40px ${theme.palette.primary.main}40, 0 10px 20px rgba(0,0,0,0.3)`
                        : `0 20px 40px ${theme.palette.primary.main}30, 0 10px 20px rgba(0,0,0,0.2)`,
                    position: 'relative',
                    zIndex: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: theme.palette.mode === 'dark'
                            ? `0 25px 50px ${theme.palette.primary.main}50, 0 15px 30px rgba(0,0,0,0.4)`
                            : `0 25px 50px ${theme.palette.primary.main}40, 0 15px 30px rgba(0,0,0,0.3)`,
                    }
                }}
                src={profileImage}
                alt={name}
            >
                {initials}
            </Avatar>

            {/* Floating Skills Card */}
            <Card
                sx={{
                    position: 'absolute',
                    right: isMobile ? -10 : -30,
                    top: 60,
                    minWidth: 140,
                    background: theme.palette.mode === 'dark'
                        ? `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.dark}20 100%)`
                        : `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.light}10 100%)`,
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.primary.main}30`,
                    boxShadow: theme.palette.mode === 'dark'
                        ? `0 8px 32px ${theme.palette.primary.main}40`
                        : `0 8px 32px ${theme.palette.primary.main}30`,
                    zIndex: 4,
                    animation: 'float 3s ease-in-out infinite',
                    '@keyframes float': {
                        '0%, 100%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-10px)' },
                    },
                }}
            >
                <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Code sx={{ color: 'primary.main', fontSize: 16, mr: 0.5 }} />
                        <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.primary' }}>
                            Skills Rating
                        </Typography>
                    </Box>
                    <Rating 
                        value={4.9} 
                        precision={0.1} 
                        readOnly 
                        size="small"
                        sx={{
                            '& .MuiRating-iconFilled': {
                                color: 'secondary.main',
                            }
                        }}
                    />
                    <Typography 
                        variant="h6" 
                        sx={{ 
                            fontWeight: 700, 
                            color: 'primary.main',
                            fontSize: '1.1rem',
                            mt: 0.5
                        }}
                    >
                        4.9
                    </Typography>
                </CardContent>
            </Card>

            {/* Creative Developer Badge */}
            <Box
                sx={{
                    position: 'absolute',
                    right: isMobile ? -20 : -50,
                    bottom: 40,
                    textAlign: 'right',
                    zIndex: 2,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 300,
                        color: 'text.secondary',
                        fontSize: isMobile ? '1.8rem' : '2.5rem',
                        fontStyle: 'italic',
                        lineHeight: 1,
                        opacity: 0.8,
                    }}
                >
                    Creative
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        fontSize: isMobile ? '1.8rem' : '2.5rem',
                        lineHeight: 1,
                        textShadow: `1px 1px 2px ${theme.palette.primary.main}40`,
                    }}
                >
                    Developer.
                </Typography>
            </Box>

            {/* Decorative arrows */}
            <ArrowUpward
                sx={{
                    position: 'absolute',
                    top: 20,
                    left: '30%',
                    color: 'primary.main',
                    opacity: 0.6,
                    fontSize: 20,
                    animation: 'bounce 2s ease-in-out infinite',
                    '@keyframes bounce': {
                        '0%, 100%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-5px)' },
                    },
                }}
            />
            <ArrowDownward
                sx={{
                    position: 'absolute',
                    bottom: 20,
                    right: '30%',
                    color: 'secondary.main',
                    opacity: 0.6,
                    fontSize: 20,
                    animation: 'bounce 2s ease-in-out infinite 1s',
                }}
            />
        </Box>
    );
};

export default ProfileAvatar;
