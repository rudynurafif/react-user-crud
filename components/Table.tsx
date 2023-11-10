import { UserTableProps } from '@/models/userModel';
import React from 'react';
import { Table, Button } from 'react-bootstrap';

const UserTable: React.FC<UserTableProps> = ({ users, onDelete, loading }) => {
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
        {loading ? (
          <tr>
            <td colSpan={5} className='text-center'>
              Loading...
            </td>
          </tr>
        ) : (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.identity_number}</td>
              <td>{user.email}</td>
              <td>{user.date_of_birth}</td>
              <td className='d-flex justify-content-center'>
                <Button variant='danger' onClick={() => onDelete(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
};

export default UserTable;
