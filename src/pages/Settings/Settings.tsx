import {styled, Box,Typography } from '@mui/material'
import { Outlet } from "react-router-dom";
// import styled from "styled-components";
import {StyledNavLink, StyledNav} from '../../components/Layout/Sidebar'
import  {settingItems} from '../../data/settingItems'
const StyledBox=styled(Box)`
  height: 100vh;
  width: 212px;
  background: #574B90;
  position: fixed;
  left: 84px;
  top: 0;
  border-left: 1px solid #3D3575;
  padding: 20px;
`
const StyledContent=styled('div')`
position: absolute;
top: 0;
left: 297px;
margin: 0;
padding:32px 40px;
height: 100vh;
`
const Settings = () => {
  return (
    <>
    <StyledBox>
      <Typography component='h1' variant="h5" sx={{color:'#fff', fontWeight:500}}>
        Settings
      </Typography>
      <StyledNav sx={{border:'none', padding:0, marginTop:'20px'}}>
        {settingItems.map((setting)=>(
        <StyledNavLink to={setting.link} key={setting.key} sx={{marginBottom:'8px', textDecoration:'none', color:'#fff', width:'100%', alignSelf:'left'}}>
        <Typography variant="subtitle1" component='h6'>
          {setting.title}
        </Typography>
      </StyledNavLink>
        ))}
      </StyledNav>
    </StyledBox>
<StyledContent>
<Outlet/>
</StyledContent>
    </>
  )
}

export default Settings;
