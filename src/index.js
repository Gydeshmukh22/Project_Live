import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Pages1/About';
import ContactUs from './Pages1/ContactUs';
import Solution from './Pages1/Solution';
import Staffing from './Pages1/Staffing';
import Training from './Pages1/Training';
import Team from './Pages1/Team';
import Login from './Pages1/Login';
import Resiatration from './Pages1/Resiatration';
import ProductServices from './Pages1/ProductServices';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/home', element: <App /> },
  { path: '/about', element: <About /> },
  { path: '/registration', element: <Resiatration /> },
  { path: '/training', element: <Training /> },
  { path: '/staffing', element: <Staffing /> },
  { path: '/solutions', element: <Solution /> },
  { path: '/team', element: <Team /> },
  { path: '/login', element: <Login /> },
  { path: '/contactus', element: <ContactUs /> },
  { path: '/productsandservises', element: <ProductServices /> },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
