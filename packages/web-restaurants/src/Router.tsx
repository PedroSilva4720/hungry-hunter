import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginComponent } from './pages/login';

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <h1>Hello world!</h1>,
    },
    {
      path: '/login',
      element: <LoginComponent />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
