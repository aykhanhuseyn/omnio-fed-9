import { Outlet } from "react-router-dom";
import {styled,Typography } from '@mui/material'
import {StyledNavLink, StyledNav,StyledAside} from '../../components/Layout/Sidebar'
import  {settingItems} from '../../data/settingItems'
const StyledContent=styled('div')`
position: absolute;
top: 0;
left: 297px;
margin: 0;
padding:20px 40px;
min-height: 100vh;
`
const Settings = () => {
  return (
    <>
    <StyledAside position='fixed' width='212px'   borderLeft='1px solid #3D3575' padding='20px 15px' alignItems='flex-start'>
      <Typography component='h1' variant="h5" sx={{color:'#fff', fontWeight:500,}}>
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
    </StyledAside>
<StyledContent>
<Outlet/>
</StyledContent>
    </>
  )
}

export default Settings;
