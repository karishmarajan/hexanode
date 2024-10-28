import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import costco from '../assets/logos/costco.png'
import hilton from '../assets/logos/hilton.png'
import merck from '../assets/logos/merck.png'
import group1Automative from '../assets/logos/group1Automative.png'
import marriott from '../assets/logos/marriott.png'
import wolt from '../assets/logos/wolt.png'
import saic from '../assets/logos/saic.png'
import polaris from '../assets/logos/polaris.png'
import lowes from '../assets/logos/lowes.png'

const SliderContainer = styled(Box)({
  height: '30vh',
  width: '900px',
  overflow: 'hidden',
  marginLeft: '20px',
  marginRight: '20px',
});

const SliderTrack = styled(Box)(({ transform }) => ({
  display: 'flex',
  transition: 'transform 1000ms linear',
  transform: `translateX(${transform}px)`,
}));

const LogoBox = styled(Box)({
  width: '300px',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '32px',
});

const LogoImage = styled('img')({
  maxWidth: '100%',
  maxHeight: '100%',
  minWidth: '120px',
  minHeight: '120px',
  objectFit: 'contain',
});

const LogoSlider = () => {
  const [position, setPosition] = useState(0);
  
  const logos = [
    { id: 1, src: {group1Automative}, alt: "Group 1 Automotive" },
    { id: 2, src: {marriott}, alt: "Marriott" },
    { id: 3, src: {merck}, alt: "Merck" },
    { id: 4, src: {costco}, alt: "Costco" },
    { id: 5, src: {wolt}, alt: "Wolt" },
    { id: 6, src: {saic}, alt: "Saic" },
    { id: 7, src: {polaris}, alt: "Polaris" },
    { id: 8, src: {lowes}, alt: "Lowes" },
    { id: 9, src: {hilton}, alt: "Hilton" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev <= -(logos.length - 7) * 100) {
          return 0;
        }
        return prev - 100;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: '#f7f7f7' }} >
      <SliderContainer>
        <SliderTrack transform={position}>
          {logos.map((logo) => (
            <LogoBox key={logo.id}>
              <LogoImage
                src={Object.values(logo.src)[0]}
                alt={logo.alt}
                loading="lazy"
              />
            </LogoBox>
          ))}
        </SliderTrack>
      </SliderContainer>
    </Box>
  );
};

export default LogoSlider;