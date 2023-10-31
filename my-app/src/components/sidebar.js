import { Col, Row } from 'react-bootstrap'
import React from 'react'
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";


export default function Sidebar() {
  return (
    <Row>
      <Col md={12} style={{
        backgroundColor: 'black',
        color: '#b3b3b3',
        display: 'flex',
        flexDirection: 'column',
        height: "100%",
        width: "100%",
        paddingBottom: "100%"
      }}>
        <img
          style={{
            maxInlineSize: "90%",
          }}
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
          alt=""
        />
        <br /><br />
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem",
            margin: 0,
          }}
        >
          <li>
            <MdHomeFilled />
            <span> Home</span>
          </li>
          <li>
            <MdSearch />
            <span style={{fontWeight:'bold'}}> Search</span>
          </li>
          <li>
            <IoLibrary />
            <span> Your Library</span>
          </li>
          <br /><br />
          <li>
            <span>RAP viet</span>
          </li>
          <li>
            <span>US-UK</span>
          </li>
        </ul>
      </Col>
    </Row>

  )
}