export interface Technology {
    name: string;
    iconColor: string;
    iconType: 'react' | 'typescript' | 'mui' | 'jest' | 'nextjs' | 'nodejs' | 'csharp' | 'dotnet' | 'graphql' | 'postgresql' | 'aws' | 'sonarqube' | 'server' | 'database' | 'vue' | 'php' | 'mysql' | 'mongodb' | 'zapier' | 'strapi' | 'webflow' | 'zendesk' | 'sequelize' | 'mssql' | 'typeorm' | 'adonis' | 'nestjs' | 'docker' | 'express' | 'prisma' | 'astro' | 'tailwind' | 'redux' | 'recoil' | 'webpack' | 'sass' | 'linux' | 'html' | 'css' | 'git' | 'swagger' | 'spa' | 'rest' | 'solid' | 'scrum' | 'microservices' | 'javascript';
    featured?: boolean; 
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
            'I translate human needs into code, caring about the little details most people never see: create something that matters — not just something that works.',
    },
    {
        audience: 'Recruiters',
        brief:
            "I'm a Full Stack engineer with a proven track record in building reliable, scalable solutions. With expertise in modern technologies and a commitment to clean code, I deliver results that drive business success.",
    },
    {
        audience: 'Product Managers',
        brief:
            "I bring end-to-end technical expertise to support your product journey, from discovery to delivery. I'll collaborate closely to align technical execution with your product vision, maximizing impact at every stage.",
    },
    {
        audience: 'Engineers',
        brief:
            "I'm a engineer who values efficiency, maintainability, and collaboration. I write clean, scalable code, optimize performance, and contribute to a strong engineering culture by sharing knowledge and solving challenges together.",
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
            { name: 'Tailwind', iconColor: '#06B6D4', iconType: 'tailwind', featured: true  },
            { name: 'Redux', iconColor: '#764ABC', iconType: 'redux', featured: true  },
            { name: 'Recoil', iconColor: '#3578E5', iconType: 'recoil', featured: true  },
            { name: 'Webpack', iconColor: '#8DD6F9', iconType: 'webpack' },
            { name: 'SASS', iconColor: '#CC6699', iconType: 'sass', featured: true  },
            { name: 'HTML', iconColor: '#E34F26', iconType: 'html' },
            { name: 'CSS3', iconColor: '#1572B6', iconType: 'css' },
            { name: 'Jest', iconColor: '#C21325', iconType: 'jest', featured: true },
        ],
        description: `Modern frontend frameworks, state management, and styling solutions`,
        descriptionHighlight: 'I make pixels dance and users happy (mostly)',
    },
    {
        category: 'Backend & APIs',
        iconType: 'storage',
        technologies: [
            { name: 'Node.js', iconColor: '#339933', iconType: 'nodejs', featured: true },
            { name: 'Express', iconColor: '#000000', iconType: 'express', featured: true  },
            { name: 'REST', iconColor: '#FF6B6B', iconType: 'rest', featured: true  },
            { name: 'NestJS', iconColor: '#E0234E', iconType: 'nestjs', featured: true  },
            { name: 'TypeORM', iconColor: '#FE0803', iconType: 'typeorm', featured: true },
            { name: 'Prisma', iconColor: '#2D3748', iconType: 'prisma', featured: true },
            { name: 'GraphQL', iconColor: '#E10098', iconType: 'graphql' },
            { name: 'Adonis.js', iconColor: '#220052', iconType: 'adonis' },
            { name: 'Sequelize.js', iconColor: '#52B0E7', iconType: 'sequelize' },
            { name: 'Microservices', iconColor: '#4ECDC4', iconType: 'microservices' },
            { name: 'PHP', iconColor: '#777BB4', iconType: 'php' },
            { name: '.NET', iconColor: '#512BD4', iconType: 'dotnet' },
            { name: 'C#', iconColor: '#239120', iconType: 'csharp', },

        ],
        description: 'Server-side development, API design, and scalable architecture',
        descriptionHighlight:'I create functional endpoints and make your site fast...eventually',
    },
    {
        category: 'DevOps, Databases & Tools',
        iconType: 'cloud',
        technologies: [
            { name: 'Docker', iconColor: '#2496ED', iconType: 'docker', featured: true },
            { name: 'PostgreSQL', iconColor: '#336791', iconType: 'postgresql', featured: true },
            { name: 'MySQL', iconColor: '#4479A1', iconType: 'mysql', featured: true },
            { name: 'MongoDB', iconColor: '#47A248', iconType: 'mongodb', featured: true },
            { name: 'AWS', iconColor: '#FF9900', iconType: 'aws', featured: true },
            { name: 'SQL Server', iconColor: '#CC2927', iconType: 'mssql', featured: true  },
            { name: 'Linux', iconColor: '#FCC624', iconType: 'linux',  featured: true },
            { name: 'SPAs', iconColor: '#FF6B6B', iconType: 'spa', },
            { name: 'Swagger', iconColor: '#85EA2D', iconType: 'swagger',  },
            { name: 'GitHub/GitLab', iconColor: '#181717', iconType: 'git', },
            { name: 'SonarQube', iconColor: '#4E9BCD', iconType: 'sonarqube' },
            { name: 'Zapier', iconColor: '#FF4A00', iconType: 'zapier', },
            { name: 'SCRUM', iconColor: '#0052CC', iconType: 'scrum',  },
            { name: 'Strapi', iconColor: '#2F2E8B', iconType: 'strapi' },
            { name: 'Webflow', iconColor: '#4353FF', iconType: 'webflow' },
            { name: 'SOLID', iconColor: '#4285F4', iconType: 'solid' },
        ],
        description: 'Database design, optimization, containerization and cloud infrastructure',
        descriptionHighlight:'I speak fluent SQL and deploy with confidence (fingers crossed)' ,
    },
];

export const experiences: Experience[] = [
    {
        role: 'Senior Full Stack Engineer',
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
