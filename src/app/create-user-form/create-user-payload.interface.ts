export interface CreateUserPayload {
  name: string;
  email: string;
  website: string;
  company: {
    name: string;
  };
}
