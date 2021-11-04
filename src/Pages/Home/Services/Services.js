import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import teeth from "../../../images/whitening.png";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi voluptatem facilis exercitationem iure aliquam magnam iste quis doloremque ad id?",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi voluptatem facilis exercitationem iure aliquam magnam iste quis doloremque ad id?",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi voluptatem facilis exercitationem iure aliquam magnam iste quis doloremque ad id?",
    img: teeth,
  },
]; 

const Services = () => {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography sx={{ fontWeight: 'bold', color:'success.main', m:2 }} variant="h6" component="div">
            OUR SERVICES
          </Typography>
        <Typography sx={{ fontWeight: 'bold', m:5 }} variant="h4" component="div">
            Services We Provide
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {services.map((service) => (
             <Service key={service.name} service={service}></Service>
            ))}
          </Grid>
        </Container>
      </Box>
  );
};

export default Services;
