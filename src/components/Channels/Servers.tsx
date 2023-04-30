import React from 'react';
import { styled } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { StyledFlexDiv } from '../../components/Statistic/Statistic';
import { StyledWrapper, StyledLink, StyledContainer } from './ChannelsDetails';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import ConnectServersModal from './ConnectServersModal';
import { Link } from 'react-router-dom';

const StyledChannelsDiv = styled(Link)`
  width: 314px;
  height: 124px;
  background: #fafafa;
  padding: 20px 40px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  text-decoration: none;
`;

function Servers(props:any) {
  const fontStyles = {
    fontWeight: 300,
    fontFamily: 'Roboto',
  };
  const buttonStyles = {
    fontWeight: 300,
    fontFamily: 'Roboto',
    marginRight: '10px',
    marginTop: '15px',
    height: '28px',
    textTransform: 'capitalize',
  };
  const [openConnectedServers, setOpenConnectedServers] = useState(false);

  function handleConnectedServers() {
    setOpenConnectedServers(true);
  }
  return (
    <StyledContainer>
      {openConnectedServers && (
        <ConnectServersModal
          openConnectedServers={openConnectedServers}
          setOpenConnectedServers={setOpenConnectedServers}
        />
      )}
      <StyledWrapper
        align="baseline"
        content="space-between"
        alignContent="center"
      >
        <StyledLink align="center" to="/channels">
          <ArrowBackIcon sx={{ color: '#212121', fontSize: 24 }} />
          <Typography sx={{ marginLeft: '15px' }}>{props.title}</Typography>
        </StyledLink>
        <Button
          disableElevation
          variant="contained"
          sx={{ textTransform: 'none' }}
          onClick={handleConnectedServers}
        >
          Connect
        </Button>
      </StyledWrapper>
      <StyledWrapper
        direction="column"
        align="center"
        alignContent="center"
        content="center"
        top="15%"
      >
        <StyledChannelsDiv to={props.href}>
          <StyledFlexDiv direction="column">
            <StyledFlexDiv>
              <props.icon
                sx={{ color: props.color, fontSize: 40, marginRight: '15px' }}
              />
              <Typography sx={{ ...fontStyles, fontSize: 18 }} color="#212121">
                {props.title}
              </Typography>
            </StyledFlexDiv>

            <StyledFlexDiv>
              <Button variant="outlined" sx={{ ...buttonStyles }}>
                Edit
              </Button>
              <Button
                variant="outlined"
                sx={{
                  ...buttonStyles,
                  background: '#EEEEEE',
                  border: 'none',
                  color: '#212121',
                }}
              >
                Remove
              </Button>
            </StyledFlexDiv>
          </StyledFlexDiv>
        </StyledChannelsDiv>
      </StyledWrapper>
    </StyledContainer>
  );
}
export default Servers;