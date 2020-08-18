import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import './Cards.module.css'
import CountUp from 'react-countup'

class Cards extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const {recovered,title,date,text,color}=this.props;
        return (
          <div >
          <Card style={{ width: '15rem', borderBottomColor:`${color}`,borderBottomWidth:"10px" }} className="cardBlock">
            <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
              <Card.Title><CountUp start={0} end={recovered} duration={2} separator={','}/></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{ (new Date().toDateString())}</Card.Subtitle>
              <Card.Text>
                {text}
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        )
    }
}

export default Cards
