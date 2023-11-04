export interface UserType {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  profilePicture: string;
  roles: string[];
  isActive: boolean;
}
