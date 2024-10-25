import React from 'react'
import Admin from './Admin'
import User from './User'
import Guest from './Guest'

export default function SimpleRouter({loginType}) {
  function Route() {
    switch (loginType) {
        case 'admin' : {
            return <Admin/>
        }
        case 'user' : {
            return <User/>
        }
        case 'guest' : {
            return <Guest/>
        }
        default : {
            return null;
        }
    }
  }

  return (
    <>
      {Route()}
    </>
  )
}
