import './SettingsList.scss';
import ChangeProfile from './icon/ChangeProfile';

export default function SettingsList() {
  return (
    <div className="settings">
      <h1>Settings</h1>
      <div className="settings-list">
        <div className="change-profile">
          <ChangeProfile />
          <div className="name">Change profile</div>
        </div>
      </div>
    </div>
  );
}
