import { useLocation, useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/useUserStore';
import { Profile } from '../profile/Profile';
import './Navbar.scss';
import { LogoutIcon } from './icon/LogoutIcon';
import { MessagesIcon } from './icon/MessagesIcon';
import { SettingsIcon } from './icon/SettingsIcon';
import { Logo } from '../../images/Logo';

export function NavBar() {
  const navigate = useNavigate();
  const name = useUserStore((state) => state.user.username);
  const picture = useUserStore((state) => state.user.profile_pic);
  const location = useLocation();

  const onExit = () => {
    localStorage.removeItem('access_token');
    navigate('/login');
  };

  return (
    <div className="background-navbar">
      <div className="logo">
        <Logo />
        <div className="logo-name">Hobby Hub</div>
      </div>

      <Profile name={name} picture={picture} />

      <div className="nav-wrapper">
        <ul className="nav">
          <li
            onClick={() => navigate('/messages')}
            className={location.pathname === '/messages' ? 'active' : ''}>
            <MessagesIcon />
            Messages
          </li>
          <li
            onClick={() => navigate('/settings')}
            className={location.pathname === '/settings' ? 'active' : ''}>
            <SettingsIcon />
            Settings
          </li>
        </ul>
      </div>

      <div className="logout" onClick={onExit}>
        <LogoutIcon />
        <div className="logout-text">Log out</div>
      </div>
    </div>
  );
}
