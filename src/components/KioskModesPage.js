import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import asamKiosk from "../assets/asamKiosk.png";
import digitalSignageKiosk from "../assets/digitalSignageKiosk.png";
import multiAppKiosk from "../assets/multiAppKiosk.png";
import singleAppKiosk from "../assets/singleAppKiosk.png";
import webBasedKiosk from "../assets/webBasedKiosk.png";
import KioskModeCard from "./KioskModeCard";
import { CustomHeading } from "../common/CustomHeading";

const KioskModesPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const Data = [
    {
      tab: "Single App Kiosk",
      title: "Powerful Single-App Kiosk solutions for enhanced control",
      features: [
        "Provision the devices to run one specialized application, with limited functionalities.",
        "Customize the device settings to cater to a specific use-case each time.",
        "Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
        "Empower your administrators with full control over the kiosk devices.",
      ],
      image: { singleAppKiosk },
    },
    {
      tab: "Multi-App Kiosk",
      title: "Elevate efficiency with Multi-App Kiosk",
      features: [
        "Limit device access to approved apps, ensuring focus and productivity.",
        "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
        "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
        "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.",
      ],
      image: { multiAppKiosk },
    },
    {
      tab: "Web-based Kiosk",
      title: "Explore the new way to manage web apps and websites",
      features: [
        "Let users access essential and approved web apps, website and files only.",
        "Make the best use of website kiosk with Hexnode's advanced settings.",
        "Tailor your experience to match your unique use case.",
        "From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.",
      ],
      image: { webBasedKiosk },
    },
    {
      tab: "Digital Signages",
      title: "Capture attention with Digital Signage Kiosks",
      features: [
        "Transform your devices into captivating digital signage kiosks that grab attention.",
        "Engage your audience with vibrant images and seamless video streaming.",
        "Customize media files with trimming, muting, and background music.",
        "Advertise and show off your brand aesthetics to attract customers in different ways.",
        "Take control with Hexnode to reestablish your brand's presence.",
      ],
      image: { digitalSignageKiosk },
    },
    {
      tab: "ASAM Kiosk",
      title: "Unlock the power of Autonomous Single App Mode (ASAM)",
      features: [
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
        "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
        "Create focused, efficient and secure digital environments to match your requirements.",
        "Configure ASAM effortlessly and elevate your user experience like never before.",
      ],
      image: { asamKiosk },
    },
  ];

  return (
    <Box sx={{ maxWidth: 1200, margin: "0 auto", p: 4, mb: 10 }}>
      <CustomHeading>Specific kiosk modes for unique use cases</CustomHeading>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          mb: 4,
          "& .MuiTab-root": {
            textTransform: "none",
            fontSize: "22px",
            color: "text.secondary",
          },
          "& .Mui-selected": {
            bgcolor: "#03071A",
            color: "#ffff",
            borderRadius: 1,
          },
        }}
      >
        {Data.map((data, index) => (
          <Tab
            key={index}
            label={data.tab}
            sx={{
              mx: 0.5,
              p: "26px",
              "&:hover": {
                bgcolor: "primary.light",
                color: "white",
              },
            }}
            aria-label={data.tab}
          />
        ))}
      </Tabs>
      <KioskModeCard data={Data[selectedTab]} />
    </Box>
  );
};
export default KioskModesPage;
