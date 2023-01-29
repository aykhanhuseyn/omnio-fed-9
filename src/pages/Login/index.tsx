import React, {Suspense} from 'react';

const  LazyLoginPage =React.lazy(()=> import ('./LoginForm'));
export default ()=>(
<Suspense>
    <LazyLoginPage/>
</Suspense>
);