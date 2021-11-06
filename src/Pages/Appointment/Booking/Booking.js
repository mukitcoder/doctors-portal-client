import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date }) => {
  const { name, time, space } = booking;
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
  return (
    <>
    <Grid item xs={8} sm={6} md={4}>
      <Paper elevation={3} sx={{py:5}}>
        <Typography variant="h5" gutterBottom component="div">
          {name}
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          {time}
        </Typography>
        <Typography sx={{pb:2}} variant="caption" display="block" gutterBottom>
        {space} Spaces Available
      </Typography>
      <Button onClick={handleBookingOpen} variant='contained'>Book Appointment</Button>
      </Paper>
    </Grid>
    <BookingModal
    date={date}
    booking={booking}
    openBooking={openBooking}
    handleBookingClose={handleBookingClose}
    ></BookingModal>
    
    </>
  );
};

export default Booking;
