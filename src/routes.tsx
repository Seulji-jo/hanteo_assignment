import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import Layout from './layout';
import Chart from './pages/Chart';
import Whook from './pages/Whook';
import Events from './pages/Events';
import News from './pages/News';
import Store from './pages/Store';
import ChargingStation from './pages/ChargingStation';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, element: <Navigate to="/chart" replace /> },
      { path: 'chart', Component: Chart },
      { path: 'whook', Component: Whook },
      { path: 'events', Component: Events },
      { path: 'news', Component: News },
      { path: 'store', Component: Store },
      { path: 'charging', Component: ChargingStation },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
