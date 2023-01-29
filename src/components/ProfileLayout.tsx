import {styled} from '@mui/system'
import ProfileSide from './ProfileSide/ProfileSide'
import { Container} from '@mui/material'
import { Outlet } from 'react-router-dom'



function ProfileLayout() {
const StyledDiv=styled('div')`
display:flex;
gap:20px;
align-items:baseline;
`
return(
    <Container>
        <StyledDiv>
            <ProfileSide/>
            <Outlet/>
        </StyledDiv>
    </Container>

);
}



export default ProfileLayout