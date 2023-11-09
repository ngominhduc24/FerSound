import React, { useEffect, useState } from 'react';
import { firebase } from './firebase';
import { Col, Row } from 'react-bootstrap';
import logoImage from '../../Assets/logofersound.png';
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';

const VerifyPhoneComponent = ({ phoneNumber, step }) => {
    const [otp, setOtp] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isCaptchaVisible, setIsCaptchaVisible] = useState(true);

    useEffect(() => {
        const verifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        setRecaptchaVerifier(verifier);
        setLoading(false);
    }, []);

    useEffect(() => {
        handleSendOtp();
    }, [recaptchaVerifier]);

    const handleSendOtp = async () => {
        try {
            if (!recaptchaVerifier) {
                // Handle case where recaptchaVerifier is not yet initialized
                console.log('reCAPTCHA not ready. Please wait a moment.');
                return;
            }

            const confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneNumber, recaptchaVerifier);
            setIsCaptchaVisible(false);
            setVerificationId(confirmationResult.verificationId);
            console.log('OTP sent successfully!');
        } catch (error) {
            console.error(error.message);
            console.log('Failed to send OTP');
        }
    };

    const handleVerifyOtp = async () => {
        try {
            const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, otp);
            await firebase.auth().signInWithCredential(credential);
            step(-1);
            console.log('Phone number verified successfully!');
        } catch (error) {
            console.error(error.message);
            console.log('Failed to verify OTP');
        }
    };

    return (
        <div>
            <Row style={{ marginTop: "-20px" }}>
                <Col md={{ span: 4, offset: 4 }} style={{ display: "flex" }}>
                    <img src={logoImage} alt="logo" style={{ marginTop: "15px" }} />
                </Col>
            </Row>
            <p style={{ marginTop: "10px", fontStyle: "italic" }} >Step 3/3</p>
            <p className="text-white " style={{ marginTop: "-20px", fontStyle: "italic" }}>Phone Verification</p>
            {isCaptchaVisible && (
                <div>
                    <div id="recaptcha-container"></div>
                </div>
            )}
            {/* {!isCaptchaVisible && ( */}

            <div className="d-flex flex-column ">
                <p className="text-white mb-3">Enter Verification Code: </p>
                <MDBInput wrapperClass='mb-4 w-100' type='text' size="lg" placeholder='OTP...' style={{ color: 'white' }} value={otp} onChange={(e) => setOtp(e.target.value)} />

                <MDBBtn size='lg' className="mx-auto" style={{ backgroundColor: "#1FDF64" }} onClick={handleVerifyOtp} >
                    Verify OTP
                </MDBBtn>
            </div>

            {/* )} */}
        </div>
    );
};

export default VerifyPhoneComponent;
