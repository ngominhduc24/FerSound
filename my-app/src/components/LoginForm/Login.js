import React from 'react';
import { useState, useEffect } from 'react';
import { Alert, Container } from 'react-bootstrap';
import {
    MDBBtn, MDBContainer, MDBRow, MDBCol,
    MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBCheckbox
}
    from 'mdb-react-ui-kit';
import './login.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [usermsg, setUsermsg] = useState('');
    const [passmsg, setPassmsg] = useState('');
    const [checked, setChecked] = useState(false);


    async function handleLogin() {
        setMessage('');
        setPassmsg('');
        setUsermsg('');
        let flag = true;
        if (username.trim() == '') {
            flag = false;
            setUsermsg('Username can not be empty!');
        }
        if (password.trim() == '') {
            flag = false;
            setPassmsg('Username can not be empty!');
        }
        if (!flag) return;

        await fetch(`http://localhost:9999/users?email=${username}&password=${password}`).then((response) => response.json())
            .then(response => {
                if (response.length === 1) {
                    console.log(response);
                    if (response[0].role === 1 || response[0].role === 2) {
                        window.location.href = '/home';
                    } else if (response[0].role === 3) {
                        window.location.href = '/admin/users';
                    }
                    // Encoding
                    const userData = {
                        role: response[0].role,
                        id: response[0].id
                    };

                    const encodedData = btoa(JSON.stringify(userData));

                    localStorage.setItem('user', encodedData);
                } else {
                    setMessage(response.message);
                }

            })
    }


    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                            <h2 className="fw-bold mb-2 text-center text-white">Log in to FerSound</h2>
                            <p style={{ display: message === '' ? 'none' : 'block', color: 'red', margin: '-15px 0px 5px 0px', fontSize: '17px' }}>{message}</p>



                            <p className="text-white mb-3">Email or username</p>
                            <MDBInput wrapperClass='mb-4 w-100' id='username' type='email' size="lg" placeholder='Email or username' style={{ color: 'white' }} value={username} onChange={e => setUsername(e.target.value)} />
                            <p style={{ display: usermsg === '' ? 'none' : 'block', color: 'red', margin: '-15px 0px 5px 0px', fontSize: '15px' }}>{usermsg}</p>

                            <p className="text-white mb-3">Password</p>
                            <MDBInput wrapperClass='mb-4 w-100' id='password' type='password' size="lg" placeholder='Password' style={{ color: 'white' }} value={password} onChange={e => setPassword(e.target.value)} />
                            <p style={{ display: passmsg === '' ? 'none' : 'block', color: 'red', margin: '-15px 0px 5px 0px', fontSize: '15px' }}>{passmsg}</p>

                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4 ' label='Remember password' value={checked} onChange={e => setChecked(e.target.value)} />

                            <MDBBtn size='lg' style={{ backgroundColor: "#1FDF64" }} onClick={handleLogin}>
                                Login
                            </MDBBtn>

                            <hr className="my-4" />

                            <MDBBtn className="mb-2 w-100" size="lg" style={{ backgroundColor: '#dd4b39' }}>
                                <MDBIcon fab icon="google" className="mx-2" />
                                Sign in with google
                            </MDBBtn>

                            <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                                <MDBIcon fab icon="facebook-f" className="mx-2" />
                                Sign in with facebook
                            </MDBBtn>
                            <p style={{ textAlign: 'center' }}>Don't have an account?<a href='/signup'>Sign up for FerSound</a> </p>

                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer >
    );
}
