import React, { Suspense } from 'react';
import loadable from '@loadable/component';

const LazyLoginPage = loadable(() => import('./LoginForm'), {
	fallback: <div className='loading' />,
});

export default () => <LazyLoginPage />;
