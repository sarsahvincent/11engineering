import React from 'react'
import { Card } from 'react-bootstrap';
import training from '../assets/images/training.jpg'
import training1 from '../assets/images/training1.jpg'
import '../assets/css/training.css'

function Training() {
    return (
        <>
            <Card className='m-2'>
                <Card.Img variant="top" src={training} />
                <Card.Body>
                    <Card.Text>
                        Eleven Engineering Ltd also provide Training and access company workers and individual on the following welder skill training short courses in;
                        <section className="d-flex">
                            <ul className="font-weight-bold">
                                <li>Shield Metal Arc Welding (SMAW)</li>
                                <li>Gas Tungsten Arc Welding (TIG)</li>
                                <li> Gas Metal Arc Welding (GMAW)</li>
                            </ul>
                            <ul className="font-weight-bold">
                                <li> Flux Core Arc Welding (FCAW)</li>
                                <li> Metal Core Arc Welding (MCAW)</li>
                            </ul>
                        </section>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card className='m-2 training_card'>
                <Card.Img variant="top" src={training1} />
                <Card.Body>
                    <Card.Text >
                        <Card.Title className=' training_card_heading'>Courses</Card.Title>
                        <section className="d-flex">
                            <ul className="font-weight-bold">
                                <li>SMAW(PLATE) BASIC</li>
                                <li>SMAW(PLATE) ADVANCE</li>
                                <li>SMAW(PIPE) 2G,3G,5G</li>
                                <li>SMAW(PIPE) 6G</li>
                                <li>TIG(PLATE) BASIC</li>
                                <li>TIG(PLATE) ADVANCE</li>
                                <li> FCAW (PLATE)</li>
                            </ul>
                            <ul className="font-weight-bold">
                                <li>TIG/FCAW(PIPE) 2G, 3G, 5G</li>
                                <li>GMAW(PLATE) BASICE</li>
                                <li>TIG(PIPE) 2G,3G,5G</li>
                                <li>SMAW(PIPE) 6G</li>
                                <li>TIG(PIPE) 6GC</li>
                                <li>GMAW(PLATE) ADVANCE</li>
                                <li>GMAW/FCAW(PIPE) 2G,3G,5G</li>
                                <li> GMAW/FCAW(PIPE) 6G</li>
                            </ul>
                        </section>
                    </Card.Text>
                </Card.Body>
            </Card>
           

        </>
    )
}

export default Training
