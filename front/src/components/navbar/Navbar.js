import React from 'react'
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { Box, Drawer, Typography } from "@mui/material";
import {Link} from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu";


const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <AppBar position="static" elevation={0} color="transparent">
         <Container
        maxWidth="xl"
        sx={{
          px: 10,
          pt: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
        disableGutters
      >

        <Typography>

          Blog Spot
        </Typography>
        <Box
          sx={{
            display: {
              xs: "none",
              lg: "flex",
            },
            alignItems: "center",
            gap: "54px",
          }}
        >
          <Link
             underline="none"
             color="#fff"
             sx={{
               fontWeight: "300",
               fontSize: "14px",
               opacity: 0.7,
               "&:hover": {
                 opacity: 1,
               },
               "&:first-of-type": {
                 opacity: 1,
               },
             }}
          to="/">
            Home


          </Link>
          <Link
             underline="none"
             color="#fff"
             sx={{
               fontWeight: "300",
               fontSize: "14px",
               opacity: 0.7,
               "&:hover": {
                 opacity: 1,
               },
               "&:first-of-type": {
                 opacity: 1,
               },
             }}
          to="/">
            Home


          </Link>
          <Link
             underline="none"
             color="#fff"
             sx={{
               fontWeight: "300",
               fontSize: "14px",
               opacity: 0.7,
               "&:hover": {
                 opacity: 1,
               },
               "&:first-of-type": {
                 opacity: 1,
               },
             }}
          to="/">
            Home


          </Link>

          </Box>
          <Box>
          <Typography
              sx={{
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "21px",
                color: "#222",
                opacity: "0.5",
              }}
            >
              Holla,
            </Typography>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "21px",
                color: "#222",
              }}
            >
              Ales Nesetril
            </Typography>
          </Box>
          <MenuIcon
          sx={{
            display: {
              xs: "block",
              lg: "none",
            },
            cursor: "pointer",
            color: "#222",
          }}
          onClick={() => setOpenMobileMenu(true)}
        />
        <Drawer
          anchor="left"
          open={openMobileMenu}
          onClose={() => setOpenMobileMenu(false)}
        >
          <Box
            sx={{
              position: "relative",
              width: 250,
              backgroundColor: "#5243C2",
              height: "100%",
              py: 3,
              px: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 5,
            }}
            role="presentation"
            onClick={() => setOpenMobileMenu(false)}
            onKeyDown={() => setOpenMobileMenu(false)}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#222",
                    opacity: "0.5",
                  }}
                >
                  Holla,
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#222",
                  }}
                >
                  Ales Nesetril
                </Typography>
              </Box>
              <img
                src=""
                alt="avatar"
                style={{ cursor: "pointer" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
              }}
            >
                <Link
                  href="#"

                  underline="none"
                  color="#fff"
                  sx={{
                    fontWeight: "300",
                    fontSize: "14px",
                    opacity: 0.7,
                    "&:hover": {
                      opacity: 1,
                    },
                    "&:first-of-type": {
                      opacity: 1,
                    },
                  }}
                >
                  Home
                </Link>
                <Link
                  href="#"

                  underline="none"
                  color="#fff"
                  sx={{
                    fontWeight: "300",
                    fontSize: "14px",
                    opacity: 0.7,
                    "&:hover": {
                      opacity: 1,
                    },
                    "&:first-of-type": {
                      opacity: 1,
                    },
                  }}
                >
                  Home
                </Link>
                <Link
                  href="/"

                  underline="none"
                  color="#fff"
                  sx={{
                    fontWeight: "300",
                    fontSize: "14px",
                    opacity: 0.7,
                    "&:hover": {
                      opacity: 1,
                    },
                    "&:first-of-type": {
                      opacity: 1,
                    },
                  }}
                >
                  Home
                </Link>

            </Box>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "500",
                cursor: "pointer",
                position: "absolute",
                bottom: "14px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              &#169; 2rism
            </Typography>
          </Box>
        </Drawer>


      </Container>

    </AppBar>
  )
}

export default Navbar