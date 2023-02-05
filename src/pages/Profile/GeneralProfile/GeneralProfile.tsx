import {styled} from '@mui/system';
import { useState } from 'react';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import { Interface } from 'readline';
import SecurityPasswordView from '../../../components/SecurityPasswordView/SecurityPasswordView';

const StyledDiv = styled ('div')`
    flex-grow:1;
`;
interface DivProps {
 
}
const Flex = styled ('div')<DivProps>`
display:flex;
flex-direction: ${(props) =>props.direction || 'row'};
align-items: ${(props) =>props.align || 'strech'};
justify-content: ${(props) => props.justify || 'flex-start'};
`;
function GeneralProfileSettings (){
    return(
<StyledDiv>
    <Typography
variant='h2'
color='common.black'
style={{fontSize:'26px', fontWeight: 600}}>
General account settings
    </Typography>

</StyledDiv>




    )
}

export default GeneralProfileSettings;