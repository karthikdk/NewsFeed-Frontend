import React from "react"
import { Button, Card } from "react-bootstrap"

const NewsArticle = (props) => {
    const {title,pubDate,link,description} = props
    return (
        <Card style={{ width: '365px',height:'220px'}} className="mb-3 my-3 mx-3 d-inline-block px-2 py-2 col-md-3 bg-dark text-light">
        <Card.Body>
          <Card.Title>{title.slice(0,50)}</Card.Title>
          <Card.Text>
            {description?description.slice(0,80):"...."}
          </Card.Text>
          <p className="card-text">Published : {pubDate?.split('T').join(' at ')} +5:30 IST</p>
          <Button variant="primary" href={link} target="_blank">More Details</Button>
        </Card.Body>
      </Card>
    )
}

export default NewsArticle