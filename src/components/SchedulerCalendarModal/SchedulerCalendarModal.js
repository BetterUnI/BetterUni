import React, { useContext } from "react";
import SchedulerCalendar from "../../components/SchedulerCalendar/SchedulerCalendar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { SchedulePageContext } from "../../SchedulePageContext";

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
    display: "block",
    marginTop: 20,
    marginBottom: 20
  },
  "btn:hover": {
    backgroundColor: "blue",
    borderColor: "red",
    boxShadow: "none"
  },
  scheduler: { padding: "100px" }
}));

export default function SchedulerCalendarModal(props) {
  const classes = useStyles();
  const { open, setOpen, setOpenConfirmation } = useContext(
    SchedulePageContext
  );
  const handleClick = () => {
    setOpen(false);
    setOpenConfirmation(true);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
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
            <SchedulerCalendar className={classes.scheduler} />
            <Button
              className={classes.btn}
              variant="contained"
              onClick={handleClick}
            >
              Confirm{" "}
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
