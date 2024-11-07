import React, { useContext } from 'react'
import { AlarmContext } from '../Context/AlarmContext';


export default function Alarm() {
  const {alarmData} = useContext(AlarmContext);

  return (
    <strong>테마 : {alarmData.theme}</strong>
  )
}
