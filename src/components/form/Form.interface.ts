interface Questions {
  question: string;
  link: string;
}

export interface FormProps {
  title: string;
  inputs: string[];
  buttonText: string;
  info: Questions[];
  picture?: string;
}
