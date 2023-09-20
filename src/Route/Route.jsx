import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import About from '../pages/About/About';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Profile from '../pages/Dashboard/Profile';
import EditProfile from '../pages/Dashboard/EditProfile';

const myCreatedRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/products',
        element: <Products></Products>,
        loader: () => fetch('https://dummyjson.com/products'),
      },
      {
        path: '/product/:id',
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.id}`),
      },
      {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: '/dashboard',
            element: <Dashboard></Dashboard>,
          },
          {
            path: '/dashboard/profile',
            element: <Profile></Profile>,
          },
          {
            path: '/dashboard/editProfile',
            element: <EditProfile></EditProfile>,
          },
        ],
      },
      {
        path: '/about',
        element: <About></About>,
      },
    ],
  },
]);

export default myCreatedRoute;
