'use client';

import FormComponent from '@/components/form/Form';
import UserInterface from '@/models/userModel';
import axios, { AxiosError } from 'axios';
import { addUser } from '../api';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const AddUser = () => {
  const router = useRouter();

  const initialValues = {
    name: '',
    identity_number: '',
    email: '',
    date_of_birth: '',
  };

  const handleSubmit = async (data: UserInterface) => {
    try {
      await addUser(data);

      Swal.fire({
        icon: 'success',
        title: 'Successfully created new user',
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        router.push('/');
      }, 1500);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ErrorResponse>;
        if (axiosError.response?.status === 400) {
          const errorData = axiosError.response.data;
          const errorMessages = Object.values(errorData).join('<br>');
          Swal.fire({
            icon: 'error',
            title: 'Error',
            html: errorMessages,
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong. Please try again later.',
        });
      }
    }
  };

  return (
    <div className='container card mt-5 col-md-6'>
      <h1 className='my-5'>Add User</h1>
      <FormComponent initialValues={initialValues} onSubmit={handleSubmit} />
    </div>
  );
};

export default AddUser;
