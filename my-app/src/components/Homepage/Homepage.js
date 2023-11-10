import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import './css/home.css';

export default function Homepage() {

    return (
        <>
            <Sidebar />
            <div className='screen-container'>
                <div className='color'></div>
                <div className='color'></div>
                <div className='color'></div>
                <div className='home-body flex'>
                    <h1>hello</h1>
                </div>
            </div>
        </>

    )
}
