import React, { useState, useEffect } from "react";
function importCompnent() {
    const Home = () => {
        const [data, setData] = useState(null);
        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/todos")
                .then((res) => res.json())
                .then((data) => setData(data));
        }, []);
        return (
            <div style={{ padding: "15px" }}>
                {data &&
                    data.map((item) => {
                        return <p key={item.id}>{item.title}</p>;
                    })}
            </div>
        );
    };
}
export { importCompnent }