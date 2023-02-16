
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import {styled} from '@mui/system';


 const StyledForm = styled ('form')`
 display: flex;
 flex-direction: column;
 justify-content: center; 
 align-items: center;
 gap: 30px;
`;      

 const StyledImageDiv = styled('div')`
  width: 100px;
  position: relative;
  cursor: pointer;
`;
 
const StyledDiv = styled('div')`
  display: flex;
  gap: 12px;
  margin-left: -60px;
`;

const StyledInput =styled('input')`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  opacity: 0;
`;
function GeneralUserEdit  () {
  return (
    <StyledForm>
      <StyledImageDiv>

      </StyledImageDiv>
      <FormControl style={{display:'flex', gap:'34px', flexDirection:'column'}}>
        <TextField
        size='small'
        variant='outlined'
        name='displayName'
        label='Display Name'></TextField>

            <TextField
             size='small'
             variant='outlined'
             name='Username'
             label='Username'></TextField>

              <TextField 
              size='small'
              variant='outlined'
              name='email'
              label='Email' >    </TextField>


              <TextField
               size='small'
               variant='outlined'
               name='JobTitle'
               label='Job title'></TextField>
      </FormControl>
        <StyledDiv>
           <Button
           type='submit'
           variant='contained'
           color='success'
           style={{color:'#fff'}}>
              Save
           </Button>
            <Button
            variant='text'
            style={{color:'#000'}}>
              Cancel
            </Button>
        </StyledDiv>
    </StyledForm>
  );
}


export default GeneralUserEdit;




  


