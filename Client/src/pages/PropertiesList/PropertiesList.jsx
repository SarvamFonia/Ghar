import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './PropertyList.css'
const PropertiesList = () => {
    return (
        <>
            <Navbar page={'propertiesList'} />
            <div className="container-fluid">
                <div className='container pt-2 pb-2'>
                    <div className='row pt-5 pb-5'>
                        <div className='col-4'>
                            <div className='searchFilter'></div>
                        </div>
                        <div className='col-8'>
                            <div className='row'>
                                <div className="col-12">
                                    <h4>4456 Properties found</h4>
                                </div>
                            </div>

                            <div className='row'>
                                <div className="col-12">
                                    <div className='cardProperty'>
                                        <div className='propertyImg'>

                                        </div>
                                        <div className='propDesc'>
                                            <h4>Mathapathi Grand Heights</h4>
                                            <p>Property Type: Apartment</p>
                                            <h4>Beds: , Baths:</h4>
                                            <p>Square Feet :</p>
                                            <p>Agent</p>
                                            <h5>Price:</h5>
                                            <p>Description</p>
                                        </div>
                                        <div style={{ display: 'flex',flexFlow: 'column' }}>
                                                <button >Contact Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertiesList
