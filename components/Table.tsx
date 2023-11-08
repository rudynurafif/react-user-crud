import { User } from '@/models/userModel';
import React from 'react';
import { Table, Button } from 'react-bootstrap';

interface UserTableProps {
  users: User[];
  onDelete: (id: number) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Identity Number</th>
          <th>Email</th>
          <th>Date of Birth</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.identity_number}</td>
            <td>{user.email}</td>
            <td>{user.date_of_birth}</td>
            <td>
              <Button variant="danger" onClick={() => onDelete(user.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;

