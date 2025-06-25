import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    TextField,
    Button,
    Stack,
    IconButton,
    Snackbar,
    Alert,
    Chip,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import {
    Email,
    LinkedIn,
    GitHub,
    Send,
    LocationOn,
} from '@mui/icons-material';
import siteConfig from '../../../config/site';

const ContactSection: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success' as 'success' | 'error',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Simulate form submission - replace with your actual form handling
            await new Promise(resolve => setTimeout(resolve, 1000));

            setSnackbar({
                open: true,
                message: 'Message sent successfully! I\'ll get back to you soon.',
                severity: 'success',
            });

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            setSnackbar({
                open: true,
                message: 'Failed to send message. Please try again.',
                severity: 'error',
            });
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: <Email />,
            label: 'Email',
            value: siteConfig.email,
            link: `mailto:${siteConfig.email}`,
        },
        // {
        //     icon: <Phone />,
        //     label: 'Phone',
        //     value: '+1 (555) 123-4567',
        //     link: 'tel:+15551234567',
        // },
        {
            icon: <LocationOn />,
            label: 'Location',
            value: 'Porto Alegre - RS, Brazil',
            link: '',
        },
    ];

    const socialLinks = [
        {
            icon: <GitHub />,
            label: 'GitHub',
            url: siteConfig.github,
        },
        {
            icon: <LinkedIn />,
            label: 'LinkedIn',
            url: siteConfig.linkedin,
        },
        // {
        //     icon: <Twitter />,
        //     label: 'Twitter',
        //     url: 'https://twitter.com/yourusername',
        // },
        {
            icon: <Email />,
            label: 'Email',
            url: `mailto:${siteConfig.email}`,
        },
    ];

    return (
        <Box
            component="section"
            id="contact"
            sx={{
                py: { xs: 8, md: 12 },
                background: theme.palette.mode === 'dark'
                    ? `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.dark}10 30%, ${theme.palette.secondary.dark}15 70%, ${theme.palette.background.default} 100%)`
                    : `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.light}06 30%, ${theme.palette.secondary.light}10 70%, ${theme.palette.background.default} 100%)`,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background decorative elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    left: '-5%',
                    width: 350,
                    height: 350,
                    borderRadius: '50%',
                    background: theme.palette.mode === 'dark'
                        ? `radial-gradient(circle, ${theme.palette.primary.dark}12 0%, transparent 70%)`
                        : `radial-gradient(circle, ${theme.palette.primary.light}08 0%, transparent 70%)`,
                    filter: 'blur(40px)',
                    animation: 'float 8s ease-in-out infinite',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '-8%',
                    width: 280,
                    height: 280,
                    borderRadius: '50%',
                    background: theme.palette.mode === 'dark'
                        ? `radial-gradient(circle, ${theme.palette.secondary.dark}12 0%, transparent 70%)`
                        : `radial-gradient(circle, ${theme.palette.secondary.light}08 0%, transparent 70%)`,
                    filter: 'blur(40px)',
                    animation: 'float 6s ease-in-out infinite reverse',
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Section badge */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <Chip
                        icon={<Email />}
                        label="LET'S CONNECT"
                        sx={{
                            backgroundColor: theme.palette.mode === 'dark'
                                ? theme.palette.primary.dark + '40'
                                : theme.palette.primary.light + '20',
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                            letterSpacing: '0.5px',
                            border: `1px solid ${theme.palette.primary.main}40`,
                        }}
                    />
                </Box>

                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        textAlign: 'center',
                        mb: 2,
                        fontSize: isMobile ? '2.5rem' : '3.5rem',
                        fontWeight: 700,
                        background: theme.palette.mode === 'dark'
                            ? `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`
                            : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: theme.palette.mode === 'dark' ? 'none' : '0 2px 4px rgba(0,0,0,0.1)',
                    }}
                >
                    Get In Touch
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        textAlign: 'center',
                        mb: 8,
                        color: theme.palette.text.secondary,
                        fontSize: '1.2rem',
                        maxWidth: 700,
                        mx: 'auto',
                        lineHeight: 1.6,
                        fontWeight: 400,
                    }}
                >
                    I'm always interested in new opportunities and exciting projects.
                    Whether you have a question or just want to say hi, feel free to reach out!
                </Typography>

                <Grid container spacing={4}>
                    {/* Contact Form */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Card
                            sx={{
                                background: theme.palette.mode === 'dark'
                                    ? `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.dark}12 50%, ${theme.palette.secondary.dark}08 100%)`
                                    : `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.light}06 50%, ${theme.palette.secondary.light}04 100%)`,
                                backdropFilter: 'blur(20px)',
                                border: theme.palette.mode === 'dark'
                                    ? `1px solid ${theme.palette.primary.main}25`
                                    : `1px solid ${theme.palette.primary.main}15`,
                                borderRadius: 3,
                                boxShadow: theme.palette.mode === 'dark'
                                    ? `0 8px 32px ${theme.palette.primary.dark}20`
                                    : `0 8px 32px ${theme.palette.primary.main}10`,
                            }}
                        >
                            <CardContent sx={{ p: 4 }}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        mb: 3,
                                        fontSize: isMobile ? '1.8rem' : '2.2rem',
                                        fontWeight: 600,
                                        color: theme.palette.primary.main,
                                    }}
                                >
                                    Send me a message
                                </Typography>

                                <Box component="form" onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid size={{ xs: 12, md: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Your Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                variant="outlined"
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: theme.palette.mode === 'dark'
                                                                ? theme.palette.primary.main + '40'
                                                                : theme.palette.primary.main + '30',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: theme.palette.primary.main,
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: theme.palette.primary.main,
                                                        },
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        color: theme.palette.text.secondary,
                                                    },
                                                    '& .MuiInputBase-input': {
                                                        color: theme.palette.text.primary,
                                                    },
                                                }}
                                            />
                                        </Grid>

                                        <Grid size={{ xs: 12, md: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Your Email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                variant="outlined"
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: theme.palette.mode === 'dark'
                                                                ? theme.palette.primary.main + '40'
                                                                : theme.palette.primary.main + '30',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: theme.palette.primary.main,
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: theme.palette.primary.main,
                                                        },
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        color: theme.palette.text.secondary,
                                                    },
                                                    '& .MuiInputBase-input': {
                                                        color: theme.palette.text.primary,
                                                    },
                                                }}
                                            />
                                        </Grid>

                                        <Grid size={{ xs: 12 }}>
                                            <TextField
                                                fullWidth
                                                label="Subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                required
                                                variant="outlined"
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: theme.palette.mode === 'dark'
                                                                ? theme.palette.primary.main + '40'
                                                                : theme.palette.primary.main + '30',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: theme.palette.primary.main,
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: theme.palette.primary.main,
                                                        },
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        color: theme.palette.text.secondary,
                                                    },
                                                    '& .MuiInputBase-input': {
                                                        color: theme.palette.text.primary,
                                                    },
                                                }}
                                            />
                                        </Grid>

                                        <Grid size={{ xs: 12 }}>
                                            <TextField
                                                fullWidth
                                                label="Your Message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                multiline
                                                rows={6}
                                                variant="outlined"
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: theme.palette.mode === 'dark'
                                                                ? theme.palette.primary.main + '40'
                                                                : theme.palette.primary.main + '30',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: theme.palette.primary.main,
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: theme.palette.primary.main,
                                                        },
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        color: theme.palette.text.secondary,
                                                    },
                                                    '& .MuiInputBase-input': {
                                                        color: theme.palette.text.primary,
                                                    },
                                                }}
                                            />
                                        </Grid>

                                        <Grid size={{ xs: 12 }}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="large"
                                                disabled={loading}
                                                startIcon={<Send />}
                                                sx={{
                                                    backgroundColor: theme.palette.primary.main,
                                                    color: theme.palette.primary.contrastText,
                                                    fontWeight: 600,
                                                    py: 1.5,
                                                    px: 4,
                                                    borderRadius: 2,
                                                    '&:hover': {
                                                        backgroundColor: theme.palette.primary.dark,
                                                        transform: 'translateY(-2px)',
                                                    },
                                                    '&:disabled': {
                                                        backgroundColor: theme.palette.action.disabledBackground,
                                                        color: theme.palette.action.disabled,
                                                    },
                                                }}
                                            >
                                                {loading ? 'Sending...' : 'Send Message'}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Contact Info */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Stack spacing={3}>
                            {/* Contact Information */}
                            <Card
                                sx={{
                                    background: theme.palette.mode === 'dark'
                                        ? `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.dark}08 100%)`
                                        : `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.light}05 100%)`,
                                    border: theme.palette.mode === 'dark'
                                        ? `1px solid ${theme.palette.primary.main}20`
                                        : `1px solid ${theme.palette.primary.main}15`,
                                    borderRadius: 2,
                                }}
                            >
                                <CardContent sx={{ p: 3 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            mb: 3,
                                            fontWeight: 600,
                                            color: 'primary.main',
                                        }}
                                    >
                                        Contact Information
                                    </Typography>

                                    <Stack spacing={2}>
                                        {contactInfo.map((info, index) => (
                                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        width: 40,
                                                        height: 40,
                                                        borderRadius: '50%',
                                                        backgroundColor: 'primary.main',
                                                        color: 'white',
                                                    }}
                                                >
                                                    {info.icon}
                                                </Box>
                                                <Box>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{ color: 'text.secondary', fontSize: '0.875rem' }}
                                                    >
                                                        {info.label}
                                                    </Typography>
                                                    {info.link ? (
                                                        <Typography
                                                            component="a"
                                                            href={info.link}
                                                            variant="body1"
                                                            sx={{
                                                                color: 'text.primary',
                                                                textDecoration: 'none',
                                                                '&:hover': {
                                                                    color: 'primary.main',
                                                                },
                                                            }}
                                                        >
                                                            {info.value}
                                                        </Typography>
                                                    ) : (
                                                        <Typography variant="body1" sx={{ color: 'text.primary' }}>
                                                            {info.value}
                                                        </Typography>
                                                    )}
                                                </Box>
                                            </Box>
                                        ))}
                                    </Stack>
                                </CardContent>
                            </Card>

                            {/* Social Links */}
                            <Card
                                sx={{
                                    background: theme.palette.mode === 'dark'
                                        ? `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.secondary.dark}08 100%)`
                                        : `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.secondary.light}05 100%)`,
                                    border: theme.palette.mode === 'dark'
                                        ? `1px solid ${theme.palette.secondary.main}20`
                                        : `1px solid ${theme.palette.secondary.main}15`,
                                    borderRadius: 2,
                                }}
                            >
                                <CardContent sx={{ p: 3 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            mb: 3,
                                            fontWeight: 600,
                                            color: theme.palette.secondary.main,
                                        }}
                                    >
                                        Let's Connect
                                    </Typography>

                                    <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
                                        {socialLinks.map((social, index) => (
                                            <IconButton
                                                key={index}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{
                                                    width: 50,
                                                    height: 50,
                                                    backgroundColor: theme.palette.mode === 'dark'
                                                        ? theme.palette.secondary.dark + '20'
                                                        : theme.palette.secondary.light + '20',
                                                    color: theme.palette.secondary.main,
                                                    border: `1px solid ${theme.palette.secondary.main}40`,
                                                    '&:hover': {
                                                        backgroundColor: theme.palette.secondary.main,
                                                        color: theme.palette.secondary.contrastText,
                                                        transform: 'translateY(-2px)',
                                                        boxShadow: `0 4px 12px ${theme.palette.secondary.main}40`,
                                                    },
                                                }}
                                            >
                                                {social.icon}
                                            </IconButton>
                                        ))}
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

            {/* Snackbar for form feedback */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
                    severity={snackbar.severity}
                    variant="filled"
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ContactSection;
