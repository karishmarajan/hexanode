import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Drawer,
  Divider,
  useScrollTrigger,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { CustomButton } from "../components/CustomButton";
import hexnodeKiosk from "../assets/hexnodeKiosk.png";
import Partners from "../components/Partners";
import KioskModesPage from "../components/KioskModesPage";
import KioskFeatures from "../components/KioskFeatures";
import TestimonialSlider from "../components/TestimonialSlider";
import LogoSlider from "../components/LogoSlider";
import PlatformSection from "../components/PlatformSection";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";

const StyledHero = styled(Box)(({ theme }) => ({
  background: "#03071A",
  minHeight: "65vh",
  color: "white",
  position: "relative",
  padding: `${theme.spacing(18)} ${theme.spacing(0)} ${theme.spacing(0)} ${theme.spacing(0)}`,
}));

const StyledTextField = styled(TextField)({
  maxWidth: '300px',
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    borderRadius: "4px",
    "& fieldset": {
      borderColor: "transparent",
    },
  },
});

const StyledButton = styled(Button)({
  backgroundColor: "#d32f2f",
  color: "white",
  padding: "8px 24px",
  "&:hover": {
    backgroundColor: "#C41747",
  },
});

const DeviceImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
  position: "relative",
  top: "20px",
});
const drawerWidth = 240;
function ChangeOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    sx: {
      backgroundColor: trigger ? "#ffff" : "#0a061e", // Change color based on scroll
      transition: "background-color 0.3s ease", // Smooth transition
    },
  });
}

const LandingPage = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }} aria-labelledby="header">
      <Typography variant="h6" sx={{ my: 2 }} aria-describedby="hexnode">
        hexnode
      </Typography>
      <Typography variant="h6" sx={{ my: 2 }} aria-describedby="Login">
        Login
      </Typography>
      <Divider />
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Box>
      <AppBar elevation={0} component="nav">
        <ChangeOnScroll {...props}>
          <Toolbar sx={{ display: 'flex', px: '20px'}}>
            <Typography
              variant="h6"
              component="div"
              color={trigger ? "black.main" : "#ffff"}
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
              }}
            >
              hexnode
            </Typography>
            <Button
              variant="contained"
              color="error"
              sx={{
                backgroundColor: "#d32f2f",
                "&:hover": { backgroundColor: "#C41747" },
              }}
            >
              14 DAY FREE TRIAL
            </Button>
          </Toolbar>
        </ChangeOnScroll>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                fontSize="42px"
                sx={{ mb: 3, fontWeight: "bold" }}
              >
                Turn your devices into kiosks in a few minutes with Hexnode UEM
              </Typography>
              <Box display="flex" textAlign="center" justifyContent="center" mb={2} gap={1}>
                <StyledTextField
                  placeholder="Your Work Email"
                  fullWidth
                  variant="outlined"
                />
                <StyledButton variant="contained">
                  GET STARTED NOW!
                </StyledButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <DeviceImage src={hexnodeKiosk} alt="Hexnode Devices" />
            </Grid>
          </Grid>
        </Container>
      </StyledHero>

      <Partners />
      <KioskModesPage />
      <KioskFeatures />
      <TestimonialSlider />
      <LogoSlider />
      <PlatformSection />
      <SignUp />
      <Footer />
    </Box>
  );
};

export default LandingPage;
