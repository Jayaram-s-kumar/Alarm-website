import React ,{useState} from 'react'
import './Alarm.css'
import { Switch, Space } from 'antd';
import {DeleteTwoTone} from '@ant-design/icons';
function Alarm(props) {

    const [on, setOn] = useState(true)
    const togglealarm =()=>{
        console.log("hello")
        setOn(!on)
    }


    return (
        <div className={on ? "alarmbox" : "alarmbox togglealarm"}>
            <h3>{props.time}</h3>
            <p className='ring'>🎶{props.ringtone}</p>
            <Space direction="vertical">
                <Switch checkedChildren="ON" unCheckedChildren="OFF" defaultChecked onClick={togglealarm} />
        
            </Space>
           {on &&  <DeleteTwoTone />}
        </div>
    )
}

export default Alarm