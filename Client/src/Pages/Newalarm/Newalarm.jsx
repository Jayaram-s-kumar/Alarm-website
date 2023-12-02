import React, { useState } from 'react'
import "./Newalarm.css"
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import Button from '@mui/material/Button';

function Newalarm() {

    const [selectedTime, setSelectedTime] = useState(dayjs('2022-04-17T00:00'));
    const handleTimeChange = (newTime) => {
        setSelectedTime(newTime);
        // You can perform additional actions with the new time if needed
        console.log('Selected Time:', newTime.format('HH:mm'));
    };

    const handleOkClick = () => {
        // Perform actions when OK button is clicked
        console.log('OK button clicked. Selected Time:', selectedTime.format('HH:mm'));
    };

    const handleCancelClick = () => {
        // Perform actions when CANCEL button is clicked
        console.log('CANCEL button clicked. Previous Selected Time:', selectedTime.format('HH:mm'));
    };


    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                    components={[
                        'StaticTimePicker',
                    ]}
                >

                    <DemoItem>
                        <StaticTimePicker defaultValue={dayjs('2022-04-17T00:00')} value={selectedTime} onChange={handleTimeChange} />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
            <div className="buttonsbox">
                <Button onClick={handleOkClick}>
                    CANCEL
                </Button>
                <Button onClick={handleCancelClick}>
                    OK
                </Button>
            </div>
        </>
    );
}

export default Newalarm