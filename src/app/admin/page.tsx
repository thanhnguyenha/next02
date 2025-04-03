'use client'
import React, { useEffect } from 'react'
import Header from './Header';

const Admin = () => {

  useEffect(() => {
    console.log('   >>> mount Home Admin');
    return () => {
      console.log('   <<< unmount Home  Admin');
    }
  }, []);

  return (
    <React.Fragment>
      <Header />
      Admin
    </React.Fragment>
  )
}

export default Admin;