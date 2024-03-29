import React, { Suspense } from 'react';

const LazyDashboardPage = React.lazy(() => import('./Dashboard'));

export default () => (
  <Suspense>
    <LazyDashboardPage />
  </Suspense>
);