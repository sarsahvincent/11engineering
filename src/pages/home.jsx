import React from 'react'
import { Link } from 'react-router-dom'
import CoverPage from '../components/CoverPage'
import { Container, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Training from '../components/Training';
import Design from '../components/Design';

function home() {
    return (
        <div className="home_page">
            <CoverPage />
            <section className='bg-white'>
                <Container>
                    <Card.Body >
                        <Card.Title className="text-center text-dark">
                            <h3 className='font-weight-bolder'>Our Services</h3></Card.Title>
                    </Card.Body>
                </Container>
                <div className='container '>
                    <Card className="m-3 card_home">
                        <Card.Body className="card_home">
                            <Card.Title className="text-white">Mineral Processing</Card.Title>
                            <Card.Text className='text-white'>
                                Extracting and processing sand, aggregates, and minerals take a
                                heavy toll on the condition of equipment. We specialize in providing
                                services to the mineral processing industry which can help to ...

                                <Link to="services" className="text-blue ml-2 font-weight-bolder">Read more</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="m-3 card_home">
                        <Card.Body className="card_home">
                            <Card.Title className="text-white">Marine</Card.Title>
                            <Card.Text className='text-white'>
                                ECS marine services team is second to none. Our approved
                                welders specialize in modifications and repairs of all
                                classes of vessels. We offer complex or simple repairs
                                and maintenance on vessel hulls, piping, mechanical and
                                hydraulic systems.

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='container'>
                    <Card className="m-3 card_home">
                        <Card.Body className="card_home">
                            <Card.Title className="text-white">Field</Card.Title>
                            <Card.Text className='text-white'>
                                Our wide range of field services is second to none. Each of ou
                                r field technicians is thoroughly skilled with Structural welding,
                                Pipe welding rubber lining and coatings applications, modification
                                s and repairs...
                                <Link to="services" className="text-blue ml-2 font-weight-bolder">Read more</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="m-3 card_home">
                        <Card.Body className="card_home">
                            <Card.Title className="text-white">Oil & Gas</Card.Title>
                            <Card.Text className='text-white'>
                                Without protective coatings and linings, sea water can rapidly
                                corrode equipment the oil and gas industry require during the
                                extraction and refining process. Our company offers top-of-the-line
                                coatings, ...
                                <Link to="services" className="text-blue ml-2 font-weight-bolder">Read more</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </section>
            <section className='bg-white'>
                <Container className=''>
                    <Card.Body >
                        <Card.Title className="text-center text-dark">
                            <h3 className='font-weight-bolder'>Quality Training & Certification</h3></Card.Title>

                    </Card.Body>
                </Container>


                <div className='container'>
                    <Training />
                </div>
                <Container>
                    <Card className="mb-2">
                        <Card.Body className='trainign_info about_info'>Welding qualification Test Record to
                            CSA W59.1/ ASTM A381-96. All Training conductor
                            by Canadian Welding Bureau (CWB) & America Welding Society (AWS)
                            Certified Welding Inspector /Instructor.</Card.Body>
                    </Card>
                </Container>

            </section>
            <section className='bg-white'>
                <Container className='mb-0'>
                    <Card.Body>
                        <Card className="text-center text-dark mt-4">
                            <h3 className='font-weight-bolder m-3'>
                                World-class <span className='text-danger'>
                                    AutoCad,</span> <span className='text-primary' >Blue Print, </span>
                                <span className="text-success">Architecture, </span>
                                <span className='text-warning'>Photoshop, </span> <span> & </span>
                                <span className='text-info'>Logo design</span>
                            </h3>
                        </Card>
                    </Card.Body>
                </Container>
                <Container>
                    <Card className="mb-2">
                        <Card.Body className='trainign_info about_info'><strong className='text-drak font-weight-bolder'>Eleven Engineering Ltd </strong>
                            <span> has professional design engineers who offers both 2D and 3D drawings used in construction and manufacturing, 
                                blueprints for engine valves and engine spare parts for manufacturing. It also offers services in Image writing, Website Design and Development, and Branding </span>
                        </Card.Body>
                    </Card>
                </Container>
                <div className='container'>
                    <Design />
                </div>
            </section>
            <section className='bg-white'>
                <Container>
                    <Card.Body >
                        <Card.Title className="text-center text-dark"><h3 className='font-weight-bolder'>Our Inspection</h3></Card.Title>
                    </Card.Body>
                </Container>
                <div className='container '>
                    <Card className="m-3 card_home">
                        <Card.Body className="card_home">
                            <Card.Title className="text-white">Highway Tank</Card.Title>
                            <Card.Text className='text-white'>
                                The CSA-B620 standard sets out the requirements for design, construction,
                                certification, assembly, modification, repair, testing, inspection,
                                periodic re-testing, maintenance, and marking of highway tanks (tank trucks) ...
                                <Link to="/services" className="text-blue ml-2 font-weight-bolder">Read more</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="m-3 card_home">
                        <Card.Body className="card_home">
                            <Card.Title className="text-white">Vendor</Card.Title>
                            <Card.Text className='text-white'>
                                Unlike many other industrial sectors, large construction
                                projects in oil & gas, refinery, petrochemical and power
                                industries involve the purchase of a vast number of
                                critical items supplied by many different manufacturers
                                around the world ...
                                <Link to="/services" className="text-blue ml-2 font-weight-bolder">Read more</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='container'>
                    <Card className="m-3 card_home">
                        <Card.Body className="card_home">
                            <Card.Title className="text-white">Welding</Card.Title>
                            <Card.Text className='text-white'>
                                for Modular and Skid Welding Building modification and frame construction
                                relies on proper welding techniques. Improvements in welding techniques
                                have allowed for a greater range of architectural and industrial design options. ...
                                <Link to="services" className="text-blue ml-2 font-weight-bolder">Read more</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="m-3 card_home">
                        <Card.Body className="card_home">
                            <Card.Title className="text-white">QA/QC</Card.Title>
                            <Card.Text className='text-white'>
                                Eleven Engineering Ltd have a Certified AWS and CWB Inspectors. We provide inspection services
                                in Ghana and international ...
                                <Link to="services" className="text-blue ml-2 font-weight-bolder">Read more</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default home
