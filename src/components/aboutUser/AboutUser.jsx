import { Profile } from '../profile/Profile';
import { NotificationsIcon } from './icon/NotificationsIcon';
import { SentAudioIcon } from './icon/SentAudioIcon';
import { SentLinkIcon } from './icon/SentLinkIcon';
import { SentPhotoIcon } from './icon/SentPhotoIcon';
import { SentVideoIcon } from './icon/SentVideoIcon';

import './AboutUser.scss';

export function AboutUser() {
  return (
    <div className="about-user">
      <h1>About User</h1>

      <Profile />

      <button className="btn-send">Send message</button>

      <div className="send-wrapper">
        <ul className="send-select">
          <li>
            <NotificationsIcon />
            Notifications
          </li>
          <li>
            <SentPhotoIcon />
            Sent photo
          </li>
          <li>
            <SentVideoIcon />
            Sent video
          </li>
          <li>
            <SentAudioIcon />
            Sent audio
          </li>
          <li>
            <SentLinkIcon />
            Sent links
          </li>
        </ul>
      </div>

      <button className="btn-add-black">Add to blacklist</button>
    </div>
  );
}
