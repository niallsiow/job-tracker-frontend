import { useEffect, useState } from "react";


function Job({ jobInfo }){
    if (jobInfo) {
        return (
            <>
            <h2>Job Title: { jobInfo.title }</h2>
            <h2>Company: { jobInfo.company }</h2>
            <h2>Source: { jobInfo.source }</h2>
            <h2>Stage: {jobInfo.stage }</h2>
        </>
        )
    }
    else {
        return (<></>)
    }
}

function JobTracker(){
    const [jobInfoList, setJobInfoList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080')
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response);
                console.log(response[0]);
                setJobInfoList(response);
            })
    }, []);

    return (
        <>
            <h1>Job Tracker</h1>
            { jobInfoList.map((jobInfo) => {
             return <Job jobInfo={jobInfo} />
            })}

            <form action="http://localhost:8080" method="post">
                <label htmlFor="title">Job Title</label>
                <input name="title" id="title"/>
                <button type="submit">Save</button>
            </form>
        </>
    );
}

export { JobTracker };