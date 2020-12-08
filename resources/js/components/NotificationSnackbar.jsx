import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const NotificationSnackbar = ({ open, handleClose, severity, message }) => {
    return (
        <Snackbar
            open={open}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            autoHideDuration={3000}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default NotificationSnackbar;
