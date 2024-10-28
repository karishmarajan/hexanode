import React from "react";
import { Box, Typography, Container, Grid, styled, Link } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import device from "../assets/device.png";
import { CustomHeading } from "../common/CustomHeading";

const ItemHeading = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
});
const ItemDetails = styled(Typography)({
  fontSize: "18px",
  color: "gray",
  marginBottom: "16px",
});

const KioskFeatures = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: 4 }}>
      <Grid container spacing={6} alignItems="center">
        <CustomHeading>
          What additional possibilities does the Kiosk mode offer?
        </CustomHeading>
        <Grid item xs={12} md={6}>
          <Box sx={{ position: "relative" }} aria-labelledby="kiosk-mode-section">
            <img
              src={device}
              alt="Kiosk Interface"
              style={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "white",
                borderRadius: "8px",
                paddingX: 2,
                paddingY: 1,
                boxShadow: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <CheckCircleOutline sx={{ color: "green", marginRight: 1 }} />
              <Typography variant="subtitle2">Zero touch kiosk</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} justifyContent="flex-start">
          <ItemHeading mb={3}>
            Effortless kiosk deployment & management
          </ItemHeading>
          <ItemDetails>
            Deploy kiosk-enabled devices straight out of the box. Flash a custom
            Android Enterprise, Samsung Knox or ROM with Hexnode App on the
            devices by collaborating with OEM vendors who provide specially
            configured ROMs.
          </ItemDetails>
          <Link
            href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
            color="error"
            aria-label="SignUp"
            sx={{
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            TRY FOR FREE {">"}
          </Link>
          <ItemHeading mb={6} aria-describedby="brand-visibility-description">Customized interface for brand visibility</ItemHeading>
          <ItemHeading mb={6} aria-describedby="more-features">What more can you do with Hexnode kiosk?</ItemHeading>
          <ItemHeading mb={6} aria-describedby="security-description">Secure and update your app ecosystem</ItemHeading>
          <ItemHeading mb={6} aria-describedby="end-user-benefits">Provide an easy-to-use interface for end-users</ItemHeading>
        </Grid>
      </Grid>
    </Container>
  );
};

export default KioskFeatures;
