import { Profile } from '../profile/Profile';
import './Navbar.scss';
import { FriendsIcon } from './icon/FriendsIcon';
import { LogoutIcon } from './icon/LogoutIcon';
import { MessagesIcon } from './icon/MessagesIcon';
import { NewsIcon } from './icon/NewsIcon';
import { SettingsIcon } from './icon/SettingsIcon';

export function NavBar() {
  return (
    <div className="background-navbar">
      <div className="logo">
        <div className="logo-icon"></div>
        <div className="logo-name">Hobby Hub</div>
      </div>

      <Profile />

      <div className="nav-wrapper">
        <ul className="nav">
          <li>
            <FriendsIcon />
            Friends
          </li>
          <li>
            <MessagesIcon />
            Messages
          </li>
          <li>
            <NewsIcon />
            News
          </li>
          <li>
            <SettingsIcon />
            Settings
          </li>
        </ul>
      </div>

      <div className="logout">
        <LogoutIcon />
        <div className="logout-text">Log out</div>
      </div>
    </div>
  );
}
