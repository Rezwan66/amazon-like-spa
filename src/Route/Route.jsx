import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import About from '../pages/About/About';
import Dashboard from '../pages/Dashboard/Dashboard';
import ProductDetails from '../pages/ProductDetails/ProductDetails';

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
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
    ],
  },
]);

export default myCreatedRoute;
