import {
    MDBContainer, MDBRow, MDBCol,
    MDBCard, MDBCardBody
} from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import Authen from './authen';
import Profile from './profile';
import VerifyPhoneComponent from './verifyPhone';
import VerifyMailComponent from './verifyMailComponent';

export default function SignupForm() {
    const [step, setStep] = useState(1);
    const [fullname, setFullname] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (step === -1) {
            // Perform signup logic
            setGender(gender == 'male' ? '1' : '0')
            const signupData = {
                fullname,
                gender,
                dob,
                username,
                password,
                checked,
            };

            fetch('http://localhost:9999/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signupData),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Signup successful:', data);
                    // goto /play
                    window.location.href = '/play';
                })
                .catch(error => {
                    console.error('Error during signup:', error);
                });
        }
    }, [step]);


    return (
        <MDBContainer fluid>
            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>
                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                            {step === 1 && (
                                <Authen
                                    step={setStep}
                                    setUsername={setUsername}
                                    username={username}
                                    setPassword={setPassword}
                                    password={password}
                                />
                            )}
                            {step === 2 && (
                                <Profile
                                    step={setStep}
                                    setFullname={setFullname}
                                    fullname={fullname}
                                    username={username}
                                    setGender={setGender}
                                    gender={gender}
                                    setDob={setDob}
                                    dob={dob}
                                    setChecked={setChecked}
                                    checked={checked}
                                />
                            )}
                            {step === 3 && (
                                <VerifyPhoneComponent step={setStep} phoneNumber={username} />
                            )}
                            {step === 4 && (
                                <VerifyMailComponent step={setStep} userEmail={username} />
                            )}
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}