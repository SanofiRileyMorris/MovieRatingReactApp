import { createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home/Home'
import Login from './routes/Login/Login'
import ErrorPage from './routes/ErrorPage/ErrorPage'
import { Movie } from './components/Movie/Movie'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

export const getRoutes = () => [
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/error',
    element: <ErrorPage />,
  },
  {
    path: '/movie/:movieId',
    element: (
      <ProtectedRoute>
        <Movie />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
]
export const getRouter = () => createBrowserRouter(getRoutes())
