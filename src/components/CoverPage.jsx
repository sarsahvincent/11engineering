import React from 'react'
function CoverPage() {
    return (
        <div>
            <header className="py-5 coverpage"
            >
                <div className='container h-100'>
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-12"> 
                            <h2 className="display-4 text-white mt-5 mb-2 heading_one " >
                                Welcome to <br /> <span style={{ color: 'gold', fontSize: '3.1rem', fontWeight: '700', fontFamily: "initial", textShadow: "2px 2px black" }}>Eleven Engineering Ltd </span>
                            </h2>
                            <p className="lead mb-5 text-white welcome_text font-weight-bold">We offer solutions not problem</p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default CoverPage
