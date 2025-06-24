// Utility function for smooth scrolling to sections with navbar offset
export const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const navbarHeight = window.innerWidth < 900 ? 64 : 72; // Match Toolbar heights
        const additionalOffset = 24; // Extra breathing room
        const totalOffset = navbarHeight + additionalOffset;
        
        const elementPosition = element.offsetTop - totalOffset;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
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
