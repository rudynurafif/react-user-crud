'use client';

import { useState, useEffect } from 'react';
import UserTable from '@/components/Table';
import Link from 'next/link';
import { deleteUser, getAllUsers } from './api';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Home = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const userData = await getAllUsers();
    setUsers(userData.users);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (userId: number) => {
    Swal.fire({
      title: 'Delete User',
      text: 'Are you sure you want to delete this user?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(userId).then(() => {
          Swal.fire({
            icon: 'success',
            title: 'User has been deleted',
            showConfirmButton: false,
            timer: 1500,
          });
          fetchData();
        });
      }
    });
  };

  return (
    <div className='container'>
      <h1 className='mt-5'>Users Table</h1>
      <Link href='/add-user'>
        <Button variant='primary' className='my-3'>
          Add User
        </Button>
      </Link>
      <UserTable users={users} onDelete={handleDelete} />
    </div>
  );
};

export default Home;
