import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Contact from "./pages/Contact"
import './index.css'
function App() {
  const router=createBrowserRouter([
    {
      path: "/",
      element:<Navbar/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        }
      ]


    }
  

  ])
  return (
   <>
   <RouterProvider router={router}/>
   </>
  );
}

export default App;
