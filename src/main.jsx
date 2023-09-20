import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import myCreatedRoute from './Route/Route';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: '/',
//         element: <Home></Home>,
//       },
//       {
//         path: '/products',
//         element: <Products></Products>,
//       },
//       {
//         path: '/about',
//         element: <About></About>,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>
);
