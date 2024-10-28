import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  Link, 
  Paper,
  styled
} from '@mui/material';
import { Android, Apple, LocalFireDepartment, Tv, WindowSharp } from '@mui/icons-material';

// Styled components
const GradientBackground = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #FFFFFF 0%, #121212 100%)',
  minHeight: '100vh',
}));

const PlatformCard = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 80,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: theme.shadows[4],
    transform: 'translateY(-2px)',
  },
}));

const StyledIcon = styled(Box)(({ theme }) => ({
  '& svg': {
    fontSize: 32,
    color: theme.palette.grey[700],
  },
}));

const platformData = [
  { id: 'android', icon: <Android />, name: 'Android' },
  { id: 'windows', icon: <WindowSharp />, name: 'Windows' },
  { id: 'ios', icon: <Apple />, name: 'iOS' },
  { id: 'androidtv', icon: <Tv />, name: 'Android TV' },
  { id: 'appletv', icon: <Apple />, name: 'Apple TV' },
  { id: 'fire', icon: <LocalFireDepartment />, name: 'Fire' },
];

const PlatformSection = () => {
  return (
    <GradientBackground>
      <Container maxWidth="lg">
        {/* Platforms Section */}
        <Box sx={{ py: 8, textAlign: 'center' }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ mb: 6, fontWeight: 'bold' }}
          >
            Platforms supported
          </Typography>
          
          <Grid 
            container 
            spacing={4} 
            justifyContent="center" 
            sx={{ mb: 8 }}
          >
            {platformData.map((platform) => (
              <Grid item key={platform.id}>
                <PlatformCard elevation={1}>
                  <StyledIcon>
                    {platform.icon}
                  </StyledIcon>
                </PlatformCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Signup Section */}
        <Box sx={{ 
          py: 8, 
          textAlign: 'center',
          color: 'white',
        }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{ mb: 4, fontWeight: 'bold' }}
          >
            Sign up and try Hexnode free for 14 days!
          </Typography>

          <Box sx={{ 
            maxWidth: 600, 
            mx: 'auto',
            px: 2,
          }}>
            <Box sx={{ 
              display: 'flex', 
              gap: 1,
              mb: 2,
            }}>
              <TextField
                fullWidth
                placeholder="Your Work Email"
                variant="outlined"
                sx={{
                  bgcolor: 'white',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'transparent',
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                color="error"
                size="large"
                sx={{
                  px: 4,
                  whiteSpace: 'nowrap',
                }}
              >
                GET STARTED
              </Button>
            </Box>

            <Typography variant="body2" sx={{ color: 'grey.400' }}>
              No credit cards required.{' '}
              <Link 
                href="#" 
                color="error"
                sx={{ 
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Request a demo {'>'}
              </Link>
            </Typography>
          </Box>
        </Box>

        {/* Footer */}
        <Box sx={{ 
          py: 2,
          mt: 8,
          borderTop: '1px solid',
          borderColor: 'grey.800',
        }}>
          <Grid 
            container 
            justifyContent="space-between" 
            alignItems="center"
            sx={{ color: 'grey.500' }}
          >
            <Grid item>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Link 
                  href="#" 
                  color="inherit"
                  sx={{ 
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Terms of Use
                </Link>
                <Link 
                  href="#" 
                  color="inherit"
                  sx={{ 
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Privacy
                </Link>
                <Link 
                  href="#" 
                  color="inherit"
                  sx={{ 
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Cookies
                </Link>
              </Box>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Copyright © 2024 Mitsogo Inc. All Rights Reserved.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </GradientBackground>
  );
};

export default PlatformSection;