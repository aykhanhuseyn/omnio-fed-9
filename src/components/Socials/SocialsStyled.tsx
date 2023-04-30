import { styled } from '@mui/material/styles';
import { CSSProperties } from 'styled-components';
interface StyledDiv{
    justify:CSSProperties['justifyContent']
}
export const StyledDiv = styled('div')<StyledDiv>`
  width: 412px;
  height: 312px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: ${(props) => props.justify || 'flex-start'};
`;