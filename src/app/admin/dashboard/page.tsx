'use client'
import React, { useEffect } from 'react'
import Header from '../Header'

function Dashboard () {
  useEffect(() => {
    console.log('   >>> mount Dashboard');
    return () => {
      console.log('   <<< unmount Dashboard');
    }
  }, []);

  return (
    <React.Fragment>
      <Header />
      Dashboard
    </React.Fragment>
  )
}

export default Dashboard