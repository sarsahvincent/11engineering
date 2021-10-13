import React from 'react'
import { Card } from 'react-bootstrap';
import '../assets/css/training.css'

function Training() {
    return (
        <>
            <Card className='m-2'>
                <Card.Body>
                    <Card.Text >
                        <Card.Title className=' training_card_heading about_info'>OUR MISSION</Card.Title>
                        Eleven Engineering Ltd is committed to providing the highest quality
                        of work. Done right, the first time, on time. We will have our client
                        s up and running, to meet deadlines.
                    </Card.Text>
                </Card.Body>
              
            </Card>
            <Card className='m-2'>
                <Card.Body>
                    <Card.Text >
                        <Card.Title className=' training_card_heading about_info '>OUR VISION</Card.Title>
                        A company that provides many aspects of metal, in house, such as welding,
                        machining, forming, custom and production work. We are built on a solid
                        reputation and our strong commitment to our clients. We increase market
                        share through determination. When a customer wants something made or repaired,
                        large or small, we want them to think of Eleven Engineering Ltd.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Training
