interface Questions {
  question: string;
  link: string;
}

interface FormProps {
  title: string;
  inputs: string[];
  buttonText: string;
  info: Questions[];
  picture?: string;
}

import './Form.scss';

export function Form({ inputs, title, buttonText, info, picture }: FormProps) {
  return (
    <div className="window-login">
      <img src={picture} alt="" />
      <div className="form-wrapper">
        <div className="title">
          <div className="logo-img"></div>
          <h1 className="logo-text">{title}</h1>
        </div>
        <form>
          {inputs.map((name, i) => (
            <label className="label" htmlFor={name} key={i}>
              {name}
              <input className="form-input" type="text" placeholder={name} name={name} />
            </label>
          ))}
        </form>
        <button className="form-button">{buttonText}</button>
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
