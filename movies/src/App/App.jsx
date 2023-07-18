import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from 'pages/Home';
import AboutUsPage from 'pages/AboutUs';
import ContactsPage from 'pages/Contacts';
import RootLayout from 'pages/RootLayout';
import ErrorPage from 'pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutUsPage /> },
      { path: 'contacts', element: <ContactsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
