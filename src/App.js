import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Home from './component/Home/Home';
import Nav from './component/Layout/Nav/Nav';
import Status from './component/Status/Status';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav></Nav>,
      children: ([
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/status",
          element: <Status></Status>
        },
        {
          path: "/blog",
          element:<Blog></Blog>
        }
      ])
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
