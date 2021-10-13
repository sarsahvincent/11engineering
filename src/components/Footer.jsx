import React from "react";
import '../assets/css/footer.css'
import { Link } from 'react-router-dom'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';


let url = "https://www.linkedin.com/company/eleven-engineering-ltd"
const Footer = () => (

    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 m-b-30">
                                <div className="footer-title m-t-5 m-b-20 p-b-8">
                                    About us
                                </div>
                                <p className="white-text">
                                    Eleven Engineering Ltd is a reliable and professional company, providing excellent quality and innovative solutions, in a cost effective, timely matter.
                                </p>
                            </div>
                            <div className="col-md-3 m-b-30">
                                <div className="footer-title m-t-5 m-b-20 p-b-8">
                                    Quick Links
                                </div>
                                <div className="footer-links m-3">
                                    <Link to="/" className="text-blue ml-2 font-weight-bolder">Home</Link>
                                    <Link to="/about" className="text-blue ml-2 font-weight-bolder">About</Link>
                                    <Link to="/services" className="text-blue ml-2 font-weight-bolder">Services</Link>

                                </div>
                            </div>
                            <div className="col-md-3 m-b-30">
                                <div className="footer-title m-t-5 m-b-20 p-b-8">
                                    Contact Us
                                </div>
                                <div className="footer-links  m-3">
                                    <p className="text-white"><PhoneIcon /> (233) 204-741-258 / 546-773-480</p>
                                    <p className="text-white"><MailIcon /> 11engineerltd@gmail.com</p>
                                    
                                    <p>P. O. Box AT 2374 Achimota-Accra, GA/R</p>
                                </div>
                            </div>
                            <div className="col-md-3 m-b-30">
                                
                                <div className="footer-links  m-3">
                                    <a href={url} target="_blank" className="text-white" rel="noreferrer"><LinkedInIcon /></a>

                                </div>
                            </div>

                        </div>
                    </div>
                </footer>
                <div className="footer-bottom">
                    Copyright © 2021, All Rights Reserved
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
