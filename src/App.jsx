import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import React from 'react'
import MainLayout from './layouts/MainLayout'
import HomePage from './Pages/HomePage'
import JobsPage from './Pages/JobsPage'
import NotfoundPage from './Pages/NotfoundPage'
const router = createBrowserRouter( //creating a router using react-router-dom
  createRoutesFromElements(
    <Route path = '/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/> //index means home page
      <Route path = '/jobs' element={<JobsPage/>}/>
      <Route path = '*' element={<NotfoundPage/>}/>
    </Route>
  )
)


const App = () => {
  return <RouterProvider router={router}/>;
}

export default App
