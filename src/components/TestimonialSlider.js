import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  IconButton,
  Container,
  styled,
  useTheme, 
  Stack
} from '@mui/material';
import chrisRobinson from "../assets/chrisRobinson.png";
import daliborKruljac from "../assets/daliborKruljac.png";
import justinModrak from "../assets/justinModrak.png";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const NavigationButton = styled(IconButton)(({ theme }) => ({
  // position: 'absolute',
  top: '50%',
  // transform: 'translateY(-50%)',
  backgroundColor: 'white',
  boxShadow: theme.shadows[2],
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
  '&.Mui-disabled': {
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.grey[400],
  },
}));


const TestimonialSlider = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dalibor Kruljac",
      company: "KAMELEYA LTD",
      quote: "Most complete MDM solution I found, and I tested many of them, including major names",
      image: {justinModrak}
    },
    {
      id: 2,
      name: "Sarah Johnson",
      company: "Tech Solutions Inc",
      quote: "Hexnode has transformed how we manage our device fleet. The support is exceptional.",
      image: {daliborKruljac}
    },
    {
      id: 3,
      name: "Michael Chen",
      company: "Global Systems Ltd",
      quote: "The most user-friendly MDM platform with powerful features for enterprise needs.",
      image: {chrisRobinson}
    }
  ];

  const handleNext = () => {
    console.log('currentIndex', currentIndex)
    console.log('testimonials', testimonials.length)
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <Box bgcolor='#f7f7f7' py={8}>
    {/* <Container sx={{ py: 8, width: '100%' }} > */}
      <Typography 
        variant="h3" 
        component="h1" 
        align="center" 
        sx={{ 
          mb: 6,
          fontWeight: 'bold'
        }}
      >
        Why should you choose Hexnode?
      </Typography>

<Stack direction="column">


      {/* <Box sx={{ position: 'relative' }}> */}
        <NavigationButton 
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          sx={{ left: -20 }}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </NavigationButton>

          <Card 
            elevation={3}
            sx={{
              display: 'flex',
              maxWidth: 900,
              mx: 'auto',
              minHeight: 400, // Prevent layout shift
            }}
          >
            <CardContent 
              sx={{
                display: 'flex',
                gap: 4,
                p: 4,
                '&:last-child': { 
                  paddingBottom: 4 
                }
              }}
            >
              <Box
                sx={{
                  width: 288,
                  height: 288,
                  flexShrink: 0,
                  borderRadius: 2,
                  overflow: 'hidden',
                  bgcolor: theme.palette.grey[100]
                }}
              >
                <Box
                  component="img"
                  src={Object.values(testimonials[currentIndex].image)[0]}
                  alt={testimonials[currentIndex].name}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Box>

              <Box sx={{ 
                flex: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center' 
              }}>
                <Typography 
                  variant="h6" 
                  component="blockquote"
                  sx={{ 
                    mb: 3,
                    fontStyle: 'italic',
                    '&::before': {
                      content: '"""',
                    },
                    '&::after': {
                      content: '"""',
                    }
                  }}
                >
                  {testimonials[currentIndex].quote}
                </Typography>
                
                <Box>
                  <Typography 
                    variant="subtitle1" 
                    component="p"
                    sx={{ 
                      fontWeight: 600,
                      mb: 0.5
                    }}
                  >
                    {testimonials[currentIndex].name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                  >
                    {testimonials[currentIndex].company}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>

        <NavigationButton 
          onClick={handleNext}
          disabled={currentIndex === testimonials.length - 1}
          sx={{ right: -20 }}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </NavigationButton>
      {/* </Box> */}
      </Stack>
    {/* </Container> */}
    </Box>
  );
};

export default TestimonialSlider;