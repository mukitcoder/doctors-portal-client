import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'

const bannerBg = {
    background: `url(${bg})`,
}

const verticalCenter = {
    display:'flex',
    alignItem:'center',
    height:450,

}

const Banner = () => {
    return (
        <Container style={{bannerBg}} sx={{ flexGrow: 1 }}>
        <Grid sx={{mt:5}} container spacing={4}>
          <Grid  item style={{...verticalCenter, textAlign:'left'}} xs={12} md={5}>
            <Box>
            <Typography variant="h4">
                Your New Smile <br />
                Starts Here!
            </Typography>
            <Typography sx={{my:4}} variant="h6">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem culpa ex animi cupiditate fugiat fugit suscipit 
            </Typography>
            <Button variant="contained">Get Appointment</Button>
            </Box>
          </Grid>
          <Grid style={verticalCenter} item xs={12} md={7}>
            <img style={{width:'70%', height:"60%"}} src= {chair} alt="" />
            </Grid>
        </Grid>
      </Container>
    );
};

export default Banner;