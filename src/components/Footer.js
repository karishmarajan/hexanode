import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box display="flex" py={2} height="35px" alignItems="center">
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        px={40}
        sx={{ color: "grey.800" }}
      >
        <Grid item>
          <Box sx={{ display: "flex" }} aria-labelledby="policy-footer">
            <Link
              href="https://www.hexnode.com/legal/terms-of-use/"
              color="inherit"
              aria-label="Terms of Use"
              sx={{
                fontSize: "12px",
                textDecoration: "none",
                "&:hover": {
                  color: "grey.800",
                },
              }}
            >
              {`Terms of Use -   `}
            </Link>
            <Link
              href="https://www.hexnode.com/legal/privacy-policy/"
              color="inherit"
              sx={{
                fontSize: "12px",
                textDecoration: "none",
                "&:hover": {
                  color: "grey.800",
                },
              }}
              aria-label="Privacy policy"
            >
              {`Privacy - `}
            </Link>
            <Link
              href="https://www.hexnode.com/legal/cookies-policy/"
              color="inherit"
              sx={{
                fontSize: "12px",
                textDecoration: "none",
                "&:hover": {
                  color: "grey.800",
                },
              }}
              aria-label="Cookies policy"
            >
              Cookies
            </Link>
          </Box>
        </Grid>
        <Grid item>
          <Typography fontSize="12px" aria-describedby="copyright-description">
            Copyright © 2024 Mitsogo Inc. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
