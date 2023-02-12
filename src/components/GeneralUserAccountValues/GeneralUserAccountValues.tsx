import {styled} from '@mui/system'
import { CSSProperties } from 'styled-components';
import { useSelector } from 'react-redux';
 interface ListProps {
    gap?: CSSProperties["gap"];
    direction?: CSSProperties["flexDirection"];
    size?: CSSProperties["fontSize"];
    color?: CSSProperties["color"];
 }
function GeneralUserAccountValues  () {
  const userInfo =useSelector((state)=> state.auth?.userInfo);
    const StyledList =styled('ul') <ListProps>`
    display:flex;
    color: #9e9e9e;
    font-size: 14px;
    flex-direction:column;
    gap:16px;

    `
  return (
    <StyledList style={{color:'#9E9E9E', fontSize:'14px'}}>
        <li>{userInfo?.displayName}</li>
        <li> {userInfo?.email}</li>
        <li>Head of Westworld Programming Division</li>
        <li> Delos Incorporated </li>
    </StyledList>
  )
}
export default GeneralUserAccountValues;