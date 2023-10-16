// add undefined for the purpose of error display checks
export interface Auth {
  email: string | undefined;
  password: string;
}

export interface AuthRes {
  token: string;
}
