export const siteConfig = {
  domain: 'bernardomoschen.dev',
  url: 'https://bernardomoschen.dev',
  
  email: 'bernardomoschen.dev@gmail.com', // Your actual email
  
  name: 'Bernardo Moschen',
  title: 'Full-Stack Engineer',
  
  github: 'https://github.com/BernardoMoschen', // Update with your actual GitHub
  linkedin: 'https://linkedin.com/in/bernardomoschen', // Update with your actual LinkedIn
  
  description: 'Full-Stack engineer specializing in modern web technologies',
  keywords: ['Full-Stack engineer', 'React', 'TypeScript', 'Node.js', 'Web Development'],
  
  profileImage: '/profile-photo.jpeg',
  favicon: '/favicon.svg',
  
  securityContact: 'bernardomoschen.dev@gmail.com',
  securityExpiry: '2025-12-31T23:59:59.000Z',
} as const;

// Helper function to get the site URL, with Vercel fallback
export const getSiteUrl = () => {
  // In production, use the configured domain
  if (import.meta.env.PROD) {
    return siteConfig.url;
  }
  
  // In development or preview, use Vercel URL if available, otherwise localhost
  if (import.meta.env.VERCEL_URL) {
    return `https://${import.meta.env.VERCEL_URL}`;
  }
  
  return 'http://localhost:4321';
};

export default siteConfig;
