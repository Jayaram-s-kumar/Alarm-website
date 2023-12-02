import React from 'react'
import Alarm from '../../Components/Alarm/Alarm'
import './Allalarms.css'

function Allalarms() {
  return (
    <div className='alarmscont'>
        <Alarm time={"6:00 AM"} ringtone={"morning.mp3"} />
        <Alarm time={"7:00 AM"} ringtone={"glimpse.mp3"} />
        <Alarm time={"8:00 AM"} ringtone={"ringtone.mp3"} />
    </div>
  )
}


export default Allalarms