import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Details(props) {
    const { id } = useParams();
    console.log("Props", props)

    const getDetails = async() => {
        let url = `${process.env.REACT_APP_BACKEND_SERVER_URL}/jobs/${id}`;
        let data = await fetch(url);
        let result = await data.json();
        console.log("Show result", result);
    }

    useEffect(() => {
        getDetails();
    }, [])

    return (
        <div>
            <h1>This is details page!</h1>
            <h2>Your ID is {id}</h2>
        </div>
    )
}
