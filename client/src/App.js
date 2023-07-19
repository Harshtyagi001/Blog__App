
import Topbar from "./components/Topbar/topbar";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import Settings from "./pages/Settings/settings";
import Single from "./pages/Single/single";
import Write from "./pages/Write/write";
import { useContext } from "react";
import { Context } from "./context/context";
// import { 
//   createBrowserRouter,
//     RouterProvider,
//     Outlet,
//     Router,
//     Route,
//     Routes,
//   } from "react-router-dom";
  
import {BrowserRouter as Router,
 Routes,
 Route,
 Link
} from 'react-router-dom'
  // const Layout=()=>{
  //   return(
  //     <div className='App'>
  //      <Topbar/>
  //      <Outlet/>
  //     </div>
  //   )
  // }

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element:<Layout/>,
  //     children:[
  //       {
  //         path:"/",
  //         element:<Home/>
  //       },
  //       {
  //         path: "/register",
  //         element: <Register/>,
  //       },
  //       {
  //         path: "/login",
  //         element: <Login/>,
  //       },
  //       {
  //         path: "/settings",
  //         element: <Settings/>,
  //       },
  //       {
  //         path: "/write",
  //         element: <Write/>,
  //       },{
  //         path: "/single/:postId",
  //         element: <Single/>,
  //       }
  //     ]
  //   }
  // ]);

function App() {
  const {user,loading,error,dispatch}=useContext(Context);
  return (
    <div className="App">
    {/* <Topbar/> */}
    {/* <Home/> */}
    {/* <Single/> */}
    {/* <Write/> */}
    {/* <Settings/> */}
    {/* <Login/> */}
    {/* <Register/> */}
    {/* <RouterProvider router={router} /> */}

    <Router>
      <Topbar/>
      <Routes>
        <Route path='/'
          element={<Home/>}/>
        <Route path='/register'
          element={user?<Home/>:<Register/>}/>
        <Route path='/login'
          element={user?<Home/>:<Login/>}/>
        <Route path='/settings'
          element={user?<Settings/>:<Register/>}/>
        <Route path='/write'
          element={user?<Write/>:<Register/>}/>
          <Route path='/single/:postId'
          element={<Single/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
