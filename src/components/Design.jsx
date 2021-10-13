import React from 'react'
import { Card } from 'react-bootstrap';
import autocard1 from '../assets/images/autocard1.jpg'
import autocard4 from '../assets/images/autocard4.jpg'
import logo1 from '../assets/images/logo1.jpeg'
import autocard3 from '../assets/images/autocard3.jpg'
import '../assets/css/training.css'

function Design() {
    return (
        <>
            <Card className='m-2 training_card'>
                <Card.Img variant="top" src={autocard1} />
            </Card>
            <Card className='m-2'>
                <Card.Img variant="top" src={logo1} />
            </Card>
            <Card className='m-2'>
                <Card.Img variant="top" src={autocard4} />
            </Card>
            <Card className='m-2'>
                <Card.Img variant="top" src={autocard3} />
            </Card>        
        </>
    )
}

export default Design
