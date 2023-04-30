import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {
  MenuItem,
  FormControl,
  Select,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { useState } from 'react';
import { StyledWrapper } from './ChannelsDetails';
interface ConnectedPage{
    openModal:any;
    setOpenModal:any
}
export default function ConnectedPage({ openModal, setOpenModal }:ConnectedPage) {
  const [connectedPages, setConnectedPages] = useState('');
  const handleChange = (event:any) => {
    setConnectedPages(event.target.value);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSaveRole = () => {
    setOpenModal(false);
  };
  const checkboxStyles = {
    color: '#616161',
    fontSize: ' 16px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  };
  return (
    <div>
      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="sm"
        sx={{
          width: '450px',
          position: 'absolute',
          left: '37%',
          bottom: '20%',
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {'Choose pages want to connect'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <FormControl fullWidth>
              <Select
                onChange={handleChange}
                sx={{
                  height: '50px',
                  marginTop: '20px',
                  textTransform: 'capitalize',
                }}
                value={connectedPages}
                displayEmpty
                renderValue={(value) => (value ? value : 'Tenant')}
              >
                <MenuItem value="tenant" sx={{ ...checkboxStyles }}>
                  Tenant
                </MenuItem>
                <MenuItem value="users" sx={{ ...checkboxStyles }}>
                  Users
                </MenuItem>
                <MenuItem value="roles" sx={{ ...checkboxStyles }}>
                  Roles
                </MenuItem>
              </Select>
            </FormControl>
            <StyledWrapper direction="column" top="20px">
              <FormControlLabel
                control={<Checkbox />}
                label="Delos Incorporated"
              />
              <FormControlLabel control={<Checkbox />} label="Westworld" />
              <FormControlLabel control={<Checkbox />} label="Shogunworld" />
              <FormControlLabel control={<Checkbox />} label="Warworld" />
            </StyledWrapper>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ paddingBottom: '20px' }}>
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