import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { PropTypes } from "prop-types";
const DialogBox = ({ open, setOpen, children }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      {children}
    </Dialog>
  );
};

DialogBox.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.any,
};

export default DialogBox;
