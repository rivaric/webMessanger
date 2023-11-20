import './ChatItem.scss';

export function ChatItem() {
  return (
    <div className="chat">
      <div className="chat-img"></div>
      <div className="chat-descr">
        <div className="chat-title">Title</div>
        <div className="chat-last-message">message</div>
      </div>
    </div>
  );
}
