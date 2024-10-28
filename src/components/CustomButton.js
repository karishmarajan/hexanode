import { Button } from "@mui/material"
import React from "react"

export const CustomButton = ({ text, variant, disabled, size, color, bgColor }) => (
<Button
  onClick={onclick}
  variant={variant}
  disabled={disabled}
  color="error" 
  size= {size || "large"}
  sx={{ backgroundColor: bgColor, '&:hover': { backgroundColor: '#C41747' } }}
  >
    {text}
</Button>
)