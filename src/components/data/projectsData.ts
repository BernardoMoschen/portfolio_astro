interface ProjectData {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
    featured: boolean;
    status: 'planning' | 'wip' | 'completed';
}[]

export const projects:  ProjectData[] = [
        {
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website built with Astro, React, and Material UI. Features theming, smooth animations, responsive design, and optimized performance.',
            image: '/project-portfolio.jpg',
            technologies: ['Astro', 'React', 'Material UI', 'TypeScript'],
            githubUrl: 'https://github.com/BernardoMoschen/portfolio_astro',
            liveUrl: 'https://bernardomoschen.dev', // Update with your actual domain
            featured: true,
            status: 'completed'
        },
        {
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution with user authentication, payment processing, inventory management, and admin dashboard. Currently in development.',
            image: '/project-placeholder.jpg',
            technologies: ['React', 'Node.js', 'Nest.js', 'PostgreSQL', 'Prisma', 'Material UI', ],
            githubUrl: '',
            liveUrl: '',
            featured: true,
            status: 'wip'
        },
        {
            title: 'Task Management App',
            description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
            image: '/project-placeholder.jpg',
            technologies: ['Nest.js', 'TypeScript', 'React', 'Socket.io'],
            githubUrl: '',
            liveUrl: '',
            featured: false,
            status: 'planning'
        },
    ]