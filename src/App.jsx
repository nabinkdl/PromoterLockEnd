import React, { useEffect } from 'react'
import Table from './Table'
import ReactGA from 'react-ga'
import Contributors from './Contributors'

const TRACKING_ID = "UA-284093981-1"

ReactGA.initialize(TRACKING_ID);



function App() {

  useEffect(() => {ReactGA.pageview(window.location.pathname)},[])

  return (
    <>
    <Table/>
    <Contributors/>
    </>
  )
}

export default App