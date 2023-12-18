import './Profile.scss';

interface ProfileProps {
  name?: string;
  picture?: string;
}

export function Profile({ name, picture }: ProfileProps) {
  return (
    <div className="profile">
      <img src={picture} />

      <div className="profile-name">{name}</div>
    </div>
  );
}
