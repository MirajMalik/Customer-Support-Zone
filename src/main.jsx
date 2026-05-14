import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import Analytics from './components/Analytics/Analytics';
import Root from './components/Root/Root';
import App from './App';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children : [
      { index: true, element: <App /> },
      { path: 'analytics', element: <Analytics /> },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
