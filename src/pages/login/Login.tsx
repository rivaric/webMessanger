import { Form } from '../../components/form/Form';
import picture from './img/Picture.png';

export function Login() {
  return (
    <Form
      inputs={['username', 'password']}
      title="Login to your account"
      buttonText="Sign In"
      info={[
        { question: "Don't have an account yet?", link: 'Sign Up' },
        { question: 'Forgot your password?', link: 'Create a new password' },
        { question: 'Do you have any questions?', link: 'Support' }
      ]}
      picture={picture}
    />
  );
}
