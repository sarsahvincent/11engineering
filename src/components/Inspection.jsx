import React from 'react'
import { Card } from 'react-bootstrap';
import tank from '../assets/images/tank.jpg'
import qa from '../assets/images/qa.jpg'
import welding from '../assets/images/welding.jpeg'
import vendor from '../assets/images/vendor.jpg'
import '../assets/css/training.css'

function Training() {
    return (
        <>
            <section>
                <Card className='m-2 training_card'>
                    <Card.Img variant="top" src={tank} />
                    <Card.Body>
                        <Card.Text >
                            <Card.Title className=' training_card_heading'>Highway Tank Inspection</Card.Title>
                            The CSA-B620 standard sets out the requirements for design,
                            construction, certification, assembly, modification, repair,
                            testing, inspection, periodic re-testing, maintenance, and
                            marking of highway tanks (tank trucks) and TC portable tanks
                            for the transportation of dangerous goods. When it come to
                            tank inspection, think Eleven Engineering Ltd
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className='m-2'>
                    <Card.Img variant="top" src={vendor} />

                    <Card.Body>
                        <Card.Text>
                            <Card.Title className=' training_card_heading'>Vendor Inspection</Card.Title>
                            <p>
                                Unlike many other industrial sectors, large construction
                                projects in oil & gas, refinery, petrochemical and power
                                industries involve the purchase of a vast number of critical
                                items supplied by many different manufacturers around the world.
                            </p>

                            <p>
                                These items range from raw material to finished products.
                                The diversity of these items includes pipes and tubes;
                                equipment ranging from valves, process skids, pumps, turbines
                                , tanks, motors, control panels; components to boilers, motors,
                                engines for anything from lifting equipment to reactor vessels,
                                electrical and instrumentation equipment.
                            </p>


                            <p>
                                Any purchase carries embedded risk. If a part is faulty
                                and is not detected at the source, the risk of something
                                going wrong becomes embedded within the new asset, and will
                                have significant impact on the schedule of the projects.
                                Quality, Safety, and Schedule are keys for successful
                                execution of any project. It is of vital importance to
                                check at the vendor facility for the quality compliance
                                of every single item, no matter how small it is.
                            </p>
                            <p>
                                Our inspectors will identify and suggest solutions to problems
                                earlier in the supply process, saving you rework and replacement
                                costs as well as ensuring that your product or plant is delivered on time.
                            </p>
                            <h5 className="font-weight-bold">Why Vendor Inspection by Eleven Engineering</h5>
                            <p>
                                Our qualified local teams are familiar with inspection of different kinds of supplies such as materials, fabricated components, pressure equipment, machinery, electrical and instrumentation equipment.
                                We can ensure your products meet quality, health, environmental, safety, and social accountability standards for virtually any market around Ghana and International. We hold extensive network, agreements and our knowledge of expertise in overcoming regulatory, market, and supply chain hurdles are unrivaled.

                            </p>
                            <p>
                                Our qualified local teams are familiar with inspection of different kinds of supplies such as materials, fabricated components, pressure equipment, machinery, electrical and instrumentation equipment.
                                We can ensure your products meet quality, health, environmental, safety, and social accountability standards for virtually any market around Ghana and International. We hold extensive network, agreements and our knowledge of expertise in overcoming regulatory, market, and supply chain hurdles are unrivaled.
                            </p>
                            <p>
                                The complex supply chains need to be managed in a way that minimizes risk, reduces cost and delay, improves safety and quality, and ensures compliance with local and international standards. All these considerations make quality vendor inspection services essential.
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>
            <section>
                <Card className='m-2 training_card'>
                    <Card.Img variant="top" src={welding} />
                    <Card.Body>
                        <Card.Text >
                            <Card.Title className=' training_card_heading'>Welding Inspection</Card.Title>
                            <h5><strong className="font-weight-bold">Eleven Engineering Ltd also deliver the following structural steel welding services</strong></h5>
                            <p>
                                For Modular and Skid Welding Building modification and frame construction
                                relies on proper welding techniques. Improvements in welding techniques
                                have allowed for a greater range of architectural and industrial design options.
                                Processes such as arc welding can reduce the weight of your structure,
                                and our welders have the expertise to perform these services.
                            </p>

                            <p>
                                No matter how complex you think your project might be,
                                our team of engineers, designers and skilled craftsmen can provide a solution.
                            </p>

                            <h5 className="font-weight-bold">On-site Welding Services</h5>
                            <p>
                                We operate welding services throughout Ghana, and for certain
                                national projects. Our team is up to the task to perform the
                                range of welding services required for structural steel
                            </p>

                            <ul className="font-weight-bold">
                                <li>CWB Certified structural steel fabricator</li>
                                <li>structural steel for commercial buildingsSMAW(PLATE) ADVANCE</li>
                                <li>structural steel for industrial buildings</li>
                                <li>piling for bridges</li>
                                <li>piping modules</li>

                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='m-2'>
                    <Card.Img variant="top" src={qa} />
                    <Card.Body>
                        <Card.Text>
                            <Card.Title className=' training_card_heading'>QA/QC</Card.Title>
                            <p><strong>Eleven Engineering Ltd have a Certified AWS and CWB Inspectors. We provide inspection services in Ghana and international</strong></p>
                            <h5 className="font-weight-bold">Inspection Services</h5>

                            <section className="d-flex">
                                <ul className="font-weight-bold">
                                    <li>Project QA/QC (Welding, Piping, Mechanical, Civil and Structural)</li>
                                    <li>Welding Inspection (Piping, Pressure Vessel, Bridge, and Commercial Structures)</li>
                                    <li>CWB – Steel welding Inspection (CSA W 59)s</li>
                                    <li>Pipeline Inspection as per CSA Z 662</li>
                                    <li>In-Service Inspection (ABSA IPV and IBPV)</li>
                                    <li>ABSA Quality Manual Preparation and Audit Support</li>
                                    <li>Third Party Inspection (TPI) Services</li>
                                </ul>
                                <ul className="font-weight-bold">
                                    <li>API Inspection (API 510, 570 and 653)</li>
                                    <li>Mechanical Inspection (rotating and stationary equipment)</li>
                                    <li>Civil/Structural Inspection as per CSA S 16.1</li>
                                    <li> E & I Inspection</li>
                                    <li>Coating/Painting Inspection (NACE Level 1, 2 and 3)</li>
                                    <li>Progress Reporting and Pre-shipment Inspection</li>
                                </ul>
                            </section>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>
        </>
    )
}

export default Training
