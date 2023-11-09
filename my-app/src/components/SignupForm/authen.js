import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import logoImage from '../../Assets/logofersound.png';
import {
    MDBBtn, MDBInput
}
    from 'mdb-react-ui-kit';
import './signup.css';

export default function Authen({ step, setUsername, setPassword, username, password }) {
    const [usermsg, setUsermsg] = useState('');
    const [passmsg, setPassmsg] = useState('');

    const handleNextClick = () => {
        if (username && password) {
            setUsername(username);
            setPassword(password);
            step(2);
        } else {
            setUsermsg(username ? '' : 'Username is required');
            setPassmsg(password ? '' : 'Password is required');
        }
    };


    return (
        <div >
            <Row style={{ marginTop: "-20px" }}>
                <Col md={{ span: 4, offset: 4 }} style={{ display: "flex" }}>
                    <img src={logoImage} alt="logo" style={{ marginTop: "15px" }} />
                </Col>
            </Row>

            <p style={{ marginTop: "10px", fontStyle: "italic" }} >Step 1/3</p>
            <p className="text-white " style={{ marginTop: "-20px", fontStyle: "italic" }}>Create user name & password</p>

            <p className="text-white mb-3">Email or username</p>
            <MDBInput wrapperClass='mb-4 w-100' id='username' type='email' size="lg" placeholder='Email or username' style={{ color: 'white' }} value={username} onChange={e => setUsername(e.target.value)} />
            <p style={{ display: usermsg === '' ? 'none' : 'block', color: 'red', margin: '-15px 0px 5px 0px', fontSize: '15px' }}>{usermsg}</p>

            <p className="text-white mb-3">Password</p>
            <MDBInput wrapperClass='mb-4 w-100' id='password' type='password' size="lg" placeholder='Password' style={{ color: 'white' }} value={password} onChange={e => setPassword(e.target.value)} />
            <p style={{ display: passmsg === '' ? 'none' : 'block', color: 'red', margin: '-15px 0px 5px 0px', fontSize: '15px' }}>{passmsg}</p>


            <hr className="my-4" />

            <MDBBtn size='lg' className="ms-auto" style={{ backgroundColor: "#1FDF64", display: "block" }} onClick={handleNextClick}>
                Next
            </MDBBtn>
        </div>
    );
}
