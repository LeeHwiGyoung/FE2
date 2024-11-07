import React, { createContext, useState } from 'react'

export const AlarmContext = createContext();

export const AlarmProvider = ({children}) => {
    const [alarmData, setAlarmData] = useState({
        theme : 'dark',
        fontSize : '16'
    })

    return (
      <AlarmContext.Provider value ={{alarmData}}>
        {children}
      </AlarmContext.Provider>
  )
}
