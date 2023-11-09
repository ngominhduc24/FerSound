import React, { useEffect, useState } from 'react';
import { firebase } from './firebase'; // Adjust the path based on your file structure

const Captcha = ({ step, setRecaptchaVerifier }) => {

    useEffect(() => {
        const verifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        verifier.verify().then(() => {
            setRecaptchaVerifier(verifier);
            step(4);
        });
    }, []);



    return (
        <div>
            <h2>Captcha Verification</h2>
        </div>
    );
};

export default Captcha;
