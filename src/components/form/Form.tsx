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
    <div
      className="window-login"
      style={{
        flexDirection: `${inputs[0] == 'Username' ? 'row-reverse' : 'row'}`
      }}>
      <img
        src={picture}
        alt="picture"
        style={{
          transform: `translateX(${inputs[0] == 'Username' ? '-50px' : {}})`
        }}
      />
      <div
        className="form-wrapper"
        style={{
          paddingTop: `${inputs[0] == 'Username' ? '45px' : {}}`
        }}>
        <div
          className="title"
          style={{
            marginBottom: `${inputs[0] == 'Username' ? '20px' : {}}`
          }}>
          <div className="logo-img"></div>
          <h1 className="logo-text">{title}</h1>
        </div>
        <form
          style={{
            gap: `${inputs[0] == 'Username' ? '10px' : {}}`,
            marginBottom: `${inputs[0] == 'Username' ? '30px' : {}}`
          }}>
          {inputs.map((name, i) => (
            <label className="label" htmlFor={name} key={i}>
              {name}
              <input className="form-input" type="text" placeholder={name} name={name} />
            </label>
          ))}
        </form>
        <button
          className="form-button"
          style={{
            marginBottom: `${inputs[0] == 'Username' ? '30px' : {}}`
          }}>
          {buttonText}
        </button>
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
