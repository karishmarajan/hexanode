import React from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const PartnerLogo = styled('img')({
  height: '40px',
  filter: 'brightness(0) invert(1)',
  opacity: 0.7,
});

const Partners = () => {
  return (
      <Box sx={{ bgcolor: '#1A1332', py: 4, mb: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="space-between" alignItems="center">
            <Grid item xs={12} md={4}>
              <Card sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
                <CardContent>
                  <PartnerLogo src="/path-to-idc-logo.png" alt="IDC" />
                  <Typography variant="body2" sx={{ color: '#9B97A3', mt: 2 }}>
                    Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
                <CardContent>
                  <PartnerLogo src="/path-to-gartner-logo.png" alt="Gartner" />
                  <Typography variant="body2" sx={{ color: '#9B97A3', mt: 2 }}>
                    Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
                <CardContent>
                  <PartnerLogo src="/path-to-forrester-logo.png" alt="Forrester" />
                  <Typography variant="body2" sx={{ color: '#9B97A3', mt: 2 }}>
                    Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
  );
};
export default Partners;