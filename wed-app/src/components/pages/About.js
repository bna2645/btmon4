import React from 'react';
import VMC from './inc/Vmc';


function Aboutus() {
    return (
        <div>
            <section className='py-4 bg-info'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 my-auto'>
                            <h4>Contact Us</h4>
                        </div>
                        <div className='col-md-8 my-auto'>
                            <h6 className='float-end'>
                                Home / Contact Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section bg-c-light border-bottom'>
                <div className='container'>
                    <h5 className='main-heading'>Our Company</h5>
                    <div className='underline'></div>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. </p>
                </div>
            </section>
            {/* Our vision, mission and values */}
            <VMC/>
        </div>
        
    );
}

export default Aboutus;