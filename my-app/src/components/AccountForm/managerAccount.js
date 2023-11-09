import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useParams, Link } from 'react-router-dom';
import "./style.css";

export default function UserManager() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const [totalPages, setTotalPages] = useState(1);
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedRole, setSelectedRole] = useState('');


    useEffect(() => {
        const storedData = localStorage.getItem('user');

        if (storedData) {
            const decodedData = JSON.parse(atob(storedData));
            if (decodedData.role !== 3) {
                window.location.href = '/login';
            }
        }
        fetch(`http://localhost:9999/users`)
            .then(res => res.json())
            .then(res => {
                setUsers(res);
                setTotalPages(calculateTotalPages());
            });
    }, [currentPage]);



    const calculateTotalPages = () => {
        return Math.ceil(users.length / itemsPerPage);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(currentPage * itemsPerPage, users.length);

    const displayedUsers = users.slice(startIndex, endIndex);

    useEffect(() => {
        fetch(`http://localhost:9999/users?email_like=${search}`)
            .then(res => res.json())
            .then(res => {
                setUsers(res);
                setTotalPages(calculateTotalPages());
            });
    }, [search]);

    const handleSearch = (search) => {
        setSearch(search);
        setCurrentPage(1); // Reset to the first page when searching
    };

    useEffect(() => {
        const url = `http://localhost:9999/users?name_like=${search}&gender_like=${selectedGender}&role_like=${selectedRole}`;

        fetch(url)
            .then(res => res.json())
            .then(res => {
                setUsers(res);
                setTotalPages(calculateTotalPages());
            });
    }, [search, selectedGender, selectedRole]);


    return (
        <Container>
            <div className="col text-center">User Manager</div>
            <div className="row">
                <div className="col text-center">
                    <input type="text" placeholder="Enter Name to search..." onChange={e => handleSearch(e.target.value)} />
                </div>
                <div className="col text-center">
                    <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
                        <option value="">All Genders</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </div>
                <div className="col text-center">
                    <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                        <option value="">All Roles</option>
                        <option value="1">User</option>
                        <option value="2">Artist</option>
                        <option value="3">Admin</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Birthday</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedUsers.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
                                <td>{user.gender === 1 ? 'Male' : 'Female'}</td>
                                <td>{user.birthday}</td>
                                <td>{user.role === 1 ? 'User' : user.role === 2 ? 'Artist' : 'Admin'}</td>
                                <td>
                                    <Link to={`/admin/users/${user.id}`} className="btn btn-warning">Details</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <div className="row">
                <div className="col text-center">
                    <p>
                        Page {currentPage} of {totalPages}
                    </p>
                    <nav>
                        <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button
                                    className="page-link"
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                >
                                    Previous
                                </button>
                            </li>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <li
                                    key={index + 1}
                                    className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                                >
                                    <button
                                        className="page-link"
                                        onClick={() => setCurrentPage(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <button
                                    className="page-link"
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                >
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Container>
    );
}
