import { Form } from '../../components/form/Form';
import picture from './img/Picture.png';

export function Register() {
  return (
    <Form
      inputs={['username', 'email', 'password']}
      title="Create account"
      buttonText="Sign Up"
      info={[{ question: 'Do you already have an account?', link: 'Sign In' }]}
      picture={picture}
    />
  );
}
