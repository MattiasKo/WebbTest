import { useState, useEffect } from "react";
export function Myportfolio() {
    const [name, setName] = useState([]);
    const [IsLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://api.github.com/users/mattiasko/repos')
            .then(res => res.json())
            .then(data => {
                setName((LApi) => [
                    LApi,
                    {
                        name: data[0].name,
                        description: data[0].description,
                        html_url: data[0].html_url
                    },
                    {
                        name: data[6].name,
                        description: data[6].description,
                        html_url: data[6].html_url
                    },
                    {
                        name: data[9].name,
                        description: data[9].description,
                        html_url: data[9].html_url
                    }
                ]
                );
                setIsLoading(false);
            });
    }, []);
    return (
        <div className="App">
            {IsLoading && <div><h2>Laddar Portfolio...</h2></div>}
            {name.map((info) => (
                <>
                    {info.name}<br></br>
                    {info.description}<br></br>
                    <a href={info.html_url}>{info.html_url}</a>
                    <br></br><br></br>
                </>
            ))
            }
        </div>
    )

}