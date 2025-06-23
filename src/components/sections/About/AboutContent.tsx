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

type AudienceBrief = {
    audience: string;
    brief: string;
};

const briefList: AudienceBrief[] = [
    {
        audience: 'For anyone',
        brief:
            'I design and develop scalable, user-focused applications that solve real-world problems. Whether it’s a sleek web platform or a complex backend system, I bring ideas to life with precision and care.',
    },
    {
        audience: 'Recruiters',
        brief:
            'I’m a full-stack developer with a proven track record in building reliable, scalable solutions. With expertise in modern technologies and a commitment to clean code, I deliver results that drive business success."',
    },
    {
        audience: 'Product Managers',
        brief:
            'I bring end-to-end technical expertise to support your product journey, from discovery to delivery. I’ll collaborate closely to align technical execution with your product vision, maximizing impact at every stage.',
    },
    {
        audience: 'Engineers',
        brief:
            'I’m a developer who values efficiency, maintainability, and collaboration. I write clean, scalable code, optimize performance, and contribute to a strong engineering culture by sharing knowledge and solving challenges together.',
    },
];

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
