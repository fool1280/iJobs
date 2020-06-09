import React, { useState, useEffect } from 'react'
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import JobCard from '../components/JobCard'
import { useHistory, useLocation } from "react-router-dom";

const QUERYSTR_PREFIX = "q";

export default function Jobs() {
    let query = useQuery();
    let history = useHistory();
    let originalJobs;
    let [jobs, setJobs] = useState(null);

    let keyword = "";

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    const handleSearch = (e) => {
        let filteredJobs = jobs;
        if (e) {
            e.preventDefault();
            history.push(`/jobs/?${QUERYSTR_PREFIX}=${encodeURIComponent(keyword)}`);
        }
        if (keyword) {
            filteredJobs = jobs.filter(job =>
            job.title.toLowerCase().includes(keyword.toLowerCase())
        );
        }
        setJobs(filteredJobs);
    };

    const getData = async () => {
        let url =`${process.env.REACT_APP_BACKEND_SERVER_URL}/jobs`;
        let data = await fetch(url);
        let result = await data.json();
        setJobs(result);
        originalJobs = result;
        console.log(originalJobs);
        console.log("Jobs:", result);
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        handleSearch();
    }, [originalJobs]);

    if (!jobs) {
        return(
            <div>
                Loading...
            </div>
        )
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand>iJobs</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline className="ml-auto">
                    <FormControl type="text" onChange={e => {keyword = e.target.value;}} placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success" onClick={(e) => handleSearch(e)}>Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
            <Container className="mt-2 mb-2">
                {jobs.map(item => <JobCard job={item} key={item.id} />)}
            </Container>
        </div>
    )
}
