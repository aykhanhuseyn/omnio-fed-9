import { useState, useEffect } from "react";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

interface ErrorMessageProps {
  message: string;
  handleClose?: () => void;
}

function ErrorMessage({ message, handleClose }: ErrorMessageProps) {
  const [open, setOpen] = useState(Boolean(message));
  
  useEffect(() => {
    setOpen(Boolean(message));
  }, [message])

  const onClose = () => {
    if (handleClose) {
      handleClose();
    }
    setOpen(false);
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert severity="error">
        <p style={{ color: "red" }}>{message}</p>
      </Alert>
    </Snackbar>
  );
}
export default ErrorMessage;
