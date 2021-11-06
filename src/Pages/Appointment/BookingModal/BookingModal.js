import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
  const { name, time } = booking;
  const handleBookingSubmit = (e) => {

    
    e.preventDefault()
    handleBookingClose()
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography
            sx={{ mb: "20px" }}
            id="transition-modal-title"
            variant="h6"
            component="h2"
          >
            {name}
          </Typography>
          <form onSubmit={handleBookingSubmit}>
            <TextField
              id="outlined-basic"
              label="Time"
              variant="outlined"
              margin="dense"
              defaultValue={time}
              disabled
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              margin="dense"
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              margin="dense"
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              defaultValue="Phone Number"
              margin="dense"
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Date"
              variant="outlined"
              defaultValue={date.toDateString()}
              sx={{ mb: "20px" }}
              margin="dense"
              disabled
              fullWidth
            />
            <Button type="submit" variant="contained">
              Book Appointment
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
