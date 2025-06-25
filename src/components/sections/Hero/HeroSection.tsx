import React from 'react';
import {
    Box,
    Container,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import {
    ProfileAvatar,
    HeroText,
    ActionButtons,
    ScrollIndicator,
    BackgroundElements,
} from './components';
import { PERSONAL_INFO, scrollToSection } from './utils';

const HeroSection: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            component="section"
            id="hero"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                background: theme.palette.mode === 'dark'
                    ? `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.dark}20 50%, ${theme.palette.secondary.dark}30 100%)`
                    : `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.light}10 50%, ${theme.palette.secondary.light}20 100%)`,
                position: 'relative',
                overflow: 'hidden',
                pt: { xs: 12, sm: 12 },
                pb: isMobile ? 8 : 0,
            }}
        >
            <BackgroundElements />
            <Container maxWidth="lg" sx={{
                position: 'relative',
                zIndex: 1,
                py: isMobile ? 4 : 0,
                px: { xs: 6, sm: 4, md: 3 },
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: 'center',
                        gap: isMobile ? 4 : 16,
                        textAlign: isMobile ? 'center' : 'left',
                        minHeight: isMobile ? 'auto' : '80vh',
                        width: '100%',
                        px: isMobile ? 1 : 0,
                    }}
                >
                    <Box
                        sx={{
                            flex: isMobile ? 'none' : '0 0 auto',
                            display: 'flex',
                            justifyContent: 'center',
                            width: isMobile ? '100%' : 'auto',
                        }}
                    >
                        <ProfileAvatar
                            isMobile={isMobile}
                            profileImage={PERSONAL_INFO.profileImage}
                            name={PERSONAL_INFO.name}
                            initials={PERSONAL_INFO.initials}
                            githubUrl={PERSONAL_INFO.social.github}
                            linkedinUrl={PERSONAL_INFO.social.linkedin}
                        />
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            maxWidth: isMobile ? '100%' : 600,
                            ml: isMobile ? 0 : 2,
                            mr: isMobile ? 0 : 4,
                        }}
                    >
                        <HeroText
                            isMobile={isMobile}
                            name={PERSONAL_INFO.name}
                            title={PERSONAL_INFO.title}
                            description={PERSONAL_INFO.description}
                        />
                        <ActionButtons
                            isMobile={isMobile}
                            onContactClick={() => scrollToSection('contact')}
                        />
                    </Box>
                </Box>
                <ScrollIndicator onScrollClick={() => scrollToSection('about')} />
            </Container>
        </Box>
    );
};

export default HeroSection;
