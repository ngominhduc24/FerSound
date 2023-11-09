import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useParams, Link } from 'react-router-dom';
import "./style.css";

export default function UserManager() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [total, setTotal] = useState(0);
    const [discountTotal, setDiscountTotal] = useState(0);

    let { userId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9999/users`)
            .then(res => res.json())
            .then(res => {
                setUsers(res);
            });
    }, []);

    function handleSearch(search) {
        setSearch(search);
    }

    function handleQuantity(user, e) {
        console.log(e.target.value);
    }

    return (
        <Container>
            <div className="col text-center">User Manager</div>
            <div className="row">
                <div className="col text-center">
                    <input type="text" placeholder="Enter Name to search..." onChange={e => { handleSearch(e.target.value) }} />
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
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
                                <td>{user.gender}</td>
                                <td>{user.birthday}</td>
                                <td>{user.role}</td>
                                <td>
                                    <Link to={`/admin/users/${user.id}`} className="btn btn-warning">Details</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}
