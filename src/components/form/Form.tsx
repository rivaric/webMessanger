import { FormProps, Inputs } from './Form.interface';
import { Error } from '../error/Error';
import './Form.scss';

import { useLocation } from 'react-router-dom';
import { useForm, SubmitHandler, Path } from 'react-hook-form';

export function Form({ inputs, title, buttonText, info, picture }: FormProps) {
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className={`window-login ${location.pathname === '/register' ? 'register' : {}}`}>
      <img src={picture} alt="picture" />
      <div className="form-wrapper">
        <div className="title">
          <div className="logo-img"></div>
          <h1 className="logo-text">{title}</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputs.map((name, i) => (
            <label className="label" key={i}>
              <p>{name}</p>
              <input
                className="form-input"
                placeholder={name}
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
              {question} <span className="link">{link}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
