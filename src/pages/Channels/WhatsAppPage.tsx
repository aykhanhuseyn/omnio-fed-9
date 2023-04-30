import { useState } from 'react';
import { WhatsApp } from '@mui/icons-material';
import ChannelsDetails from '../../components/Channels/ChannelsDetails';
import Servers from '../../components/Channels/Servers';

function WhatsAppPage() {
  const [hasConnections] = useState(false);

  return (
    <div>
      {hasConnections ? (
        <ChannelsDetails title="WhatsApp" icon={WhatsApp} color="#4FCE5D" />
      ) : (
        <Servers title="WhatsApp" icon={WhatsApp} color="#4FCE5D" />
      )}
    </div>
  );
}

export default WhatsAppPage;