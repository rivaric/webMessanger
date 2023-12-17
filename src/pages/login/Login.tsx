import { Form } from '../../components/form/Form';
import picture from './img/Picture.png';

export function Login() {
  return (
    <Form
      inputs={['email', 'password']}
      title="Login account"
      buttonText="Sign In"
      info={[{ question: "Don't have an account yet?", link: 'Sign Up' }]}
      picture={picture}
    />
  );
}
