import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom';
import './index.css';
import App from './App';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ProjectPageLayout from './components/ProjectPageLayout/ProjectPageLayout';
import IBOSPage from './pages/IBOSPage/IBOSPage';

const AppLayout = () => (
    <>
        <ScrollRestoration />
        <Outlet />
    </>
);

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children:
            [{
                path: '/',
                element: <App />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/portfolio',
                element: <ProjectPageLayout />,
                errorElement: <ErrorPage />,
                children: [
                    {
                        path: 'ibos',
                        element: <IBOSPage />,
                        errorElement: <ErrorPage />,
                    },
                ],
            },
            {
                path: '*',
                element: <ErrorPage />,
                errorElement: <ErrorPage />,
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);