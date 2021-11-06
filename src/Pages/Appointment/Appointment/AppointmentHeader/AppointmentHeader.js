import { Container } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import chair from '../../../../images/chair.png'
import Calender from "../../../../Shared/Calender/Calender";

const AppointmentHeader = ({date, setDate}) => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Calender date={date} setDate={setDate}></Calender>
          </Grid>
          <Grid item xs={12} md={6}>
                <img width="100%" src= {chair} alt="" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AppointmentHeader;
