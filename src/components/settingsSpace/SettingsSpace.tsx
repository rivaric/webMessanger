import { FormEvent, useState } from 'react';
import './SettingsSpace.scss';
import { useUserStore } from '../../store/useUserStore';

export default function SettingsSpace() {
  const username = useUserStore((state) => state.user.username);
  const birthday = useUserStore((state) => state.user.birthdate);
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(username);

  const clickChangePhoto = () => {
    document.getElementById('inputChangePhoto')?.click();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form id="form" className="settings-space" onSubmit={handleSubmit}>
      <div className="wrapper">
        <div className="name-and-img">
          <div className="img"></div>
          {!isEdit ? (
            <div className="name">{username}</div>
          ) : (
            <input
              name="name"
              placeholder="Name"
              className="input-change-photo"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          )}
        </div>
        <button className="change-photo" onClick={clickChangePhoto} type="button">
          Change photo
        </button>
        <input type="file" style={{ display: 'none' }} id="inputChangePhoto" name="profile_pic" />
        <div className="age">
          Date of birth:{' '}
          {!isEdit ? (
            birthday
          ) : (
            <input className="input-change-age" placeholder="Date of birth" name="birthdate" />
          )}
        </div>
      </div>

      <div className="btns">
        <button className="btn" onClick={() => setIsEdit(true)} type="button">
          Edit
        </button>
        <button className="btn" onClick={() => setIsEdit(false)}>
          Done
        </button>
      </div>
    </form>
  );
}
