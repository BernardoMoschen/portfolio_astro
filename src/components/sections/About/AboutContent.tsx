import React, { useState, type SyntheticEvent } from 'react';
import {
    Grid,
    Box,
    Typography,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { briefList } from '../../data/aboutData';

const AboutContent: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<number>(1);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleChange = (_event: SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    return (
        <Grid size={{ xs: 12 }}>
            <Box sx={{ mb: 4 }}>
                <TabContext value={selectedTab}>
                    <TabList
                        onChange={handleChange}
                        aria-label="about-section-tabs"
                        variant={isMobile ? "scrollable" : "standard"}
                        scrollButtons={isMobile ? "auto" : false}
                        allowScrollButtonsMobile
                        sx={{
                            mb: 3,
                            '& .MuiTabs-flexContainer': {
                                justifyContent: isMobile ? 'flex-start' : 'center',
                            },
                            '& .MuiTab-root': {
                                minWidth: isMobile ? 'auto' : 120,
                                fontSize: isMobile ? '0.875rem' : '1rem',
                                fontWeight: 600,
                                textTransform: 'none',
                                color: theme.palette.text.secondary,
                                '&.Mui-selected': {
                                    color: theme.palette.primary.main,
                                },
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor: theme.palette.primary.main,
                                height: 3,
                                borderRadius: '2px 2px 0 0',
                            },
                        }}
                    >
                        {briefList.map(({ audience }, index) => (
                            <Tab
                                key={index}
                                label={audience}
                                value={index}
                            />
                        ))}
                    </TabList>
                    {briefList.map(({ brief }, index) => (
                        <TabPanel
                            key={index}
                            value={index}
                            sx={{
                                px: isMobile ? 1 : 3,
                                py: 2,
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 3,
                                    lineHeight: 1.7,
                                    color: 'text.secondary',
                                    fontSize: isMobile ? '1rem' : '1.2rem',
                                    textAlign: isMobile ? 'left' : 'justify',
                                    maxWidth: '100%',
                                }}
                            >
                                {brief}
                            </Typography>
                        </TabPanel>
                    ))}
                </TabContext>
            </Box>
        </Grid >
    );
};

export default AboutContent;
