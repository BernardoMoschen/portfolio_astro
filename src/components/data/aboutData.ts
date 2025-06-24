export interface Technology {
    name: string;
    iconColor: string;
    iconType: 'react' | 'typescript' | 'mui' | 'jest' | 'nextjs' | 'nodejs' | 'csharp' | 'dotnet' | 'graphql' | 'postgresql' | 'aws' | 'sonarqube' | 'server' | 'database' | 'vue' | 'php' | 'mysql' | 'mongodb' | 'zapier' | 'strapi' | 'webflow' | 'zendesk' | 'sequelize' | 'mssql' | 'typeorm' | 'adonis' | 'nestjs' | 'docker' | 'express' | 'prisma' | 'astro' | 'tailwind' | 'redux' | 'recoil' | 'webpack' | 'sass' | 'linux' | 'html' | 'css' | 'git' | 'swagger' | 'spa' | 'rest' | 'solid' | 'scrum' | 'microservices' | 'javascript';
    featured?: boolean; // Mark the most important/frequently used skills
}

export interface TechnicalArea {
    category: string;
    iconType: 'devices' | 'storage' | 'cloud';
    technologies: Technology[];
    description: string;
    descriptionHighlight: string;
}

export interface Experience {
    role: string;
    company: string;
    companyUrl: string;
    period: string;
    description: string[];
    iconType: 'work';
}


export type AudienceBrief = {
    audience: string;
    brief: string;
};

export const briefList: AudienceBrief[] = [
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

export const technicalAreas: TechnicalArea[] = [
    {
        category: 'Frontend Development',
        iconType: 'devices',
        technologies: [
            { name: 'React', iconColor: '#61DAFB', iconType: 'react', featured: true },
            { name: 'TypeScript', iconColor: '#3178C6', iconType: 'typescript', featured: true },
            { name: 'JavaScript', iconColor: '#F7DF1E', iconType: 'javascript', featured: true },
            { name: 'Material UI', iconColor: '#007FFF', iconType: 'mui', featured: true },
            { name: 'Vue', iconColor: '#4FC08D', iconType: 'vue' },
            { name: 'Astro.js', iconColor: '#FF5D01', iconType: 'astro' },
            { name: 'Tailwind', iconColor: '#06B6D4', iconType: 'tailwind' },
            { name: 'Redux', iconColor: '#764ABC', iconType: 'redux' },
            { name: 'Recoil', iconColor: '#3578E5', iconType: 'recoil' },
            { name: 'Webpack', iconColor: '#8DD6F9', iconType: 'webpack' },
            { name: 'SASS', iconColor: '#CC6699', iconType: 'sass' },
            { name: 'HTML', iconColor: '#E34F26', iconType: 'html' },
            { name: 'CSS3', iconColor: '#1572B6', iconType: 'css' },
        ],
        description: `Modern frontend frameworks, state management, and styling solutions`,
        descriptionHighlight: 'I make pixels dance and users happy (mostly)',
    },
    {
        category: 'Backend & APIs',
        iconType: 'storage',
        technologies: [
            { name: 'Node.js', iconColor: '#339933', iconType: 'nodejs', featured: true },
            { name: 'C#', iconColor: '#239120', iconType: 'csharp', featured: true },
            { name: '.NET', iconColor: '#512BD4', iconType: 'dotnet', featured: true },
            { name: 'GraphQL', iconColor: '#E10098', iconType: 'graphql', featured: true },
            { name: 'Express', iconColor: '#000000', iconType: 'express' },
            { name: 'NestJS', iconColor: '#E0234E', iconType: 'nestjs' },
            { name: 'Adonis.js', iconColor: '#220052', iconType: 'adonis' },
            { name: 'PHP', iconColor: '#777BB4', iconType: 'php' },
            { name: 'REST', iconColor: '#FF6B6B', iconType: 'rest' },
            { name: 'Microservices', iconColor: '#4ECDC4', iconType: 'microservices' },
        ],
        description: 'Server-side development, API design, and scalable architecture',
        descriptionHighlight:'I turn coffee into APIs (with occasional Stack Overflow breaks)',
    },
    {
        category: 'Databases & ORM',
        iconType: 'storage',
        technologies: [
            { name: 'PostgreSQL', iconColor: '#336791', iconType: 'postgresql', featured: true },
            { name: 'MySQL', iconColor: '#4479A1', iconType: 'mysql', featured: true },
            { name: 'TypeORM', iconColor: '#FE0803', iconType: 'typeorm', featured: true },
            { name: 'MongoDB', iconColor: '#47A248', iconType: 'mongodb' },
            { name: 'SQL Server', iconColor: '#CC2927', iconType: 'mssql' },
            { name: 'Sequelize.js', iconColor: '#52B0E7', iconType: 'sequelize' },
            { name: 'Prisma', iconColor: '#2D3748', iconType: 'prisma' },
        ],
        description: 'Database design, optimization, and ORM implementation',
        descriptionHighlight:'I speak fluent SQL (and sometimes the database listens)' ,
    },
    {
        category: 'DevOps & Tools',
        iconType: 'cloud',
        technologies: [
            { name: 'AWS', iconColor: '#FF9900', iconType: 'aws', featured: true },
            { name: 'Docker', iconColor: '#2496ED', iconType: 'docker', featured: true },
            { name: 'Jest', iconColor: '#C21325', iconType: 'jest', featured: true },
            { name: 'Linux', iconColor: '#FCC624', iconType: 'linux' },
            { name: 'GitHub/GitLab', iconColor: '#181717', iconType: 'git' },
            { name: 'SonarQube', iconColor: '#4E9BCD', iconType: 'sonarqube' },
            { name: 'Swagger', iconColor: '#85EA2D', iconType: 'swagger' },
        ],
        description: 'Containerization, cloud infrastructure, and development tools',
        descriptionHighlight:'I containerize everything and deploy with confidence (fingers crossed)' ,
    },
    {
        category: 'Integration & Platforms',
        iconType: 'devices',
        technologies: [
            { name: 'Zapier', iconColor: '#FF4A00', iconType: 'zapier', featured: true },
            { name: 'SCRUM', iconColor: '#0052CC', iconType: 'scrum', featured: true },
            { name: 'Strapi', iconColor: '#2F2E8B', iconType: 'strapi' },
            { name: 'Webflow', iconColor: '#4353FF', iconType: 'webflow' },
            { name: 'SPAs', iconColor: '#FF6B6B', iconType: 'spa' },
            { name: 'SOLID', iconColor: '#4285F4', iconType: 'solid' },
        ],
        description: 'Third-party integrations, design principles, and agile methodologies',
        descriptionHighlight:'I connect everything to everything (and it somehow works)' ,
    },
];

export const experiences: Experience[] = [
    {
        role: 'Senior Full Stack Developer',
        company: 'Paradise Mobile',
        companyUrl: 'https://www.linkedin.com/company/paradise-mobile/about',
        period: '2024 - Present',
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
        companyUrl: 'https://www.linkedin.com/company/grupo-tiradentes/about',
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
    {
        role: 'Mid-level Full Stack Engineer',
        company: 'ArcelorMittal Mines Canada',
        companyUrl: 'https://www.linkedin.com/company/arcelormittal/about',
        period: '2021 - 2022',
        description: [
            `Led the development of a web application for seamless integration of virtual and manual data, automating complex and manual processes, digitally transforming the way the corporation worked;`,
            'Orchestrated scalable system architecture with Node.js, Sequelize.js, and Microsoft SQL Server, enabling robust data integration across diverse systems;',
            'Implemented front-end interfaces with React.js and ensured code quality with Jest and Typescript, enhancing user experience all while providing innovative and productive ways of working;',
            'Collaborated in 100% SCRUM-based teams;'
        ],
        iconType: 'work',
    },
    {
        role: 'Full Stack Engineer',
        company: 'Meta IT',
        companyUrl: 'https://www.linkedin.com/company/metaoficial/about/',
        period: '2021 - 2021',
        description: [
            `Coordinated different teams and participated in several projects across different fields of the market;`,
            'Leveraged an wide range of technologies such as: Typescript, React, Vue, PHP, TypeORM, Adonis.js,Nest.js and many others;',
            'Managed multiple databases: MySQL, SQL, Postgres, MongoDB and SQL Server;',
            'Collaborated in 100% SCRUM-based teams;'
        ],
        iconType: 'work',
    },
];
