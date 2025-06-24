import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Define theme colors for both modes
const getTheme = (mode: 'light' | 'dark') => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'dark' ? '#7fb069' : '#4a6741', // Moss green - brighter for dark mode
      light: mode === 'dark' ? '#a8d084' : '#7fb069',
      dark: mode === 'dark' ? '#5a8049' : '#2d3e26',
    },
    secondary: {
      main: mode === 'dark' ? '#ff8a50' : '#e76f51', // Fire orange - brighter for dark mode
      light: mode === 'dark' ? '#ffaa7a' : '#ff8a50',
      dark: mode === 'dark' ? '#cc5722' : '#b85439',
    },
    background: {
      default: mode === 'dark' ? '#0d1117' : '#f8f6f0', // Dark navy vs warm off-white
      paper: mode === 'dark' ? '#161b22' : '#ffffff', // Slightly lighter dark vs pure white
    },
    text: {
      primary: mode === 'dark' ? '#f0f6fc' : '#1a1a1a', // Bright white vs dark charcoal
      secondary: mode === 'dark' ? '#8b949e' : '#6a6a6a', // Light gray vs medium gray
    },
    // Custom colors for better theming
    info: {
      main: mode === 'dark' ? '#6cb6ff' : '#0969da', // Bright blue for dark mode
      light: mode === 'dark' ? '#94ccff' : '#54aeff',
      dark: mode === 'dark' ? '#4493f8' : '#0550ae',
    },
    success: {
      main: mode === 'dark' ? '#3fb950' : '#1a7f37', // Bright green for dark mode
      light: mode === 'dark' ? '#7ee787' : '#4ac26b',
      dark: mode === 'dark' ? '#2ea043' : '#116329',
    },
    warning: {
      main: mode === 'dark' ? '#d29922' : '#bf8700', // Bright amber for dark mode
      light: mode === 'dark' ? '#e2cc67' : '#d4a72c',
      dark: mode === 'dark' ? '#bb7506' : '#9a6700',
    },
    error: {
      main: mode === 'dark' ? '#f85149' : '#cf222e', // Bright red for dark mode
      light: mode === 'dark' ? '#ff7b72' : '#ff6b6b',
      dark: mode === 'dark' ? '#da3633' : '#a40e26',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 28px',
          fontSize: '0.95rem',
          boxShadow: mode === 'dark'
            ? '0 4px 14px rgba(127, 176, 105, 0.25)'
            : '0 4px 14px rgba(74, 103, 65, 0.25)',
          '&:hover': {
            boxShadow: mode === 'dark'
              ? '0 6px 20px rgba(127, 176, 105, 0.35)'
              : '0 6px 20px rgba(74, 103, 65, 0.35)',
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          background: mode === 'dark'
            ? 'linear-gradient(45deg, #7fb069 30%, #ff8a50 90%)'
            : 'linear-gradient(45deg, #4a6741 30%, #e76f51 90%)',
          '&:hover': {
            background: mode === 'dark'
              ? 'linear-gradient(45deg, #a8d084 30%, #ffaa7a 90%)'
              : 'linear-gradient(45deg, #5a8049 30%, #ff8a50 90%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backdropFilter: 'blur(10px)',
          border: mode === 'dark'
            ? '1px solid rgba(127, 176, 105, 0.2)'
            : '1px solid rgba(74, 103, 65, 0.2)',
          boxShadow: mode === 'dark'
            ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(127, 176, 105, 0.1)'
            : '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(74, 103, 65, 0.1)',
          background: mode === 'dark'
            ? 'linear-gradient(135deg, rgba(22, 27, 34, 0.8) 0%, rgba(127, 176, 105, 0.05) 100%)'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(74, 103, 65, 0.03) 100%)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
        filled: {
          background: mode === 'dark'
            ? 'linear-gradient(45deg, rgba(127, 176, 105, 0.2) 0%, rgba(255, 138, 80, 0.2) 100%)'
            : 'linear-gradient(45deg, rgba(74, 103, 65, 0.1) 0%, rgba(231, 111, 81, 0.1) 100%)',
          border: mode === 'dark'
            ? '1px solid rgba(127, 176, 105, 0.3)'
            : '1px solid rgba(74, 103, 65, 0.3)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'transparent',
          boxShadow: 'none',
        },
      },
    },
  },
});

interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeContextProvider');
  }
  return context;
};

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  // Load theme preference from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('themeMode');
      if (savedTheme) {
        setDarkMode(savedTheme === 'dark');
      } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDark);
      }
    }
  }, []);

  // Save theme preference to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('themeMode', darkMode ? 'dark' : 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const theme = getTheme(darkMode ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
