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