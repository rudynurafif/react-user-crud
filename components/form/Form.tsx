'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Form as BootstrapForm,
  FormGroup,
  FormLabel,
  FormControl,
} from 'react-bootstrap';
import Link from 'next/link';

interface UserFormProps {
  initialValues: {
    name: string;
    identity_number: string;
    email: string;
    date_of_birth: string;
  };
  onSubmit: (values: any) => void;
  type: string;
}

const UserForm: React.FC<UserFormProps> = ({ initialValues, onSubmit, type }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('*Name is required'),
    identity_number: Yup.string()
      .required('*Identity Number is required')
      .length(10, '*Identity Number must be 10 characters'),
    email: Yup.string().email('*Invalid email format').required('*Email is required'),
    date_of_birth: Yup.date()
      .max(new Date(), "*Date of Birth cannot exceed today's date")
      .required('*Date of Birth is required'),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      onSubmit(values);
      actions.setSubmitting(false);
    },
  });

  return (
    <section className='container card mt-5 col-md-6'>
      <h1 className='my-5'>{type} User</h1>

      <BootstrapForm onSubmit={formik.handleSubmit}>
        <FormGroup>
          <FormLabel className='my-3'>Name</FormLabel>
          <FormControl
            type='text'
            name='name'
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {/* Display validation error message */}
          {formik.touched.name && formik.errors.name && (
            <div className='text-danger'>{formik.errors.name}</div>
          )}
        </FormGroup>
        <FormGroup className='my-3'>
          <FormLabel>Identity Number</FormLabel>
          <FormControl
            type='text'
            name='identity_number'
            onChange={formik.handleChange}
            value={formik.values.identity_number}
            onBlur={formik.handleBlur}
          />
          {formik.touched.identity_number && formik.errors.identity_number && (
            <div className='text-danger'>{formik.errors.identity_number}</div>
          )}
        </FormGroup>
        <FormGroup className='my-3'>
          <FormLabel>Email</FormLabel>
          <FormControl
            type='email'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className='text-danger'>{formik.errors.email}</div>
          )}
        </FormGroup>
        <FormGroup className='my-3'>
          <FormLabel>Date of Birth</FormLabel>
          <FormControl
            type='date'
            name='date_of_birth'
            onChange={formik.handleChange}
            value={formik.values.date_of_birth}
            onBlur={formik.handleBlur}
          />
          {formik.touched.date_of_birth && formik.errors.date_of_birth && (
            <div className='text-danger'>{formik.errors.date_of_birth}</div>
          )}
        </FormGroup>
        <Button
          type='submit'
          variant='primary'
          className='my-3'
          disabled={
            formik.isSubmitting ||
            !formik.isValid ||
            Object.keys(formik.touched).length === 0
          }
        >
          Submit
        </Button>
        <Link href='/'>
          <Button type='button' variant='danger' className='m-3 disabled-button'>
            Cancel
          </Button>
        </Link>
      </BootstrapForm>
    </section>
  );
};

export default UserForm;
