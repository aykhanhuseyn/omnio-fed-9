import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { CSSProperties } from 'styled-components';

const StyledStatisticBox = styled('div')`
  width: 305px;
  height: 125px;
  background: linear-gradient(277.33deg, #4e4487 0%, #978cba 100%);
  border-radius: 8px;
  padding: 18px 30px;
`;
interface StyledFlexDivProps {
    display?: CSSProperties["flex"];
    direction?: CSSProperties['flexDirection'];
    gap?: CSSProperties["gap"];
    align?: CSSProperties["alignItems"];
  }
  
export const StyledFlexDiv = styled('div')<StyledFlexDivProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.align || 'stretch'};
  gap: ${(props) => props.gap || '0'};
`;

function Statistic(props:any) {
  const fontStyles = {
    fontWeight: 500,
    fontFamily: 'Montserrat',
  };

  return (
    <StyledStatisticBox>
      <StyledFlexDiv gap="35px">
        <props.icon sx={{ color: '#fff', fontSize: 50, alignSelf: 'center' }} />
        <StyledFlexDiv direction="column">
          <Typography sx={{ ...fontStyles, fontSize: 34 }} color="white">
            {props.count}
          </Typography>
          <Typography sx={{ ...fontStyles, fontSize: 24 }} color="white">
            {props.title}
          </Typography>
        </StyledFlexDiv>
      </StyledFlexDiv>
    </StyledStatisticBox>
  );
}

export default Statistic;