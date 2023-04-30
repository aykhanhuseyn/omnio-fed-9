import { FacebookRounded, Email, WhatsApp } from '@mui/icons-material';
import { Typography } from '@mui/material';
import ChannelItem from '../../components/Channels/ChannelItem';
function Channels() {
  return (
    <div style={{ paddingLeft:'28%',paddingTop:'5%',  display: 'flex',flexDirection:'column', gap: '20px'}}>
      <Typography sx={{fontSize: 24, color: '#212121'}}>Channels</Typography>
      <div style={{ display: 'flex', gap: '20px', paddingTop: '16px' }}>
        <ChannelItem
          title="Facebook"
          count={0}
          color="#3B5998"
          icon={FacebookRounded}
          href="/facebook"
        />
        <ChannelItem title="Email" count={0} color="#3498DB" icon={Email}  href="/email"/>
      </div>
      <ChannelItem title="Whatsapp" count={0} color="#4FCE5D" icon={WhatsApp}  href="/whatsapp" />
    </div>
  );
}

export default Channels;