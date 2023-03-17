import React from 'react'

import { Box, Container, Typography } from "@mui/material";
import Features from './Features';

const Feature = () => {
  return (
    <Container
    disableGutters
    maxWidth="xl"
    sx={{
      height: "90vh",
      px: {
        xs: 2,
        sm: 5,
        md: 10,
      },
      my: 15,
    }}
  >
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: "600",
          fontSize: "32px",
          color: "#161414",
          mb: 8,
          textAlign: {
            xs: "center",
            md: "center",
          },
        }}
      >
        Feature Post
      </Typography>
      <Box
        sx={{
          background: "orange",
          display: "flex",
          maxWidth: "60vw",
          margin: "auto",
          padding: 3,
          overflow: "scroll",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: {
            xs: 4,
            md: 2,
          },
          justifyContent: "space-between",
          alignItems: {
            xs: "center",
            md: "flex-start",
          },
        }}
      >
        <Features />
        <Features />

        <Features />
        <Features />
        <Features />
        <Features />
        <Features />

        </Box>
    </Container>
  )
}

export default Feature