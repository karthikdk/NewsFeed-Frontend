import React from "react"
import { Button, Card, ListGroup } from "react-bootstrap"
import image from '../images/toi.jpg'


const NewsArticle = (props) => {
    const {title,pubDate,link,description} = props
    return (
    <Card style={{ width: '244px'}} className="bg-dark text-light my-3 mx-3 d-inline-block">
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title.slice(0,50)}</Card.Title>
      <Card.Text>
       {description?description.slice(0,30):"...."}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item><p className="card-text" style={{fontSize:'16px'}}>Published : {pubDate?.split('T').join(' at ')} +5:30 IST</p></ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href={link} target="_blank" style={{textDecoration:'none'}}><Button variant="info">full details</Button></Card.Link>
    </Card.Body>
    </Card>
    )
}

export default NewsArticle