import './Profile.scss';

interface ProfileProps {
  name?: string;
  picture?: string;
}

export function Profile({ name, picture }: ProfileProps) {
  return name === undefined ? (
    <div className="profile">
      <img src={picture} />

      <div className="profile-name">{name}</div>
    </div>
  ) : (
    <div className="profile">
      <div className="profile-img"></div>

      <div className="profile-name">Name</div>
    </div>
  );
}
