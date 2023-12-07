interface Questions {
  question: string;
  link: string;
}

export interface Inputs {
  username: string;
  email: string;
  password: string;
}

export interface FormProps {
  title: string;
  inputs: string[];
  buttonText: string;
  info: Questions[];
  picture?: string;
}
