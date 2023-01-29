import {NavLink} from 'react-router-dom'
import {Typography} from '@mui/material'
import {styled} from '@mui/system';
import SettingsIcon from '@mui/icons-material/Settings';
import SecurityIcon from '@mui/icons-material/Security';

function ProfileSide (){
const StyledDiv = styled ('div')`
display:flex;
flex-direction:column;
width:226px;
gap:25px;
`
const StyledNav =styled ('nav')`
display:flex;
flex-direction:column;
`
const StyledLi = styled ('li')`
display:flex;
align-items: center;
gap:15px;
font-size:16px;
color:#574B90;
margin-bottom:24px;
cursor:pointer;
padding:10px 6px;

`
return(
    <StyledDiv>
<Typography style={{fontSize:'24px', padding:'16px 0 16px 20px'}} 
color='grey darken-4'variant="h1">Profile</Typography>
<StyledNav>
    <ul>
<StyledLi>
    <SettingsIcon/>
    <NavLink to = 'general'>General</NavLink>
</StyledLi>
<StyledLi>
    <SecurityIcon/>
    <NavLink to = 'security'>Security</NavLink>
</StyledLi>

    </ul>
</StyledNav>
    </StyledDiv>
);
    
}


export default ProfileSide