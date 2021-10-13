import React from 'react'
import Footer from '../components/Footer';
import ServicesCooverpage from '../components/ServicesCoverpage'
import { Card, Container } from 'react-bootstrap';
import oil_gas from '../assets/images/oil&gas.jpg'
import '../assets/css/services.css'
import Services from '../components/Services'
import Inspection from '../components/Inspection'


function services() {
  return (
    <div className='training_page'>
      <ServicesCooverpage />
      <section className='bg-white'>
        <Container>
        <h3 className='font-weight-bolder mt-4 service_header'>Our Services</h3>
        </Container>
        <div className='container'>
          <Services />
        </div>
        <Container>
        <h3 className='font-weight-bolder mt-4 service_header'>Our Inspection</h3>
        </Container>
        <div className='container'>
          <Inspection />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default services
