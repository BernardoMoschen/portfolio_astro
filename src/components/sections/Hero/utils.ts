// Utility function for smooth scrolling to sections
export const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
};

// Personal information constants
export const PERSONAL_INFO = {
    name: 'Bernardo Moschen',
    title: 'Full Stack Developer',
    description: `I'm a passionate full stack developer who loves creating modern web applications
        with clean code and great user experiences. I specialize in React, Node.js, and
        TypeScript, always eager to learn new technologies and tackle challenging problems.`,
    profileImage: '/profile-photo.jpeg',
    initials: 'BM',
    skills: [
        'React', 'Node.js', 'TypeScript', 'Material UI',
        'Astro', 'Vite', 'Tailwind CSS', 'MongoDB', 'PostgreSQL'
    ],
    social: {
        github: 'https://github.com/bernardoMoschen',
        linkedin: 'https://linkedin.com/in/bernardomoschen',
    }
} as const;
