import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import ProjectPage from './components/ProjectPage/ProjectPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ProjectPageLayout from './components/ProjectPageLayout/ProjectPageLayout';

const router = createBrowserRouter([
    {
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
                element: <ProjectPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: 'anex',
                element: <ProjectPage />,
                errorElement: <ErrorPage />,
            }
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);