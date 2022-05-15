import React, { useState, useEffect } from "react"
export function CvTest1() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("arbetsplats.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    return (
        <div className="App">
            {data.map((info) => (
                <>
                    {info.arbetsplats}<br></br>
                    {info.Om}<br></br>
                    {info.jstart} {info.jslut}<br></br>
                    {info.SysGrad}
                    <br></br><br></br>
                </>
            ))
            }
        </div>
    );
};