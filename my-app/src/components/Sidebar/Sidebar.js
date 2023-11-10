import { Col, Row } from 'react-bootstrap'
import React from 'react'
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";

export default function Sidebar() {
    return (
        <Row>
            <Col md={2} style={{
                backgroundColor: 'black',
                color: '#b3b3b3',
                display: 'flex',
                flexDirection: 'column',
                height: "100%",
                width: "100%",
                paddingBottom: "20px",
            }}>
                <img
                    style={{
                        maxInlineSize: "80%",
                        width: "200px",
                        height: "80px",
                        marginTop: "10%",
                        marginLeft: "10%",
                    }}
                    src="Untitled_logo_5_free-file.jpg"
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
                    }}
                >
                    <li>
                        <MdHomeFilled />
                        <button
                            style={{
                                background: 'black',
                                color: '#b3b3b3',
                                border: '1px solid #b3b3b3', // Thêm viền
                                outline: 'none' // Ẩn viền mặc định
                            }}
                        >Trang chính</button>
                    </li>
                    <li>
                        <MdSearch />
                        <button
                            style={{
                                background: 'black',
                                color: '#b3b3b3',
                                border: '1px solid #b3b3b3',
                                outline: 'none'
                            }}
                        >Tìm kiếm</button>
                    </li>
                    <li onClick={() => alert("Thư viện clicked")}>
                        <IoLibrary />
                        <button
                            style={{
                                background: 'black',
                                color: '#b3b3b3',
                                border: '1px solid #b3b3b3',
                                outline: 'none'
                            }}
                        >Thư viện</button>
                    </li>
                    <br /><br />
                    <li>
                        <button
                            style={{
                                background: 'black',
                                color: '#b3b3b3',
                                border: '1px solid #b3b3b3',
                                outline: 'none'
                            }}
                        >RAP Việt</button>
                    </li>
                    <li>
                        <button
                            style={{
                                background: 'black',
                                color: '#b3b3b3',
                                border: '1px solid #b3b3b3',
                                outline: 'none'
                            }}
                        >US-UK</button>
                    </li>
                </ul>
            </Col>
        </Row>
    )
}