import React from "react";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Booking from "../../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetics Dentistry",
    time: "10:00 AM - 11:30 AM",
    space: 10,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "4:00 PM - 5:00 PM",
    space: 10,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "5:00 PM - 6:00 PM",
    space: 10,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "6:00 PM - 7:00 PM",
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "7:00 PM - 8:00 PM",
    space: 10,
  },
];
const AvailableAppointments = ({ date }) => {
  return (
    <Container>
      <h2>Available Appointment {date.toDateString()}</h2>
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking key={booking.id} booking={booking} date={date}></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointments;
