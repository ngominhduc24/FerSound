import React, { useEffect, useState } from 'react';
import './css/sidebar.css';
import { MdPlaylistPlay } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary, IoSearch } from "react-icons/io5";
import { HiHome } from "react-icons/hi";
import SidebarButton from './SidebarButton';

export default function Sidebar() {

    return (
        <div className='sidebar-container'>
            {/* <img src={image} className='profile-img' alt='profile' /> */}
            <div>
                <SidebarButton title="Home" to="/home" icon={<HiHome />} />
                <SidebarButton title="Search" to="/search" icon={<IoSearch />} />
                <SidebarButton title="Play Music" to="/play" icon={<MdPlaylistPlay />} />
                <SidebarButton title="Library" to="/library" icon={<IoLibrary />} />
            </div>
            <SidebarButton title="Sign Out" to="/signout" icon={<FaSignOutAlt />} />
        </div>
    )
}
