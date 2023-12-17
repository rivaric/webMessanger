import './ChatItem.scss';

interface ChatItemInterface {
  name: string | null;
}

export function ChatItem({ name }: ChatItemInterface) {
  return (
    <div className="chat">
      <div className="chat-img"></div>
      <div className="chat-descr">
        <div className="chat-title">{name}</div>
      </div>
    </div>
  );
}
