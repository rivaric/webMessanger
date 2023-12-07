import { FormProps, Inputs } from './Form.interface';
import { Error } from '../error/Error';
import './Form.scss';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, Path } from 'react-hook-form';
import { ApiRegister } from '../../api/Register';
import { ApiLogin } from '../../api/Login';
import { useUserStore } from '../../store/useUserStore';
import { useGlobalStore } from '../../store/useGlobalStore';
import { Spiner } from '../spiner/Spiner';
// import { getUserData } from '../../api/getUserData';

export function Form({ inputs, title, buttonText, info, picture }: FormProps) {
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({ mode: 'onBlur' });
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  const isLoading = useGlobalStore((state) => state.isLoading);
  const setIsLoading = useGlobalStore((state) => state.setIsLoading);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsLoading(true);
    console.log(data);
    location.pathname === '/register'
      ? ApiRegister(data)
          .then(({ data }) => {
            setUser(data);
            console.log(user);
            setIsLoading(false);
          })
          .catch((data) => {
            console.log(data);
            setIsLoading(false);
          })
      : ApiLogin(data)
          .then(({ data }) => {
            localStorage.setItem('accses_token', data.auth_token);
            navigate('/main');
            console.log(user);
            setIsLoading(false);
          })
          .catch((data) => {
            console.log(data);
            setIsLoading(false);
          });
  };

  return (
    <div className={`window-login ${location.pathname === '/register' ? 'register' : {}}`}>
      <img src={picture} alt="picture" />
      <div className="form-wrapper">
        {isLoading ? (
          <Spiner />
        ) : (
          <>
            <div className="title">
              <div className="logo-img"></div>
              <h1 className="logo-text">{title}</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {inputs.map((name, i) => (
                <label className="label" key={i}>
                  <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
                  <input
                    className="form-input"
                    placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
                    {...register(name as Path<Inputs>, {
                      required: 'Объязательно к заполнению'
                    })}
                  />
                  {errors[name as Path<Inputs>] ? (
                    <Error message={errors[name as Path<Inputs>]?.message} />
                  ) : null}
                </label>
              ))}
              <button className="form-button">{buttonText}</button>
            </form>
            <ul className="info">
              {info.map(({ question, link }, i) => (
                <li key={i}>
                  {question}{' '}
                  <Link className="link" to={link === 'Sign Up' ? '/register' : '/login'}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
