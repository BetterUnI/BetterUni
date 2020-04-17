import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5]
  },
  hero: {
    marginTop: 0,
    backgroundColor: "#A41F35",
    color: "#FFFFFF",
    padding: 20
  },
  h3: {
    fontSize: 20
  },
  btn: {
    background: "#A41F35",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 100px",
    margin: "0 auto",
    display: "block"
  },
  "btn:hover": {
    backgroundColor: "blue",
    borderColor: "red",
    boxShadow: "none"
  }
}));

export default function SchedulerCalendarModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open Animated Modal
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.hero}>
              <p className={classes.h3}>
                Please select an available time slot{" "}
              </p>
            </div>
            <img
              src="https://media1.tenor.com/images/4a665d6ac3b442a0f29b209b2afb5746/tenor.gif?itemid=16520592"
              alt="johnnyboi"
              style={{ margin: "10" }}
            />
            <Button className={classes.btn} variant="contained">
              Confirm{" "}
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
