import React from 'react';
import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import logoImage from '../../Assets/logofersound.png';
import {
    MDBBtn, MDBInput
}
    from 'mdb-react-ui-kit';
import './signup.css';

export default function Profile({ step, setFullname, setGender, setDob, fullname, gender, dob, username }) {
    const [message, setMessage] = useState('');
    const [usermsg, setUsermsg] = useState('');

    const handleBackClick = () => {
        step(1);
    };

    const handleSignupClick = () => {
        if (isPhoneNumber(username)) {
            step(3);
        }
    };

    const isPhoneNumber = (input) => {
        const phoneNumberRegex = /^\+?\d+$/;
        return phoneNumberRegex.test(input);
    };

    return (
        <div>

            <Row style={{ marginTop: "-20px" }}>
                <Col md={{ span: 4, offset: 4 }} style={{ display: "flex" }}>
                    <img src={logoImage} alt="logo" style={{ marginTop: "15px" }} />
                </Col>
            </Row>
            <p style={{ marginTop: "10px", fontStyle: "italic" }} >Step 2/3</p>
            <p className="text-white " style={{ marginTop: "-20px", fontStyle: "italic" }}>Tell us about yourself</p>

            <p style={{ display: message === '' ? 'none' : 'block', color: 'red', margin: '-15px 0px 5px 0px', fontSize: '17px' }}>{message}</p>


            <p className="text-white mb-3">Name</p>
            <MDBInput wrapperClass='mb-4 w-100' id='username' type='email' size="lg" placeholder='Fullname' style={{ color: 'white' }} value={fullname} onChange={e => setFullname(e.target.value)} />


            <div>
                <p className="text-white mb-3">Gender:</p>
                <Row>
                    <div className="col-md-3">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="maleCheckbox"
                                checked={gender === 'male'}
                                onChange={() => setGender('male')}
                            />
                            <label className="form-check-label text-white" htmlFor="maleCheckbox">
                                Male
                            </label>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="femaleCheckbox"
                                checked={gender === 'female'}
                                onChange={() => setGender('female')}
                            />
                            <label className="form-check-label text-white" htmlFor="femaleCheckbox">
                                Female
                            </label>
                        </div>
                    </div>
                </Row>

                <div>
                    <p style={{ display: usermsg === '' ? 'none' : 'block', color: 'red', margin: '-15px 0px 5px 0px', fontSize: '15px' }}>
                        {usermsg}
                    </p>
                </div>
            </div>

            <p className="text-white mb-3">Date of birth</p>
            <MDBInput
                wrapperClass="mb-4 w-100"
                id="dobInput"
                type="date"
                size="lg"
                placeholder="Select date of birth"
                style={{ color: 'white' }}
                value={dob}
                onChange={(e) => setDob(e.target.value)}
            />
            <p style={{ display: usermsg === '' ? 'none' : 'block', color: 'red', margin: '-15px 0px 5px 0px', fontSize: '15px' }}>
                {usermsg}
            </p>

            <hr className="my-4" />

            <div className='row'>
                <Col md={4}>
                    <MDBBtn size='lg' style={{ backgroundColor: "#1FDF64" }} onClick={handleBackClick}>
                        Back
                    </MDBBtn>
                </Col>
                <Col md={{ span: 4, offset: 4 }}>
                    <MDBBtn size='lg' style={{ backgroundColor: "#1FDF64" }} onClick={handleSignupClick} >
                        Sign up
                    </MDBBtn>
                </Col>
            </div>

        </div>
    );
}

