import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense, createElement } from 'react';

import MainLayout from '../layouts/MainLayout';
import DashboardLayout from '../Layouts/DashboardLayout';

import PrivateRoute from './PrivateRouter';

const HomePage = lazy(() => import('../Pages/HomePage'));
const Login = lazy(() => import('../Pages/LoginPages'));
const TermsAndConditions = lazy(() => import('../Pages/TermsAndConditions'));
const PrivacyPolicy = lazy(() => import('../Pages/PrivacyPolicy'));
const RegisterPage = lazy(() => import('../Pages/RegisterPages'));

import Page404 from '../Pages/Page404';

const dashboardPages = ['Connections', 'Encounters', 'LikesYou', 'Profile', 'Settings', 'Payments', 'Notifications'];

const DashboardChildren = dashboardPages.map((page) => ({
    path: `/${page}`,
    element: (
        <Suspense fallback={null}>
            {createElement(lazy(() => import(`../Pages/DashboardPages/${page}.jsx`)))}
        </Suspense>
    ),
}));

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: (
                    <Suspense fallback={null}>
                        <HomePage />
                    </Suspense>
                ),
            }
        ],
    },
    {
        path: '/login',
        element: (
            <Suspense fallback={null}>
                <Login />
            </Suspense>
        ),
    },
    {
        path: '/terms',
        element: (
            <Suspense fallback={null}>
                <TermsAndConditions />
            </Suspense>
        ),
    },
    {
        path: '/privacy-policy',
        element: (
            <Suspense fallback={null}>
                <PrivacyPolicy />
            </Suspense>
        ),
    },
    {
        path: '/register',
        element: (
            <Suspense fallback={null}>
                <RegisterPage />
            </Suspense>
        ),
    },
    {
        path: "/",
        element: (
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>
        ),
        children: DashboardChildren,
    },
    {
        path: '/*',
        element: <Page404 />
    }
]);

export default Router;