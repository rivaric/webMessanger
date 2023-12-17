import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './pages/layout/Layout';
import { Login } from './pages/login/Login';
import { Messages } from './pages/messages/Messages';
import { Register } from './pages/register/Register';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Settings from './pages/settings/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'messages',
        element: <Messages />
      },
      {
        path: 'settings',
        element: <Settings />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
