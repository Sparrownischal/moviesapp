import React, { useState, useEffect } from 'react';
import { Row, Container } from 'react-bootstrap';
import profile from '../assets/images/nischal-swoyambhu.jpg'

const UserHome = () => {

    return (
        <Container className='container dashboard'>
            <Row>
                <div className='col-md-4'>
                    <img src={profile} className='profile' alt="Profile pic" />
                </div>
                <div className='col-md-6 text-start'>
                    <p><strong>Hello, Nischal Sapkota</strong> </p>
                    <p><strong>Email:</strong> ns@gmail.com</p>
                    <p>Welcome to our app! We're excited to have you on board.</p>
                    
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>

                </div>
            </Row>

        </Container>
    )

}

export default UserHome;