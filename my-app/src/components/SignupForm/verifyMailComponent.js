import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import logoImage from '../../Assets/logofersound.png';
import emailjs from '@emailjs/browser';
import {
    MDBBtn, MDBInput
}
    from 'mdb-react-ui-kit';
import './signup.css';

export default function VerifyMailComponent({ userEmail, step }) {
    const [token, setToken] = useState('');
    const [isEmailSent, setIsEmailSent] = useState('');

    useEffect(() => {
        const token = Math.floor(100000 + Math.random() * 900000);
        setToken(token);

        const form = document.createElement('form');
        form.style.display = 'none';  // Hide the form

        const data = {
            user_name: 'FerSound',
            email_form: userEmail,
            message: 'This is a test message.',
            token: token
        };

        for (const key in data) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = data[key];
            form.appendChild(input);
        }

        document.body.appendChild(form);

        emailjs.sendForm('service_dat9jgk', 'template_r9rfhet', form, '5TzEe988Nn5B6HCl5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        // Remove the form from the DOM after sending the email
        document.body.removeChild(form);
    }, [userEmail]);

    const handleVerifyOtp = () => {
        if (isEmailSent === '') {
            alert('Please enter OTP!');
        }
        else if (isEmailSent.length !== 6) {
            alert('OTP must be 6 digits!');
        }
        else if (token == isEmailSent) {

            step(-1);
        } else {
            alert('Wrong OTP!');
        }
    }



    return (
        <div className='Container' >
            <Row style={{ marginTop: "-20px" }}>
                <Col md={{ span: 4, offset: 4 }} style={{ display: "flex" }}>
                    <img src={logoImage} alt="logo" style={{ marginTop: "15px" }} />
                </Col>
            </Row>

            <p style={{ marginTop: "10px", fontStyle: "italic" }} >Step 3/3</p>
            <p className="text-white " style={{ marginTop: "-20px", fontStyle: "italic" }}>Verify Email Address</p>

            <h5 className="text-white text-center">We have sent an email to {userEmail} for verification. Please check your email to get OTP!</h5>
            <p className="text-white mb-3">Enter Verification Code: </p>
            <MDBInput wrapperClass='mb-4 w-100' type='text' size="lg" placeholder='OTP...' style={{ color: 'white' }} value={isEmailSent} onChange={(e) => setIsEmailSent(e.target.value)} />
            <hr className="my-4" />

            <div className="d-flex flex-column ">

                <MDBBtn size='lg' className="mx-auto" style={{ backgroundColor: "#1FDF64" }} onClick={handleVerifyOtp}  >
                    Verify OTP
                </MDBBtn>
            </div>
        </div>
    );
}
