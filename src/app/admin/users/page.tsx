'use client'
import React, { useEffect } from 'react'
import Header from '../Header'

function UserManage () {
  useEffect(() => {
    console.log('   >>> mount User manage');
    return () => {
      console.log('   <<< unmount User manage');
    }
  }, []);

  return (
    <React.Fragment>
      <Header />
      UserManage
    </React.Fragment>
  )
}

export default UserManage