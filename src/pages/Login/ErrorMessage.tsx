
import React from 'react';
import { Snackbar } from '@mui/material';
import {Alert} from '@mui/material';
 

interface ErrorMessageProps {
    message:string,
    handleClose:()=>void
}
function ErrorMessage  ({message, handleClose}:ErrorMessageProps)  {
  return (
    <>
    { message && (
    <Snackbar open={true}
    autoHideDuration={6000}
    onClose={handleClose}
    anchorOrigin={
        {vertical:'bottom',
        horizontal:'right',}
    }>
        <Alert severity='error'>
            <p style={{color:'red'}}>{message}</p>
        </Alert>
    </Snackbar>
)} 
    </>
  )
};
export default ErrorMessage;
