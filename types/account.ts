export type AccountData = {
  email: string;
  password: string;
  phone?: string;
};

export type AccountInputProps = {
  name: string;
  label: string;
  value: string;
  type: InputType;
  isReadOnly?: boolean;
  icon?: React.ReactNode;
  register: any;
};

export enum InputType {
  EMAIL = 'email',
  PASSWORD = 'password',
  PHONE = 'phone',
}
