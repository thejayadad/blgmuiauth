import React from 'react'
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, display } from '@mui/system';
import Grid from '@mui/material/Grid';
import { Stack} from "@mui/material";


const Category = () => {
  const breakPoint = useMediaQuery("(min-width:600px)");

  return (
    <Box width="80%" margin="auto"

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

        }}
        >
           <Stack direction={'row'} flexWrap="wrap" justifyContent="center"  gap={2}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item key={index} >

<Box
        sx={{ width: { xs: '100%', sm: '458px', md: "420px", }, boxShadow: "none", borderRadius: 0, margin: "auto" }}
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
      </Stack>


        </Box>


    </Box>
  )
}

export default Category