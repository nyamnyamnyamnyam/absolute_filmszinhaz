import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Header from './components/Header.jsx'
import Home from './Pages/Home.jsx'
import Movies from './Pages/Movies.jsx'
import NotFound from './Pages/NotFound.jsx'
import SearchMedia from './Pages/SearchMedia.jsx'
import Tvshows from './Pages/Tvshows.jsx'


const myrouter = createBrowserRouter([
  {
    element: <Header/>,
    children: [
      {path: '/', element: <Home/>},
      {path: '/movies', element: <Movies/>},
      {path: '/tv', element: <Tvshows/>},
      {path: '/search', element: <SearchMedia/>},
      {path: '*', element: <NotFound/>},
    ]
  }
])

function App() {
  return <RouterProvider router = {myrouter}/>
}

export default App
