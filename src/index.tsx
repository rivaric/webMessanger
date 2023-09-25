import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './pages/layout/Layout';
import { Login } from './pages/login/Login';
import { Main } from './pages/main/Main';
import { Register } from './pages/register/Register';

import React from 'react';
import ReactDOM from 'react-dom/client';

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
        path: 'main',
        element: <Main />
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
