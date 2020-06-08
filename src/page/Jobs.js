import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import JobCard from '../components/JobCard'

export default function Jobs() {
    let [jobs, setJobs] = useState(null);

    const getData = async () => {
        let url =`${process.env.REACT_APP_BACKEND_SERVER_URL}/jobs`;
        let data = await fetch(url);
        let result = await data.json();
        setJobs(result);
        console.log("Jobs:", result);
      };
    
    useEffect(() => {
        getData();
    }, []);

    if (!jobs) {
        return(
            <div>
                Loading...
            </div>
        )
    }
    return (
        <div>
            <Container className="mt-2 mb-2">
                {jobs.map(item => <JobCard job={item} key={item.id} />)}
            </Container>
        </div>
    )
}
