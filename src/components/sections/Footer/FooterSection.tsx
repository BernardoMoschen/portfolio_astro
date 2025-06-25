import React from 'react';
import {
    Box,
    Container,
    Typography,
    IconButton,
    Stack,
    Divider,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import {
    GitHub,
    LinkedIn,
    Email,
    Favorite,
} from '@mui/icons-material';
import siteConfig from '../../../config/site';

const FooterSection: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const socialLinks = [
        {
            icon: <GitHub />,
            label: 'GitHub',
            url: siteConfig.github,
        },
        {
            icon: <LinkedIn />,
            label: 'LinkedIn',
            url: siteConfig.linkedin,
        },
        {
            icon: <Email />,
            label: 'Email',
            url: `mailto:${siteConfig.email}`,
        },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'background.paper',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                py: 4,
                mt: 'auto',
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={isMobile ? 'column' : 'row'}
                    spacing={3}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    {/* Logo/Name */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {siteConfig.name}
                    </Typography>

                    {/* Social Links */}
                    <Stack direction="row" spacing={1}>
                        {socialLinks.map((social, index) => (
                            <IconButton
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    color: 'text.secondary',
                                    '&:hover': {
                                        color: 'primary.main',
                                        transform: 'translateY(-2px)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                                aria-label={social.label}
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Stack>
                </Stack>

                <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

                {/* Copyright */}
                <Stack
                    direction={isMobile ? 'column' : 'row'}
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'text.secondary',
                            textAlign: isMobile ? 'center' : 'left',
                        }}
                    >
                        © {currentYear} {siteConfig.name}. All rights reserved.
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            color: 'text.secondary',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            textAlign: isMobile ? 'center' : 'right',
                        }}
                    >
                        Made with{' '}
                        <Favorite
                            sx={{
                                fontSize: '1rem',
                                color: 'secondary.main',
                                animation: 'pulse 2s infinite',
                            }}
                        />{' '}
                        using Astro & Material UI                </Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default FooterSection;
