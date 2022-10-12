import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Home from './component/Home/Home';
import Singleitem from './component/Home/Singleitem/Singleitem';
import Nav from './component/Layout/Nav/Nav';
import Notexist from './component/Notexist/Notexist';
import Chart from './component/Status/Chart/Chart';
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
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz")
        },
        {
          path: '/home/:id',
          element: <Singleitem></Singleitem>,
          loader: ({ params }) => {
            const { id } = params
            return fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
          }
        },
        {
          path: "/status",
          element:<Status></Status>,
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
      ])
    },
    {
        path: '*',
        element:<Notexist></Notexist>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
