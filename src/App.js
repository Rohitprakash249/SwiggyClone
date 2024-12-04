
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./RootLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/restaurants",
        element: <h1> Restaurants </h1>,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

 

// import React from "react";

// function App() {
//   return (
  
//   );
// }

// export default App;
