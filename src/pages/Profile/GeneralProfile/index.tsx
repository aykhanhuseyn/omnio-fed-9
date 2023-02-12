import React, {Suspense} from 'react';
import GeneralProfile from './GeneralProfile';

const LazyGeneralSettings = React.lazy (()=> import ('./GeneralProfile'));
 export default () => (
<Suspense>
    <GeneralProfile/>
</Suspense>
 );