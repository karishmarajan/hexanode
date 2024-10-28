import React from "react";
import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Grid,
} from "@mui/material";
import {
  CheckCircleOutline,
  Security,
  Update,
  TouchApp,
  Palette,
} from "@mui/icons-material";
import device from "../assets/device.png";

const KioskFeatures = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: 4 }}>
      <Grid container spacing={6} alignItems="center">
        <Typography
          variant="h4"
          sx={{ marginBottom: 2, fontWeight: "bold", textAlign: "center" }}
        >
          What additional possibilities does the Kiosk mode offer?
        </Typography>
        <Grid item xs={12} md={6}>
          <Box sx={{ position: "relative" }}>
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

        <Grid item xs={12} md={6}>
          <List>
            <ListItem>
              <ListItemIcon>
                <TouchApp color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Effortless kiosk deployment & management"
                secondary="Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs."
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Palette color="primary" />
              </ListItemIcon>
              <ListItemText primary="Customized interface for brand visibility" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Update color="primary" />
              </ListItemIcon>
              <ListItemText primary="Secure and update your app ecosystem" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Security color="primary" />
              </ListItemIcon>
              <ListItemText primary="Provide an easy-to-use interface for end-users" />
            </ListItem>
          </List>

          <Box sx={{ marginTop: 3 }}>
            <Button
              variant="contained"
              color="error"
              href="#"
              sx={{ fontWeight: "medium" }}
            >
              TRY FOR FREE
            </Button>
          </Box>

          <Typography
            variant="h5"
            sx={{ marginTop: 2, marginBottom: 2, fontWeight: "bold" }}
          >
            What more can you do with Hexnode kiosk?
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default KioskFeatures;
