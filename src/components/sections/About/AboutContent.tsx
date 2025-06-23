import React, { useState, type SyntheticEvent } from 'react';
import {
    Grid,
    Box,
    Typography,
} from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { briefList } from '../../data/aboutData';

const AboutContent: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<number>(1);

    const handleChange = (_event: SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    return (
        <Grid size={{ xs: 12 }}>
            <Box sx={{ mb: 4 }}>
                <TabContext value={selectedTab}>
                    <TabList onChange={handleChange} aria-label="about-section-tabs">
                        {briefList.map(({ audience }, index) => (
                            <Tab label={audience} value={index} />
                        ))}
                    </TabList>
                    {briefList.map(({ brief }, index) => (
                        <TabPanel value={index} >
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 3,
                                    lineHeight: 1.8,
                                    color: 'text.secondary',
                                    fontSize: '1.8rem',
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
