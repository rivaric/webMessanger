interface Questions {
  question: string;
  link: string;
}

export interface Inputs {
  Username: string;
  Email: string;
  Password: string;
  ConfirmPassword: string;
}

export interface FormProps {
  title: string;
  inputs: string[];
  buttonText: string;
  info: Questions[];
  picture?: string;
}
