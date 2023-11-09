import React, { useEffect, useState } from 'react';
import { firebase } from './firebase'; // Adjust the path based on your file structure

const VerifyPhoneComponent = ({ phoneNumber, step }) => {
    const [otp, setOtp] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isCaptchaVisible, setIsCaptchaVisible] = useState(false);

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
            <h2> SMS Verification</h2>
            {isCaptchaVisible && (
                <div>
                    <div id="recaptcha-container"></div>
                </div>
            )}
            {!isCaptchaVisible && (
                <div>
                    <div>
                        <label className="text-white">OTP:</label>
                        <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
                    </div>
                    <div>
                        <button onClick={handleVerifyOtp} className="btn btn-primary">Verify OTP</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VerifyPhoneComponent;
