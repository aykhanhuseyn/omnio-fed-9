import React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import {StyledFlexDiv} from '../Statistic/Statistic'
const StyledChannelsDiv = styled(NavLink)`
  width: 294px;
  height: 80px;
  background: #fff;
  padding: 18px 30px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  text-decoration: none;
  &:hover {
    background: #eee3f4;
  }

  &:active {
    background: #bfb4d5;
  }
`;

function ChannelItem(props:any) {
  const fontStyles = {
    fontWeight: 300,
    fontFamily: 'Roboto',
  };

  return (
    <StyledChannelsDiv to={props.href}>
      <StyledFlexDiv gap="18px">
        <props.icon
          sx={{ color: props.color, fontSize: 40, alignSelf: 'center' }}
        />
        <StyledFlexDiv direction="column">
          <Typography sx={{ ...fontStyles, fontSize: 18 }} color="#212121">
            {props.title}
          </Typography>
          <StyledFlexDiv>
            <Typography
              sx={{ ...fontStyles, fontSize: 14, marginRight: 1 }}
              color="#616161"
            >
              {props.count}
            </Typography>
            <Typography sx={{ ...fontStyles, fontSize: 14 }} color="#616161">
              counted
            </Typography>
          </StyledFlexDiv>
        </StyledFlexDiv>
      </StyledFlexDiv>
    </StyledChannelsDiv>
  );
}
export default ChannelItem;