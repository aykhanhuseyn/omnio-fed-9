import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';
import ConnectedPage from './ConnectedPage';
import ConnectServersModal from './ConnectServersModal';
import { CSSProperties } from 'styled-components';
export const StyledContainer = styled(Container)`
  padding-top: 40px;
  width: 700px;
`;

interface StyledWrapperProps {
    flex?: CSSProperties["flex"];
    direction?: CSSProperties['flexDirection'];
    align?: CSSProperties["alignItems"];
    content?: CSSProperties["justifyContent"];
    top?: CSSProperties["marginTop"];
    bottom?: CSSProperties["marginBottom"];
    alignContent?:CSSProperties['alignContent']
  }
export const StyledWrapper = styled('div')<StyledWrapperProps>`
  display: ${(props) => props.flex || 'flex'};
  justify-content: ${(props) => props.content || 'center'};
  align-content: ${(props) => props.alignContent || 'center'};
  align-items: ${(props) => props.align || 'stretch'};
  margin-top: ${(props) => props.top || '0'};
  margin-bottom: ${(props) => props.bottom || '0'};
  flex-direction: ${(props) => props.direction || 'row'};
`;
interface StyledLinkProps {
    align?: CSSProperties["alignItems"];
  }

export const StyledLink = styled(NavLink)<StyledLinkProps>`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: ${(props) => props.align || 'stretch'};
  font-family: 'Roboto';
  text-decoration: none;
  font-size: 24px;
  color: #212121;
`;

export const StyledIconsDiv = styled('div')`
  width: 80px;
  height: 80px;
  background: #eee3f4;
  padding: 18px 30px;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  text-decoration: none;
`;
export const StyledTypography = styled('button')`
  background: #fff;
  border: none;
  margin-top: 10px;
  color: #574b90;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
`;

function ChannelsDetails(props:any) {
  const [openConnectedServers, setOpenConnectedServers] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const iconStyles = {
    position: 'relative',
    right: '50%',
  };

  function handleConnectedServers() {
    setOpenConnectedServers(true);
  }
  function handleConnectedPageModal() {
    setOpenModal(true)
  }
  return (
    <StyledContainer>
     
      {openModal && (
        <ConnectedPage openModal={openModal} setOpenModal={setOpenModal} />
      )}
      {openConnectedServers && <ConnectServersModal openConnectedServers={openConnectedServers} setOpenConnectedServers={setOpenConnectedServers}/>}
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
        <StyledIconsDiv>
          <props.icon
            sx={{
              ...iconStyles,
              color: props.color,
              fontSize: 40,
              alignSelf: 'center',
            }}
          />
        </StyledIconsDiv>
        <StyledTypography onClick={handleConnectedPageModal}>
          There are no connected pages
        </StyledTypography>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default ChannelsDetails;