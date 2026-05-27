import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import HomeCards from './components/HomeCards'
import Card from './components/Card'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'
const App = () => {
  return (
    <>
    <Navbar/>
    <Hero title='Find your job' subtitle="Unless you are a coder." />    
    <HomeCards/>
    <JobListings/>
    <ViewAllJobs/>
    </>
  )
}

export default App
