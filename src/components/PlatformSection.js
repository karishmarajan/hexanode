import React from 'react';
import { 
  Box, 
  Grid, 
  Paper,
  styled
} from '@mui/material';
import apk from '../assets/icons/apk.png'
import appleTV from '../assets/icons/appleTV.png'
import androidTV from '../assets/icons/androidTV.png'
import fire from '../assets/icons/fire.png'
import ios from '../assets/icons/ios.png'
import windows from '../assets/icons/windows.png'
import { CustomHeading } from '../common/CustomHeading';

const PlatformCard = styled(Paper)(({ theme }) => ({
  width: 150,
  height: 80,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: theme.shadows[4],
    transform: 'translateY(-4px)',
  },
}));

const platformData = [
  { id: 'android', icon: apk, name: 'Android' },
  { id: 'windows', icon: windows, name: 'Windows' },
  { id: 'ios', icon: ios, name: 'iOS' },
  { id: 'androidtv', icon: androidTV, name: 'Android TV' },
  { id: 'appletv', icon: appleTV, name: 'Apple TV' },
  { id: 'fire', icon: fire, name: 'Fire' },
];

const PlatformSection = () => {
  return (
        <Box sx={{ py: 8, textAlign: 'center' }} aria-labelledby="supported-platforms">
          <CustomHeading>Platforms supported</CustomHeading>
          <Grid 
            container 
            spacing={4} 
            justifyContent="center" 
            sx={{ mb: 8 }}
          >
            {platformData.map((platform) => (
              <Grid item key={platform.id}>
                <PlatformCard elevation={1}>
                    <img src={platform.icon} alt={platform.name} height="80px" width="80px"/>
                </PlatformCard>
              </Grid>
            ))}
          </Grid>
        </Box>
  );
};
export default PlatformSection;