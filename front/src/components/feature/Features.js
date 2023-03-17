import React from 'react'
import { Box, Typography } from "@mui/material";




const Features = () => {
  return (
    <Box>
              <Box
        sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}
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
    </Box>
  )
}

export default Features