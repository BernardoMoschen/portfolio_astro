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
    useTheme,
    useMediaQuery,
} from '@mui/material';
import {
    Email,
    LinkedIn,
    GitHub,
    Twitter,
    Send,
    LocationOn,
    Phone,
} from '@mui/icons-material';

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
            value: 'bernardo.moschen@example.com',
            link: 'mailto:bernardo.moschen@example.com',
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
            url: 'https://github.com/bernardoMoschen',
        },
        {
            icon: <LinkedIn />,
            label: 'LinkedIn',
            url: 'https://linkedin.com/in/bernardomoschen',
        },
        // {
        //     icon: <Twitter />,
        //     label: 'Twitter',
        //     url: 'https://twitter.com/yourusername',
        // },
        {
            icon: <Email />,
            label: 'Email',
            url: 'mailto:bernardomoschen.dev@gmail.com',
        },
    ];

    return (
        <Box
            component="section"
            id="contact"
            sx={{
                py: 8,
                backgroundColor: 'background.default',
                position: 'relative',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        textAlign: 'center',
                        mb: 2,
                        fontSize: isMobile ? '2rem' : '2.5rem',
                        fontWeight: 600,
                    }}
                >
                    Get In Touch
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        textAlign: 'center',
                        mb: 6,
                        color: 'text.secondary',
                        fontSize: '1.1rem',
                        maxWidth: 600,
                        mx: 'auto',
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
                                background: 'linear-gradient(135deg, rgba(63, 81, 181, 0.1) 0%, rgba(245, 0, 87, 0.05) 100%)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            <CardContent sx={{ p: 4 }}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        mb: 3,
                                        fontSize: isMobile ? '1.5rem' : '2rem',
                                        fontWeight: 600,
                                        color: 'primary.main',
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
                                                            borderColor: 'rgba(255, 255, 255, 0.3)',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: 'primary.main',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'primary.main',
                                                        },
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        color: 'text.secondary',
                                                    },
                                                    '& .MuiInputBase-input': {
                                                        color: 'text.primary',
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
                                                            borderColor: 'rgba(255, 255, 255, 0.3)',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: 'primary.main',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'primary.main',
                                                        },
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        color: 'text.secondary',
                                                    },
                                                    '& .MuiInputBase-input': {
                                                        color: 'text.primary',
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
                                                            borderColor: 'rgba(255, 255, 255, 0.3)',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: 'primary.main',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'primary.main',
                                                        },
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        color: 'text.secondary',
                                                    },
                                                    '& .MuiInputBase-input': {
                                                        color: 'text.primary',
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
                                                            borderColor: 'rgba(255, 255, 255, 0.3)',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: 'primary.main',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'primary.main',
                                                        },
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        color: 'text.secondary',
                                                    },
                                                    '& .MuiInputBase-input': {
                                                        color: 'text.primary',
                                                    },
                                                }}
                                            />
                                        </Grid>

                                        <Grid size={{ xs: 12 }} >
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="large"
                                                startIcon={<Send />}
                                                disabled={loading}
                                                sx={{
                                                    background: 'linear-gradient(45deg, #3f51b5 30%, #f50057 90%)',
                                                    '&:hover': {
                                                        background: 'linear-gradient(45deg, #2c387e 30%, #c51162 90%)',
                                                    },
                                                    px: 4,
                                                    py: 1.5,
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
                                    backgroundColor: 'background.paper',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
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
                                    backgroundColor: 'background.paper',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
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
                                        Follow Me
                                    </Typography>

                                    <Stack direction="row" spacing={1}>
                                        {socialLinks.map((social, index) => (
                                            <IconButton
                                                key={index}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{
                                                    backgroundColor: 'rgba(63, 81, 181, 0.1)',
                                                    color: 'primary.main',
                                                    '&:hover': {
                                                        backgroundColor: 'primary.main',
                                                        color: 'white',
                                                    },
                                                    transition: 'all 0.3s ease',
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
