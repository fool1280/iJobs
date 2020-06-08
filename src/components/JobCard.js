import React, { useState } from 'react'
import { Col, Row, Button, Collapse, Badge } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

const badgeVariant = ["primary", "success", "info", "secondary", "danger", "secondary"]

export default function JobCard(props) {
    let history = useHistory();
    const [open, setOpen] = useState(false);

    const formatDate = (time) => {
        let temp = new Date(time);
        temp = temp.toDateString();
        return (temp)
    }
    
    const handleClick = (id) => {
        history.push(`/jobs/${id}`);
    }

    let item = props.job;
    console.log(item);
    
    return (
        <div>
          <Row className="border border-dark m-5 p-5 bg-dark text-white">
              <Col md={2}>
                <img src={item.img} style={{width: "80%"}}></img>
              </Col>
              <Col md={8}>
                <Row className="flex-column">
                    <h3>{item.title} {item.isHotjob ? (<Badge variant="warning">Hot Job</Badge>) : ""}</h3>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="job-description"
                        aria-expanded={open}
                        variant="info"
                        size="sm"
                        className="w-25"
                    >
                        Job Description
                    </Button>
                    <Collapse in={open} className="mt-2">
                        <div id="job-description">
                            {item.description}
                        </div>
                    </Collapse>
                </Row>
                <Row className="mt-3">
                    <h5>Salary: ${item.salary}</h5>
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
              <Col md={2} className="d-flex flex-column justify-content-center align-items-center border-left border-white">
                    <h3>{item.city}</h3>
                    <p>District {item.district}</p>
                    <h3>Posted at:</h3>
                    <p>{formatDate(item.time)}</p>
                    <Button className="btn-block" variant="success" onClick={() => handleClick(item.id)}>
                        Apply
                    </Button>
              </Col>
          </Row>
        </div>
    );
}
