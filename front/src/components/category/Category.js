import React from 'react'
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, display } from '@mui/system';
import Grid from '@mui/material/Grid';


const Category = () => {
  const breakPoint = useMediaQuery("(min-width:600px)");

  return (
    <Container
    disableGutters
    maxWidth="xl"
    sx={{
      height: "70vh",
      px: {
        xs: 2,
        sm: 5,
        md: 10,
      },
      my: 15,
    }}
    >
      <Box width="80%" margin="80px auto">
         <Typography variant="h3" textAlign="center">
        Categories
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="NEW ARRIVALS" value="newArrivals" />
        <Tab label="BEST SELLERS" value="bestSellers" />
        <Tab label="TOP RATED" value="topRated" />
      </Tabs>
        <Box
        sx={{
          flexGrow: 1,
          background: "#222",
          padding: 2
        }}
        >
           <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            box item
          </Grid>
        ))}
      </Grid>


        </Box>


    </Box>
    </Container>
  )
}

export default Category