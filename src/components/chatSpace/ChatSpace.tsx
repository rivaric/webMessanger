import { SettingsIcon } from './icon/SettingsIcon';
import './ChatSpace.scss';
import { SendIcon } from './icon/SendIcon';

export function ChatSpace() {
  return (
    <div className="chat-space">
      <div className="header">
        <div className="chat-header-wrapper">
          <div className="chat-img"></div>
          <div className="chat-info">
            <div className="chat-name">We ALL need some coffee...</div>
            <div className="chat-members">5 members</div>
          </div>
        </div>
        <div className="header-settings">
          <SettingsIcon />
        </div>
      </div>

      <div className="section-messages">
        <div className="messages">
          <div className="message-date">October 5th, 2023</div>
          <div className="message left">
            <div className="message-img"></div>
            <div className="message-descr">
              <div className="message-name">Wolf Auf</div>

              <div className="message-text">
                Picture all the major fast food joints in your country. What does McDonald’s, KFC,
                Popeyes, and Chick-fil-a have in common aside from being fast food giants? All of
                their logos and branding have elements of red and yellow. This is because red and
                yellow psychologically stimulate hunger.
              </div>

              <div className="message-time">10:12 AM</div>
            </div>
          </div>
          <div className="message rigth">
            <div className="message-descr">
              <div className="message-name">Wolf Auf</div>

              <div className="message-text">
                Picture all the major fast food joints in your country. What does McDonald’s, KFC,
                Popeyes, and Chick-fil-a have in common aside from being fast food giants? All of
                their logos and branding have elements of red and yellow. This is because red and
                yellow psychologically stimulate hunger.
              </div>

              <div className="message-time">10:12 AM</div>
            </div>
            <div className="message-img"></div>
          </div>
        </div>
        <div className="send-message">
          <input type="text" placeholder="Write your message..." className="input-message" />
          <button className="btn-send">
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
