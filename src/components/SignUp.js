import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  styled,
} from "@mui/material";

const StyledTextField = styled(TextField)({
  maxWidth: "300px",
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

const SignUp = () => {
  return (
    <Box
      sx={{
        py: 8,
        textAlign: "center",
      }}
      bgcolor="#03071A"
    >
      <Typography
        fontSize="42px"
        sx={{ mb: 4, fontWeight: "bold", color: "white" }}
        color="white"
      >
        Sign up and try Hexnode free for 14 days!
      </Typography>

      <Box
        display="flex"
        textAlign="center"
        justifyContent="center"
        mb={2}
        gap={1}
      >
        <StyledTextField
          placeholder="Your Work Email"
          fullWidth
          variant="outlined"
        />
        <StyledButton variant="contained">GET STARTED</StyledButton>
      </Box>
      <Typography variant="body2" sx={{ color: "grey.400" }}>
        No credit cards required.{" "}
        <Link
          href="https://www.hexnode.com/mobile-device-management/request-demo/"
          color="error"
          sx={{
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Request a demo {">"}
        </Link>
      </Typography>
    </Box>
  );
};

export default SignUp;
