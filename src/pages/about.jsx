import React from 'react'
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';
import '../assets/css/services.css'
import { Card, } from 'react-bootstrap';
import About from '../components/About'
import AboutCoverpage from '../components/AboutCoverpage'


function about() {
    return (
        <div className='training_page'>
            <AboutCoverpage />
            <section className='bg-white'>
                <Container>
                    <Card className='mt-4'>
                        <Card.Body className=' about_info' >Eleven Engineering Ltd is a reliable
                            and professional company, providing excellent quality and innovative
                            solutions, in a cost effective, timely matter. We have been providing
                            welding, machining, mechanical and fabrication services to Ghana and
                            International customers. Our primary focus is in the oil, gas and
                            construction sectors. Eleven Engineering Ltd has experience in prototyping,
                            General Engineering Services, Petroleum Pipeline Servicing, Welding and
                            Fabrication, Training and Development, Engineering Consultancy Services,
                            Hydraulics, Commercial Construction, and Underground Services</Card.Body>
                    </Card>
                </Container>
                <div className='container'>
                    <About />
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default about
