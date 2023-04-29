
import {NavLink} from 'react-router-dom'
import {ListItem, ListItemIcon, ListItemText, Typography} from '@mui/material'
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
 const StyledNavLink = styled(NavLink)`
 color: #574b90;
  margin-bottom: 16px;
  border-radius: 4px;
  text-decoration: none;
  .MuiSvgIcon-root {
      color: #978CBA;
    }

  &:hover {
    background-color: #F5F5F5;;
  }
  &.active {
    background-color: #EEE3F4;
    color: #574b90;
  }
`;

return(
    <StyledDiv>
<Typography style={{fontSize:'24px', padding:'16px 0 16px 20px'}} 
color='grey darken-4'variant="h1">Profile</Typography>
<StyledNav>
    <StyledNavLink to="general">
    <ListItem>
        <ListItemIcon>
        <SettingsIcon />  
        </ListItemIcon>
        <ListItemText primary='General' />
        </ListItem>
    </StyledNavLink>
    <StyledNavLink to="security">
    <ListItem>
        <ListItemIcon>
        <SecurityIcon/>
        </ListItemIcon>
        <ListItemText primary='Security' />
        </ListItem>
    </StyledNavLink>
</StyledNav>
    </StyledDiv>
);
    
}


export default ProfileSide