import React from 'react'
import { Card } from 'react-bootstrap';
import oilandgas from '../assets/images/oilandgas.jpg'
import mineral from '../assets/images/mineral.jpg'
import field from '../assets/images/field.jpg'
import marine from '../assets/images/marine.jpg'
import '../assets/css/training.css'

function Training() {
    return (
        <>
            <section>
                <Card className='m-2 training_card'>
                    <Card.Img variant="top" src={marine} />
                    <Card.Body>
                        <Card.Text >
                            <Card.Title className=' training_card_heading'>Marine</Card.Title>
                            ECS marine services team is second to none.
                            Our approved welders specialize in modifications
                            and repairs of all classes of vessels. We offer complex
                            or simple repairs and maintenance on vessel hulls, piping,
                            mechanical and hydraulic systems.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className='m-2'>
                    <Card.Img variant="top" src={mineral} />
                    <Card.Body>
                        <Card.Text>
                            <Card.Title className=' training_card_heading'>Mineral</Card.Title>
                            Extracting and processing sand, aggregates, and
                            minerals take a heavy toll on the condition of equipment.
                            We specialize in providing services to the mineral processing
                            industry which can help to combat the most common causes
                            of equipment malfunction, including abrasion, exposure to caustic
                            chemicals, corrosion and everyday wear.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>
            <section>
                <Card className='m-2 training_card'>
                    <Card.Img variant="top" src={oilandgas} />
                    <Card.Body>
                        <Card.Text >
                            <Card.Title className=' training_card_heading'>Oil & Gas</Card.Title>
                            Without protective coatings and linings, sea water
                            can rapidly corrode equipment the oil and gas industry
                            require during the extraction and refining process.
                            Our company offers top-of-the-line coatings, linings,
                            and other products to help prevent emergency shutdowns
                            to repair or replace parts.

                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card className='m-2'>
                    <Card.Img variant="top" src={field} />
                    <Card.Body>
                        <Card.Text>
                            <Card.Title className=' training_card_heading'>Field</Card.Title>
                            Our wide range of field services is second to none. Each of
                            our field technicians is thoroughly skilled with Structural welding,
                            Pipe welding rubber lining and coatings applications, modifications
                            and repairs. Our technicians can handle any repair or maintenance
                            work quickly using pre-cured or site-cured rubber sheeting.
                            In addition to installing, replacing and repairing your on-site equipment,
                            we offer service contracts for preventative maintenance which
                            can significantly extend the lifespan of your equipment.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>
        </>
    )
}

export default Training
