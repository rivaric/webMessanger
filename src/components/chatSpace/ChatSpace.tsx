import { SettingsIcon } from './icon/SettingsIcon';
import './ChatSpace.scss';
import { SendIcon } from './icon/SendIcon';
import { useMessagesStore } from '../../store/useMessagesStore';
// import { useUserStore } from '../../store/useUserStore';

export function ChatSpace() {
  const messages = useMessagesStore((state) => state.messages);
  // const username = useUserStore((state) => state.user.username);

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
          {messages.map(({ author, message, created }) => (
            <div className="message" key={created}>
              <div className="message-img"></div>
              <div className="message-descr">
                <div className="message-name">{author}</div>

                <div className="message-text">{message}</div>

                <div className="message-time">{created}</div>
              </div>
            </div>
          ))}
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
