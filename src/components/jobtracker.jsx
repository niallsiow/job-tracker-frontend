import { useEffect, useState } from "react";


function Job({ jobInfo }){
    if (jobInfo) {
        return (
            <>
                <div>
                    <h2>Job Title: { jobInfo.title }</h2>
                    <h2>Company: { jobInfo.company }</h2>
                    <h2>Source: { jobInfo.source }</h2>
                    <h2>Stage: {jobInfo.stage }</h2>
                    <button>View</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </>
        )
    }
    else {
        return (<></>)
    }
}

function JobTracker(){
    const [jobInfoList, setJobInfoList] = useState([]);

    const [formTitle, setFormTitle] = useState("");

    const fetchJobInfoList = () => {
        fetch('http://localhost:8080/jobs')
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response);
                console.log(response[0]);
                setJobInfoList(response);
            })
    };

    useEffect(() => {
        fetchJobInfoList();
    }, []);

    const submitHandler = (e) => {
        const request = new Request("http://localhost:8080/jobs/create", {
                method: "POST",
                body: JSON.stringify({
                        title: formTitle
                    })
            });

        e.preventDefault();

        fetch(request)
            .then(response => console.log(response))
            .catch(error => console.log(error));

        setFormTitle("");
        fetchJobInfoList();
    }

    return (
        <>
            <h1>Job Tracker</h1>
            { jobInfoList.map((jobInfo) => {
                return <Job jobInfo={jobInfo} />
            })}

            <form onSubmit={submitHandler}>
                <label htmlFor="title">Job Title</label>
                <input name="title" id="title" value={formTitle} onChange={e => setFormTitle(e.target.value)}/>
                <button type="submit">Save</button>
            </form>
        </>
    );
}

export { JobTracker };