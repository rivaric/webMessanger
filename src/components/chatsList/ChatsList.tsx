// import { SearchIcon } from './icon/SearchIcon';
import './ChatsList.scss';

import { ChatItem } from '../chatItem/ChatItem';
import { useUserStore } from '../../store/useUserStore';

export function ChatsList() {
  const rooms = useUserStore((state) => state.user.rooms);

  return (
    <div className="chats-list-background">
      <h1>Message</h1>
      <input placeholder="Search for chats" className="search-chats" />
      <div className="chats-list">
        {rooms.map(({ name }, i) => (
          <ChatItem name={name} key={i} />
        ))}
      </div>
    </div>
  );
}
