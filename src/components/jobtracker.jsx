import { useEffect, useState } from "react";

function JobTracker(){
    const [title, setTitle] = useState("");

    useEffect(() => {
        fetch('http://localhost:8080')
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setTitle(response.title);
            })
    }), [];

    return (
        <>
            <h1>Job Tracker</h1>
            <h2>{ title }</h2>
        </>
    );
}

export { JobTracker };