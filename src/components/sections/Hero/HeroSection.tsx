import React from 'react';
import {
    Box,
    Container,
    useTheme,
    useMediaQuery,
} from '@mui/material';

// Import sub-components
import {
    ProfileAvatar,
    HeroText,
    SkillsSection,
    ActionButtons,
    ScrollIndicator,
    BackgroundElements,
} from './components';

// Import utilities and constants
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
            }}
        >
            <BackgroundElements />
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: 'center',
                        gap: isMobile ? 4 : 8,
                        textAlign: isMobile ? 'center' : 'left',
                        minHeight: '80vh',
                        width: '100%',
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
                            // Add margin to account for floating elements
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

                        <SkillsSection skills={PERSONAL_INFO.skills} />

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
