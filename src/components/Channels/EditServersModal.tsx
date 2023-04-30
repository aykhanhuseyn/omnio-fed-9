import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField,
  
} from '@mui/material';
import { StyledWrapper } from './ChannelsDetails';
interface EditServersModal{
    openEditModal:any;
    setOpenEditModal:any
}
export default function EditServersModal({
  openEditModal,
  setOpenEditModal,
}:EditServersModal) {

  
  const handleClose = () => {
    setOpenEditModal(false);
  };

  const handleSaveRole = () => {
    setOpenEditModal(false);
  };
  const textFieldsStyle = {
    fontSize: ' 16px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    marginTop: '20px',
    marginRight: '20px',
    color: '#9E9E9E',
    width: '250px',
  };
  return (
    <div>
      <Dialog
        open={openEditModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <DialogTitle id="alert-dialog-title" sx={{ marginLeft: '20px' }}>
          {'Edit '}
        </DialogTitle>
        <DialogContent sx={{ width: '630px', marginLeft: '20px' }}>
          <DialogContentText id="alert-dialog-description">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="exchange"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Exchange"
                  control={<Radio />}
                  label="Exchange connection"
                  name='exchange'
                  
                />
                <StyledWrapper>
                  <TextField
                    size="small"
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    sx={{ ...textFieldsStyle }}

                  />
                  <TextField
                    size="small"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    sx={{ ...textFieldsStyle }}

                  />
                </StyledWrapper>
                <StyledWrapper>
                  <TextField
                    size="small"
                    id="outlined-basic"
                    label="Service URL"
                    variant="outlined"
                    sx={{ ...textFieldsStyle }}

                  />
                  <TextField
                    size="small"
                    id="outlined-basic"
                    label="Auto discovery URL"
                    variant="outlined"
                    sx={{ ...textFieldsStyle }}

                  />
                </StyledWrapper>
                </RadioGroup>
                </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ paddingBottom: '15px' }}>
          <Button
            onClick={handleClose}
            variant="contained"
            color="inherit"
            sx={{ textTransform: 'none' }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSaveRole}
            autoFocus
            variant="contained"
            color="success"
            sx={{ color: '#fff', textTransform: 'none' }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}