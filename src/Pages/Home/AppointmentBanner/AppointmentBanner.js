import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: 175,
    backgroundColor:`rgba(45, 58, 74, 0.9)`,
    backgroundBlendMode: 'darken, luminosity'
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img style={{width:400, marginTop:-120}} src= {doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6} sx={{display:'flex', justifyContent:'flex-start', 
          alignItems:'center',
          textAlign:'left'}}>
           <Box>
           <Typography style={{color:'#00b0ff', fontWeight:"700"}}  variant="h6">Appointment</Typography>
            <Typography style={{color: '#ffffff'}} sx={{my:2}} variant="h4">Make An Appointment Today</Typography>
            <Typography style={{color:'white', 
            marginBottom:'40px',
            fontWeight:'400'}}variant="h6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam velit eum ducimus tempore similique illo!</Typography>

            <Button variant="contained">Learn More</Button>
           </Box>
          </Grid>
         
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;