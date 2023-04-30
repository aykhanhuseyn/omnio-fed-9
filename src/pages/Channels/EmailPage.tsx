import { useState } from 'react';
import { Email } from '@mui/icons-material';
import { EmailOutlined } from '@mui/icons-material';
import ChannelsDetails from '../../components/Channels/ChannelsDetails';
import Servers from '../../components/Channels/Servers';

function EmailPage() {
  const [hasConnections] = useState(false);
  return (
    <div>
      {hasConnections ? (
        <ChannelsDetails title="Email" icon={Email} color="#3498DB" />
      ) : (
        <Servers title="Email" color="#3498DB" icon={EmailOutlined} />
      )}
    </div>
  );
}

export default EmailPage;