import React, { useEffect, useRef, useState } from 'react';
import './css/search.css';
import { IconContext } from 'react-icons';
import { IoSearch, IoClose } from "react-icons/io5";
import Sidebar from './Sidebar';

export default function Search() {
    return (
        <>
            <Sidebar />
            <div className='screen-container'>
                <div className='color'></div>
                <div className='color'></div>
                <div className='color'></div>
                <div className='main-container'>
                    <div className='search-box'>
                        <div className='search'>
                            <div className='icon'>
                                <IconContext.Provider value={{ size: '25px', color: "rgb(255,53,155)" }}>
                                    {<IoSearch />}
                                </IconContext.Provider>
                            </div>
                            <div className='input'>
                                <input type='text' placeholder='Search for your songs' name='songs' />
                            </div>
                            <span className='clear'>
                                <IconContext.Provider value={{ size: '25px', color: "rgb(255,53,155)" }}>
                                    {<IoClose />}
                                </IconContext.Provider>
                            </span>
                        </div>
                    </div>
                    <div className='search-list'>
                        <div className='search-container'>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
