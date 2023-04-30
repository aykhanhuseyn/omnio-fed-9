import { useState } from 'react';
import { FacebookRounded } from '@mui/icons-material';
import ChannelsDetails from '../../components/Channels/ChannelsDetails';
import Servers from '../../components/Channels/Servers';

function FacebookPage() {
  const [hasConnections] = useState(false);

  return (
    <div>
      {hasConnections ? (
        <ChannelsDetails
          title="Facebook"
          icon={FacebookRounded}
          color="#574B90"
        />
      ) : (
        <Servers title="Facebook" icon={FacebookRounded} color="#574B90" />
      )}
    </div>
  );
}

export default FacebookPage;