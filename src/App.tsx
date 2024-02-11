import Loading from 'components/Loading';
import React, { Suspense } from 'react';

const AppRoutes = React.lazy(() => import('./components/Routes'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <AppRoutes />
    </Suspense>
  );
}

export default App;
