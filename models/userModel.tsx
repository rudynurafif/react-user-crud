export interface UserRequest {
  name: string;
  identity_number: string;
  email: string;
  date_of_birth: string;
}

export interface User {
  id: number;
  name: string;
  identity_number: string;
  email: string;
  date_of_birth: string;
}

export interface UserFormProps {
  initialValues: {
    name: string;
    identity_number: string;
    email: string;
    date_of_birth: string;
  };
  onSubmitForm: (values: any) => void;
  type: string;
}

export interface UserTableProps {
  users: User[];
  onDelete: (id: number) => void;
  loading: boolean;
}