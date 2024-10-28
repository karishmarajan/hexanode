import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Container,
  styled,
  useTheme,
} from "@mui/material";
import chrisRobinson from "../assets/chrisRobinson.png";
import daliborKruljac from "../assets/daliborKruljac.png";
import justinModrak from "../assets/justinModrak.png";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { CustomHeading } from "../common/CustomHeading";

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "white",
  boxShadow: theme.shadows[2],
  "&:hover": {
    backgroundColor: theme.palette.grey[100],
  },
  "&.Mui-disabled": {
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
      name: "Justin Modark",
      company: "East Troy Community School District",
      quote: "Hexnode is of great value. Works great with Android and iOS!",
      image: { justinModrak },
    },
    {
      id: 2,
      name: "Dalibor Kruljac",
      company: "KAMELEYA LTD",
      quote:
        "Most complete MDM solution I found, and I tested many of them, including major names",
      image: { daliborKruljac },
    },
    {
      id: 3,
      name: "Chris Robinson",
      company: "Executive Account Manager, NCS",
      quote: "It seemed to be in-line with everything we were looking at.",
      image: { chrisRobinson },
    },
  ];

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <Box bgcolor="#f7f7f7">
      <Container sx={{ py: 2, width: "100%" }}>
        <CustomHeading>Why should you choose Hexnode?</CustomHeading>
        <Box sx={{ position: "relative" }}>
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
              display: "flex",
              maxWidth: 900,
              mx: "auto",
              minHeight: 400,
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                gap: 4,
                p: 4,
                "&:last-child": {
                  paddingBottom: 4,
                },
              }}
            >
              <Box
                sx={{
                  width: 288,
                  height: 288,
                  flexShrink: 0,
                  borderRadius: 2,
                  overflow: "hidden",
                  bgcolor: theme.palette.grey[100],
                }}
              >
                <Box
                  component="img"
                  src={Object.values(testimonials[currentIndex].image)[0]}
                  alt={testimonials[currentIndex].name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h6"
                  component="blockquote"
                  sx={{
                    mb: 3,
                    fontStyle: "italic",
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: -20,
                      top: 0,
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      right: -20,
                      top: 0,
                    },
                  }}
                  aria-describedby={testimonials[currentIndex].quote}
                >
                  <span>“{testimonials[currentIndex].quote}”</span>
                </Typography>
                <Box>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    sx={{
                      fontWeight: 600,
                      mb: 0.5,
                    }}
                    aria-describedby={testimonials[currentIndex].name}
                  >
                    {testimonials[currentIndex].name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" aria-describedby={testimonials[currentIndex].company}>
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
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialSlider;
