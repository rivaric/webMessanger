import { useLocation } from 'react-router-dom';
import { FormProps } from './Form.interface';
import './Form.scss';

export function Form({ inputs, title, buttonText, info, picture }: FormProps) {
  const location = useLocation();

  return (
    <div className={`window-login ${location.pathname == '/register' ? 'register' : {}}`}>
      <img src={picture} alt="picture" />
      <div className="form-wrapper">
        <div className="title">
          <div className="logo-img"></div>
          <h1 className="logo-text">{title}</h1>
        </div>
        <form>
          {inputs.map((name, i) => (
            <label className="label" key={i}>
              <>{name}</>
              <input className="form-input" type="text" placeholder={name} />
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
