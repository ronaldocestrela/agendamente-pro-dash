import { Outlet, ScrollRestoration } from 'react-router';

const App = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);

export default App;
