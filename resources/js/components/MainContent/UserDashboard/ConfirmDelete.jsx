import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";

import DialogTitle from "@material-ui/core/DialogTitle";
import styled from "styled-components";
const MyButton = styled(Button)`
    && {
        background-color: ${props => props.mycolor};
        &:hover {
            background-color: ${props => props.mycolorhover};
        }
    }
`;

export default function ConfirmDelete({
    open,
    handleClose,
    id,
    onDeleteHandler
}) {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth={true}
                maxWidth="xs"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirm Delete?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} variant="outlined">
                        Close
                    </Button>
                    <MyButton
                        variant="contained"
                        color="secondary"
                        mycolor="#D21919"
                        mycolorhover="#A30F0F"
                        onClick={() => {
                            handleClose();
                            onDeleteHandler(id);
                        }}
                    >
                        Delete
                    </MyButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}
