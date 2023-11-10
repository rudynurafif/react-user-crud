'use client';

import * as Yup from 'yup';
import { Button, Form } from 'react-bootstrap';
import Link from 'next/link';
import { useFormik } from 'formik';
import { UserFormProps } from '@/models/userModel';

const UserForm: React.FC<UserFormProps> = ({ initialValues, onSubmit, type }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('*Name is required'),
    identity_number: Yup.string()
      .required('*Identity Number is required')
      .length(10, '*Identity Number must be 10 characters'),
    email: Yup.string().email('*Invalid email format').required('*Email is required'),
    date_of_birth: Yup.date()
      .max(
        new Date(new Date().setDate(new Date().getDate() - 1)),
        "*Date of Birth cannot be today or exceed today's date."
      )
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
      <h1 className='my-5'>{type} User Form</h1>

      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label className='my-3'>Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            placeholder='Input user name..'
          />
          {formik.touched.name && formik.errors.name && (
            <div className='text-danger'>{formik.errors.name}</div>
          )}
        </Form.Group>
        <Form.Group className='my-3'>
          <Form.Label>Identity Number</Form.Label>
          <Form.Control
            type='text'
            name='identity_number'
            onChange={formik.handleChange}
            value={formik.values.identity_number}
            onBlur={formik.handleBlur}
            placeholder='Input user identity number..'
          />
          {formik.touched.identity_number && formik.errors.identity_number && (
            <div className='text-danger'>{formik.errors.identity_number}</div>
          )}
          <Form.Text className='text-muted'>10 characters length</Form.Text>
        </Form.Group>
        <Form.Group className='my-3'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            placeholder='Input user email..'
          />
          {formik.touched.email && formik.errors.email && (
            <div className='text-danger'>{formik.errors.email}</div>
          )}
          <Form.Text className='text-muted'>Example: name@email.com</Form.Text>
        </Form.Group>
        <Form.Group className='my-3'>
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type='date'
            name='date_of_birth'
            onChange={formik.handleChange}
            value={formik.values.date_of_birth}
            onBlur={formik.handleBlur}
          />
          {formik.touched.date_of_birth && formik.errors.date_of_birth && (
            <div className='text-danger'>{formik.errors.date_of_birth}</div>
          )}
        </Form.Group>
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
          <Button type='button' variant='danger' className='m-3'>
            Cancel
          </Button>
        </Link>
      </Form>
    </section>
  );
};

export default UserForm;
