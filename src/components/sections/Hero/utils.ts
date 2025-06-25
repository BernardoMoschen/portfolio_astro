export const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const navbarHeight = window.innerWidth < 900 ? 64 : 72; // Match Toolbar heights
        const additionalOffset = 24; 
        const totalOffset = navbarHeight + additionalOffset;
        
        const elementPosition = element.offsetTop - totalOffset;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
};
// I like to build useful stuff, break things on purpose, and obsess over clean code and clever UIs.

export const PERSONAL_INFO = {
    name: 'Bernardo Moschen',
    title: 'Full Stack Engineer',
    description: `Since 2019 bringing life to scalable, maintainable solutions that deliver measurable business impact. Mostly advocating in the TypeScript multiverse: React and Node.js are my go-to weapons of choice.`,
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
