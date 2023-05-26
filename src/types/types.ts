export type SignupT = {
  email: string;
  password: string;
  username: string;
  avatar: any;
};

export type LoginT = {
  email: string;
  password: string;
};

export type UserT = {
  token: string;
  email: string;
  username: string;
  avatar: string;
};
