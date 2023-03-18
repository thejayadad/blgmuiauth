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
    <Box width="80%" margin="80px auto"

    >



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
          padding: 3,
        }}
        >
           <Grid container spacing={ 4} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index} >

<Box
        sx={{ width: { xs: '100%', sm: '258px', md: "220px", }, boxShadow: "none", borderRadius: 0 }}
      >

<img
          src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          style={{
            width: "100%",
            objectFit: "cover",
            cursor: "pointer",
          }}
        />
        <Typography>
            Blog Title
        </Typography>
      </Box>
          </Grid>
        ))}
      </Grid>


        </Box>


    </Box>
  )
}

export default Category