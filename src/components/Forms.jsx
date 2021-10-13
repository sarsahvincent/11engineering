import React from 'react'

function Forms() {
    return (
        <div className="container contact-form">
            <div className="">

            </div>
            <form method="post">
                <h3 className="text-white">Drop Us a Message</h3>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="text" name="txtName" classNameName="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
                        </div>

                    </div>
                    <div className="col-md-16">
                        <div className="form-group">
                            <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{ width: "100%", height: "150px" }}></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Forms
