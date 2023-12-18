import { useState } from 'react';
import './SettingsSpace.scss';
import { useUserStore } from '../../store/useUserStore';
import { SubmitHandler, useForm } from 'react-hook-form';
import { changeUserData } from '../../api/changeUserData';

export interface Inputs {
  username: string;
  birthdate: Date;
  profile_pic: File;
}

export default function SettingsSpace() {
  const username = useUserStore((state) => state.user.username);
  const birthday = useUserStore((state) => state.user.birthdate);
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(username);
  const { register, handleSubmit } = useForm<Inputs>();

  const clickChangePhoto = () => {
    document.getElementById('inputChangePhoto')?.click();
  };

  const onSubmit: SubmitHandler<Inputs> = (inputs) => {
    console.log(inputs);
    changeUserData(inputs)
      .then((data) => {
        console.log(data);
      })
      .catch((data) => {
        console.log(data);
      });
  };

  return (
    <form id="form" className="settings-space" onSubmit={handleSubmit(onSubmit)}>
      <div className="wrapper">
        <div className="name-and-img">
          <div className="img"></div>
          {!isEdit ? (
            <div className="name">{username}</div>
          ) : (
            <input
              placeholder="Name"
              className="input-change-photo"
              value={name}
              {...register('username')}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          )}
        </div>
        <button className="change-photo" onClick={clickChangePhoto} type="button">
          Change photo
        </button>
        <input
          type="file"
          style={{ display: 'none' }}
          id="inputChangePhoto"
          accept=".jpg,.png,.svg"
          multiple={false}
          {...register('profile_pic')}
        />
        <div className="age">
          Date of birth:{' '}
          {!isEdit ? (
            birthday
          ) : (
            <input
              className="input-change-age"
              placeholder="Date of birth"
              {...register('birthdate')}
            />
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
