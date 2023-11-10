'use client';

import { useState, useEffect } from 'react';
import UserTable from '@/components/Table';
import Link from 'next/link';
import { deleteUser, getAllUsers } from '../services/userService';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const userData = await getAllUsers();
    setUsers(userData.users);
    setLoading(false);
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
    <div className='container col-sm-12'>
      <h1 className='mt-5'>Simple User App</h1>
      <Link href='/add-user'>
        <Button variant='primary' className='my-3'>
          Add User
        </Button>
      </Link>
      <UserTable users={users} onDelete={handleDelete} loading={loading} />
    </div>
  );
};

export default Home;
