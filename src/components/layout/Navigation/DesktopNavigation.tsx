import React from 'react';
import {
    Box,
    Button,
    Typography,
    useTheme,
} from '@mui/material';
import { ThemeToggle } from '../../theme';

interface MenuItem {
    label: string;
    href: string;
}

interface DesktopNavigationProps {
    menuItems: MenuItem[];
    activeSection: string;
    onMenuClick: (href: string) => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
    menuItems,
    activeSection,
    onMenuClick,
}) => {
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
            {menuItems.map((item, index) => (
                <Button
                    key={item.label}
                    onClick={() => onMenuClick(item.href)}
                    sx={{
                        color: activeSection === item.href.replace('#', '')
                            ? 'primary.main'
                            : 'text.primary',
                        fontWeight: 600,
                        fontFamily: 'monospace',
                        fontSize: '0.85rem',
                        position: 'relative',
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        border: '1px solid transparent',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                            color: 'primary.main',
                            backgroundColor: `${theme.palette.primary.main}10`,
                            borderColor: theme.palette.primary.main,
                            transform: 'translateY(-2px)',
                        },
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -4,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: activeSection === item.href.replace('#', '') ? '90%' : '0%',
                            height: 2,
                            backgroundColor: 'secondary.main',
                            borderRadius: 1,
                            transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        },
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span>{item.label}</span>
                        <Typography
                            variant="caption"
                            sx={{
                                fontSize: '0.6rem',
                                opacity: 0.7,
                                color: 'secondary.main',
                                lineHeight: 1,
                                mt: 0.2,
                            }}
                        >
                            [{index.toString().padStart(2, '0')}]
                        </Typography>
                    </Box>
                </Button>
            ))}
            <Box
                sx={{
                    ml: 2,
                    pl: 2,
                    borderLeft: `1px solid ${theme.palette.primary.main}30`,
                }}
            >
                <ThemeToggle />
            </Box>
        </Box>
    );
};

export default DesktopNavigation;
