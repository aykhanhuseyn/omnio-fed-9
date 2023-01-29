import React, {Suspense} from 'react';
const LazySecurityProfile = React.lazy (()=> import ('./SecurityProfile'));
 export default () => (
<Suspense>
    <LazySecurityProfile/>
</Suspense>
 );