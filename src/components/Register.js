import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css"
export function Register() {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <DatePicker onChange={onChange} value={value} />
        </div>
    );
}