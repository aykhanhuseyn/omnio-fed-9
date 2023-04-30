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
  Checkbox,
} from '@mui/material';
import { useState } from 'react';
import { StyledWrapper } from './ChannelsDetails';
interface ConnectServers{
    openConnectedServers:any;
    setOpenConnectedServers:any
}
export default function ConnectServers({
  openConnectedServers,
  setOpenConnectedServers,
}:ConnectServers) {

   const [checkedExchange, setCheckedExchange] = useState(false);
   const [checkedIMAP, setCheckedIMAP] = useState(false);

  const handleChange = (e:any) => {
     if(e.target.name === 'exchange') {
         setCheckedExchange(true)
         setCheckedIMAP(false)
        }

    else if( e.target.name === 'IMAP') {
        setCheckedExchange(false)
        setCheckedIMAP(true)}
  
  }
  const handleClose = () => {
    setOpenConnectedServers(false);
  };

  const handleSaveRole = () => {
    setOpenConnectedServers(false);
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
        open={openConnectedServers}
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
          {'Connect '}
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
                  onClick={handleChange}
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
                    disabled={checkedIMAP && true}

                  />
                  <TextField
                    size="small"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    sx={{ ...textFieldsStyle }}
                    disabled={checkedIMAP && true}

                  />
                </StyledWrapper>
                <StyledWrapper>
                  <TextField
                    size="small"
                    id="outlined-basic"
                    label="Service URL"
                    variant="outlined"
                    sx={{ ...textFieldsStyle }}
                    disabled={checkedIMAP && true}

                  />
                  <TextField
                    size="small"
                    id="outlined-basic"
                    label="Auto discovery URL"
                    variant="outlined"
                    sx={{ ...textFieldsStyle }}
                    disabled={checkedIMAP && true}

                  />
                </StyledWrapper>
                <FormControlLabel
                  name='IMAP'
                  value="IMAP"
                  control={<Radio />}
                  label="IMAP connection"
                  sx={{ marginTop: '20px' }}
                  onClick={handleChange}
                  
                  
                />
              </RadioGroup>
              <StyledWrapper >
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  sx={{ ...textFieldsStyle }}
                  disabled={checkedExchange && true}
                />
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  sx={{ ...textFieldsStyle }}
                  disabled={checkedExchange && true}

                />
              </StyledWrapper>
              <StyledWrapper>
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="IMAP host"
                  variant="outlined"
                  sx={{ ...textFieldsStyle }}
                  disabled={checkedExchange && true}

                />
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="IMAP post"
                  variant="outlined"
                  sx={{ ...textFieldsStyle }}
                  disabled={checkedExchange && true}

                />
              </StyledWrapper>
              <StyledWrapper>
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="SMTP host"
                  variant="outlined"
                  sx={{ ...textFieldsStyle }}
                  disabled={checkedExchange && true}

                />
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="SMTP port"
                  variant="outlined"
                  sx={{ ...textFieldsStyle }}
                  disabled={checkedExchange && true}

                />
              </StyledWrapper>

              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="SSL"
                sx={{ marginTop: '20px' }}
              />
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