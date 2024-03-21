import Body from "./components/Body";
import Header from "./components/Header";
import {  createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo";
import SearchContainer from "./components/SearchContainer";
import { Outlet } from 'react-router-dom'



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children:[ 
          {
          path: "/",
          element: <MainContainer />
          },
          {
          path: "/watch",
          element: <WatchVideo />
          },
          {
          path: "/results",
          element: <SearchContainer />
          },
      ]
      }
    ]
  }
])
function App() {
  return (
    
    <div className="">
       <Header />
       <Outlet />
       
    </div>
  );
}

export default App;
