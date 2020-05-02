import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { SchedulePageContext } from "../../SchedulePageContext";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: 20,
    color: "#5E7681"
  },
  btn: {
    background: "none",
    border: "none",
    color: "#A41F35",
    fontWeight: "bold",
    textDecoration: "none",
    padding: 3
  }
}));

export default function SchedulerConfirmationModal(props) {
  const classes = useStyles();
  const { openConfirmation, setOpenConfirmation } = useContext(
    SchedulePageContext
  );

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openConfirmation}
        onClose={() => setOpenConfirmation(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={openConfirmation}>
          <div className={classes.paper}>
            <p>
              <strong>Your meeting has been successfully scheduled!</strong>
            </p>
            <center>
              <p>
                You can view your upcoming meetings
                <Link to="/profile" className={classes.btn}>
                  here
                </Link>
              </p>
            </center>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
