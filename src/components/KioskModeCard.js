import { CheckCircleOutline } from "@mui/icons-material";
import { Box, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react"
const KioskModeCard = ({ data }) => {
    return (
        <Card sx={{ bgcolor: 'grey.50' }}>
        <CardContent sx={{ display: 'flex', gap: 4, p: 4 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
              {data.title}
            </Typography>
            
            <List>
              {data.features.map((feature, index) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircleOutline color="success" />
                  </ListItemIcon>
                  <ListItemText primary={feature} />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <img
              src={Object.values(data.image)[0]}
              alt="Kiosk Device"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px'
              }}
            />
          </Box>
        </CardContent>
      </Card>
    )
}
export default KioskModeCard;