export interface MenuItem {
    label: string;
    href: string;
}

export const menuItems: MenuItem[] = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
};

export const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
