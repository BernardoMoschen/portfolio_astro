export interface Technology {
    name: string;
    iconColor: string;
    iconType: 'react' | 'typescript' | 'mui' | 'jest' | 'nextjs' | 'nodejs' | 'csharp' | 'dotnet' | 'graphql' | 'postgresql' | 'aws' | 'sonarqube' | 'server' | 'database';
}

export interface TechnicalArea {
    category: string;
    iconType: 'devices' | 'storage' | 'cloud';
    technologies: Technology[];
    description: string;
    highlight: 'Expert' | 'Advanced' | 'Proficient';
}

export interface Experience {
    role: string;
    company: string;
    companyUrl: string;
    period: string;
    description: string[];
    iconType: 'work';
}

export const technicalAreas: TechnicalArea[] = [
    {
        category: 'Frontend Excellence',
        iconType: 'devices',
        technologies: [
            { name: 'React', iconColor: '#61DAFB', iconType: 'react' },
            { name: 'TypeScript', iconColor: '#3178C6', iconType: 'typescript' },
            { name: 'Material UI', iconColor: '#007FFF', iconType: 'mui' },
            { name: 'Recoil', iconColor: '#3578E5', iconType: 'react' },
            { name: 'Jest', iconColor: '#C21325', iconType: 'jest' },
            { name: 'Next.js', iconColor: '#000000', iconType: 'nextjs' },
        ],
        description: 'Building responsive, accessible user experiences with modern frameworks',
        highlight: 'Expert'
    },
    {
        category: 'Backend Architecture',
        iconType: 'storage',
        technologies: [
            { name: 'Node.js', iconColor: '#339933', iconType: 'nodejs' },
            { name: 'C#', iconColor: '#239120', iconType: 'csharp' },
            { name: '.NET', iconColor: '#512BD4', iconType: 'dotnet' },
            { name: 'GraphQL', iconColor: '#E10098', iconType: 'graphql' },
            { name: 'REST APIs', iconColor: '#FF6B6B', iconType: 'server' },
            { name: 'Microservices', iconColor: '#4ECDC4', iconType: 'server' },
        ],
        description: 'Scalable server-side solutions and API design',
        highlight: 'Advanced'
    },
    {
        category: 'Database & Cloud',
        iconType: 'cloud',
        technologies: [
            { name: 'PostgreSQL', iconColor: '#336791', iconType: 'postgresql' },
            { name: 'AWS', iconColor: '#FF9900', iconType: 'aws' },
            { name: 'Database Design', iconColor: '#4285F4', iconType: 'database' },
            { name: 'SonarQube', iconColor: '#4E9BCD', iconType: 'sonarqube' },
            { name: 'CI/CD', iconColor: '#2196F3', iconType: 'server' },
        ],
        description: 'Data architecture and cloud infrastructure management',
        highlight: 'Proficient'
    },
];

export const experiences: Experience[] = [
    {
        role: 'Senior Full Stack Developer',
        company: 'Paradise Mobile',
        companyUrl: 'https://www.linkedin.com/company/paradise-mobile/',
        period: '2034 - Present',
        description: [
            `Developed onboarding and self-service applications using React, Material UI, Recoil, and Jest,
            streamlining user experience and improving onboarding time by significantly reducing friction;`,
            'Built and maintained scalable REST APIs and midtier systems with Node.js, TypeScript, SonarQube, GraphQL and AWS, supporting formidable CRM interrelation;',
            'Led the creation of back - office support tools that significantly boosted revenue and lowered operational costs; ',
            'Integrated key external platforms such as Zapier, Webflow, Zendesk and headless Strapi to enhance customer support and automation; ',
            'Collaborated effectively within both Kanban and Scrum - based agile teams;',
        ],
        iconType: 'work',
    },
    {
        role: 'Mid-level Full Stack Engineer',
        company: 'Grupo Tiradentes',
        companyUrl: 'https://www.linkedin.com/company/grupo-tiradentes/',
        period: '2022 - 2023',
        description: [
            `Developed a unified system for educational institutions, managing course offerings, student
contracts, financing requests and business reporting, ensuring robust functionality and code quality;`,
            'Designed and implemented scalable front-end interfaces with React.js and Typescript, enhancing user experience for the whole company staff and their students',
            'Engineered back-end systems and APIs with C#, .NET, and PostgreSQL, streamlining workflows for transactions and users daily;',
            'Collaborated in 100% SCRUM-based teams;'
        ],
        iconType: 'work',
    },
];
