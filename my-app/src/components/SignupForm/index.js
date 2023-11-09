import React, { useState } from 'react';
import Authen from './authen';
import Profile from './profile';
import {
    MDBContainer, MDBRow, MDBCol,
    MDBCard, MDBCardBody
} from 'mdb-react-ui-kit';

export default function SignupForm() {
    const [step, setStep] = useState(1);

    return (
        <MDBContainer fluid>
            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>
                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                            {step === 1 && (
                                <Authen step={setStep} />
                            )}
                            {step === 2 && (
                                <Profile step={setStep} />
                            )}
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
