import React from 'react';
import {
    Storage,
    Devices,
    Cloud,
    Work,
} from '@mui/icons-material';
import {
    SiReact,
    SiTypescript,
    SiMui,
    SiJest,
    SiNextdotjs,
    SiNodedotjs,
    SiSharp,
    SiDotnet,
    SiGraphql,
    SiPostgresql,
    SiAmazon,
    SiSonarqube,
} from 'react-icons/si';
import { FaServer, FaDatabase } from 'react-icons/fa';

export const getCategoryIcon = (iconType: string) => {
    switch (iconType) {
        case 'devices':
            return <Devices />;
        case 'storage':
            return <Storage />;
        case 'cloud':
            return <Cloud />;
        case 'work':
            return <Work />;
        default:
            return <Devices />;
    }
};

export const getTechnologyIcon = (iconType: string, color: string) => {
    const style = { color };

    switch (iconType) {
        case 'react':
            return <SiReact style={style} />;
        case 'typescript':
            return <SiTypescript style={style} />;
        case 'mui':
            return <SiMui style={style} />;
        case 'jest':
            return <SiJest style={style} />;
        case 'nextjs':
            return <SiNextdotjs style={style} />;
        case 'nodejs':
            return <SiNodedotjs style={style} />;
        case 'csharp':
            return <SiSharp style={style} />;
        case 'dotnet':
            return <SiDotnet style={style} />;
        case 'graphql':
            return <SiGraphql style={style} />;
        case 'postgresql':
            return <SiPostgresql style={style} />;
        case 'aws':
            return <SiAmazon style={style} />;
        case 'sonarqube':
            return <SiSonarqube style={style} />;
        case 'server':
            return <FaServer style={style} />;
        case 'database':
            return <FaDatabase style={style} />;
        default:
            return <SiReact style={style} />;
    }
};
