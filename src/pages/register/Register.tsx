import { Form } from '../../components/form/Form';
import picture from './img/Picture.png';

export function Register() {
  return (
    <Form
      inputs={['username', 'email', 'password']}
      title="Create new account"
      buttonText="Sign Up"
      info={[
        { question: 'Do you already have an account?', link: 'Sign In' },
        { question: 'Do you have any questions?', link: 'Support' }
      ]}
      picture={picture}
    />
  );
}
