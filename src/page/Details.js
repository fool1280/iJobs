import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row, Badge } from 'react-bootstrap'

const badgeVariant = ["primary", "success", "info", "secondary", "danger", "secondary"]

export default function Details(props) {
    const [item, setItem] = useState(null)
    const { id } = useParams();
    console.log("Props", props)

    const getDetails = async() => {
        let url = `${process.env.REACT_APP_BACKEND_SERVER_URL}/jobs/${id}`;
        let data = await fetch(url);
        let result = await data.json();
        console.log("Show result", result);
        setItem(result);
    }

    useEffect(() => {
        getDetails();
    }, [])

    if (!item) {
        return(
            <div>Loading...</div>
        )
    }

    return (
        <div>
          <Row className="border border-dark m-5 p-5 bg-dark text-white">
              <Col md={2}>
                <img src={item.img} style={{width: "80%"}}></img>
              </Col>
              <Col md={10}>
                <Row className="flex-column">
                    <h3>{item.title} {item.isHotjob ? (<Badge variant="warning">Hot Job</Badge>) : ""}</h3>
                </Row>
                <Row className="mt-3">
                    <h5>Job Description:</h5>
                    <p>{item.description}</p>
                </Row>
                <Row className="mt-3">
                    <h5>Salary: ${item.salary}</h5>
                </Row>
                <Row className="flex-row mt-2">
                    <h5>Benefits:</h5>
                    <ol>
                        {item.benefits.map((i, index) => <li key={index}>{i}</li>)}
                    </ol>
                </Row>
                <Row className="flex-row mt-2">
                    <h5>Skills:</h5>
                    <ol>
                        {item.tags.map((i, index) => {
                            return(
                                <Badge key={index} variant={badgeVariant[index]} className="mr-1">{i}</Badge>
                            )
                        })}
                    </ol>
                </Row>
              </Col>
          </Row>
        </div>
    )
}
