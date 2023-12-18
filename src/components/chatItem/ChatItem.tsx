import './ChatItem.scss';

interface ChatItemInterface {
  name: string | null;
  id: number | null;
}

export function ChatItem({ name, id }: ChatItemInterface) {
  const onClick = () => {
    const soket = new WebSocket(
      `ws://0.0.0.0:8001/ws/chat/${id}?token=${localStorage.getItem('accses_token')}`
    );

    soket.onopen = (data) => {
      console.log(data);
    };
  };

  return (
    <div className="chat" onClick={onClick}>
      <div className="chat-img"></div>
      <div className="chat-descr">
        <div className="chat-title">{name}</div>
      </div>
    </div>
  );
}
